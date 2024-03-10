/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sarvesh:mevo123@testingcluster.tg9uqrx.mongodb.net/?retryWrites=true&w=majority&appName=TestingCluster";
const client = new MongoClient(uri);

*/


const express = require('express');
const app = express();
const port = 3000;

app.post('/data', (req, res) => {
  const data = req.body.name;
  // Process the received data
  res.send('Data received: ' + data);
  console.log('Data is ::' + data)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});