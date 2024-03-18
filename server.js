
const express = require('express');
const app = express();
const PORT = 3000;
 
app.all('*', (req, res) => {
    res.send("GET Request Called")
    console.log("Request++")
})
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});