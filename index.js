const express = require("express"); 
const app = express(); 
const PORT = 5000; 
app.get("/test", (req, res) => { 
    res.send("Express on Vercel"); 
}); 
    app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });