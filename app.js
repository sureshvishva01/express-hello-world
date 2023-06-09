const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Parse JSON bodies
app.use(bodyParser.json());

// Webhook endpoint
app.post('https://80c25a.myshopify.com/admin/api/2023-04/webhooks.json', (req, res) => {
  const { body } = req;
  console.log('Webhook event received:', body);

  // Extract the order ID from the webhook payload
  const { id: orderId } = body;

  // Process the order ID as needed (e.g., store it in a database, trigger actions, etc.)

  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on https://shopifyorder.onrender.com/`);
});
