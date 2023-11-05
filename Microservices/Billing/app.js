const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const PORT = 3003;

const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'ServiceActivations'; // Database Name

app.use(bodyParser.json());

let db; // Declare a variable to hold the database connection

// Helper function to calculate total bill based on activated services
function calculateTotalBill(activatedServices) {
  // Calculate total bill logic here based on the activated services
  // ...
  return totalBill;
}

// Endpoint to generate monthly bills for all customers
app.get('/generate-bills', async (req, res) => {
  try {
    const usersCollection = db.collection('monthlyActivations');
    const currentMonth = new Date().getMonth() + 1; // Get current month (1-12)

    const customerBills = await usersCollection
      .find({ [`services.${currentMonth}`]: { $exists: true } })
      .toArray();

    const allCustomerBills = customerBills.map(customer => {
      const totalBill = calculateTotalBill(customer.services[currentMonth]);
      return { customerId: customer._id, totalBill };
    });

    res.json(allCustomerBills);
  } catch (error) {
    console.error('Error generating bills:', error);
    res.status(500).json({ message: 'Error generating bills' });
  }
});

// Endpoint to get billing info for a specific customer by ID
app.get('/billing-info/:customerId', async (req, res) => {
  const { customerId } = req.params;
  try {
    const usersCollection = db.collection('monthlyActivations');
    const currentMonth = new Date().getMonth() + 1; // Get current month (1-12)

    const customer = await usersCollection.findOne({ _id: customerId, [`services.${currentMonth}`]: { $exists: true } });

    if (customer) {
      const totalBill = calculateTotalBill(customer.services[currentMonth]);
      res.json({ customerId, totalBill });
    } else {
      res.status(404).json({ message: 'Billing info not found for the customer.' });
    }
  } catch (error) {
    console.error('Error fetching billing info:', error);
    res.status(500).json({ message: 'Error fetching billing info' });
  }
});

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB successfully');
  db = client.db(dbName); // Assign the database connection to the db variable

  // Define your routes and MongoDB operations here

  app.listen(PORT, () => {
    console.log(`Billing Microservice is running on port ${PORT}`);
  });
});
