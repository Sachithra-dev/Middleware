const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
const app = express();
const PORT = 5002;

const url = 'mongodb+srv://winzzam:winzzam12345@winzzam-cluster0.r8h3csi.mongodb.net/winzzam?retryWrites=true&w=majority'; // Connection URL
const dbName = 'Sritel'; // Database Name

app.use(bodyParser.json());

const API_GATEWAY_URL = 'http://localhost:5000'; // API Gateway URL

let db; // Declare a variable to hold the database connection

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('DB is connected');
})
.catch((error) => {
  console.error('DB connection error:', error);
});


const availableServices = [
  { id: 1, name: 'International Roaming', monthlyCost: 10 },
  { id: 2, name: 'Ring-in Tone Personalization', monthlyCost: 5 },
  { id: 3, name: 'Data Top-ups', monthlyCost: 8 },
  // Add more available services as needed
];


// Endpoint to get available services
app.get('/services', (req, res) => {
  res.json(availableServices);
});

// Endpoint to activate a service for the current month
app.post('/activate-service', async (req, res) => {
  const { serviceId, customerId } = req.body;
  const service = availableServices.find(service => service.id === serviceId);
  if (!service) {
    return res.status(400).json({ message: 'Invalid service ID' });
  }

  const currentMonth = new Date().getMonth() + 1; // Get current month (1-12)

  const usersCollection = db.collection('monthlyActivations');

  try {
    const existingActivation = await usersCollection.findOne({ customerId, month: currentMonth });
    if (existingActivation && existingActivation.services.includes(serviceId)) {
      return res.status(400).json({ message: 'Service already activated for the current month' });
    }

    // Update or insert the activation for the current month
    await usersCollection.updateOne(
      { customerId, month: currentMonth },
      { $addToSet: { services: serviceId } },
      { upsert: true }
    );

    // Send activation notification to Notification Service via API Gateway
    const notificationData = {
      customerId: customerId,
      message: `Service activated: ${service.name}`,
      contactInfo: req.user.contactInfo, // Assuming contactInfo is available in the token
    };

    await axios.post(`${API_GATEWAY_URL}/send-notification`, notificationData);
    res.json({ message: 'Service activated successfully for the current month.' });
  } catch (error) {
    console.error('Error activating service:', error);
    res.status(500).json({ message: 'Error activating service' });
  }
});

// Endpoint to deactivate a service for the current month
app.post('/deactivate-service', async (req, res) => {
  const { serviceId, customerId } = req.body;
  const currentMonth = new Date().getMonth() + 1; // Get current month (1-12)

  const usersCollection = db.collection('monthlyActivations');

  try {
    const existingActivation = await usersCollection.findOne({ customerId, month: currentMonth });
    if (!existingActivation || !existingActivation.services.includes(serviceId)) {
      return res.status(400).json({ message: 'Service not found for the current month' });
    }

    // Remove the service from the activation for the current month
    await usersCollection.updateOne(
      { customerId, month: currentMonth },
      { $pull: { services: serviceId } }
    );

    res.json({ message: 'Service deactivated successfully for the current month.' });
  } catch (error) {
    console.error('Error deactivating service:', error);
    res.status(500).json({ message: 'Error deactivating service' });
  }
});
