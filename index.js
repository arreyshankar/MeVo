const express = require("express"); 
const bodyParser = require('body-parser');
const app = express(); 
const PORT = 5000; 
app.get("/test", (req, res) => { 
    res.send("Express on Vercel"); 
}); 

app.post('/login', (req, res) => {
    const { param1, param2 } = req.body;
    console.log(`Data is:: ${param1} and ${param2}`)
    res.status(200).json({ message: 'Success' });
  });
    app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });