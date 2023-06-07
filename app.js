const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Parse JSON bodies
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhooks/shopify', (req, res) => {
  const { body } = req;
  console.log('Webhook event received:', body);

  // Extract the order ID from the webhook payload
  const { id: orderId } = body;

  // Process the order ID as needed (e.g., store it in a database, trigger actions, etc.)

  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
`
