const express = require('express');
const app = express();


const transactionRoute = require('./app/Routes/transaction');

const v1 = '/api'

app.use(express.json());
app.use(v1, transactionRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});