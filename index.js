const express = require('express')
const app = express()
const port = 4000
const testData = {
  name: 'John Doe',
  email: 'user@mail.com',
  password: '12345'
}
app.get('/', (req, res) => res.send(testData))
app.listen(port, () => console.log(`Server listening on port ${port}`))