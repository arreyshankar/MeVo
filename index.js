const express = require('express')
const app = express()
const port = 4000
const testData = {
  name: 'John Doe',
  email: 'user@mail.com',
  password: '12345'
}
app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    res.json(testData);
   });
app.listen(port, () => console.log(`Server listening on port ${port}`))