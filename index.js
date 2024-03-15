const express = require('express');
const app = express();
const port = 3000;

app.post('/data', (req, res) => {
  const data = req.body.name;
  res.send('Data received: ' + data);
  console.log('Data is ::' + data)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});