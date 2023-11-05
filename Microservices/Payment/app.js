const express = require('express');
const jwt = require('crypto');
const app = express();


let merchantSecret  = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
let merchantId      = '2xxxxx';
let hashedSecret    = md5(merchantSecret).toString().toUpperCase();
let amountFormated  = parseFloat( amount ).toLocaleString( 'en-us', { minimumFractionDigits : 2 } ).replaceAll(',', '');
let currency        = 'LKR';
let hash            = md5(merchantId + orderId + amountFormated + currency + hashedSecret).toString().toUpperCase();

app.use(express.json());

// In-memory database for simplicity (Can replace with actual database)
const users = [];

// Register a new user
app.post('/getpayment', (req, res) => {
  const { bill_id } = req.body;

  data = {
    merchantId:merchantId,
    orderId : bill_id,
    amount : amount , // need to get from the database
    currency : currency,
    hash: hash
  }

  res.status(201).json(data);
});

// User login
app.post('/savepayment', (req, res) => {
  //get the bill id from the payment gateway and update the status from 0 to 1 
});



app.listen(5006, () => {
  console.log('Authentication Service is running on port 5006');
});
