const app = require("express")();
const mongoose = require("mongoose");
const port = 3000;

mongoose.connect("mongodb+srv://jojackblack:VaZ0t4CIOhjp1eBL@cluster0.yysbreu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const auth = require("./controllers/auth");

app.get("/hello", (req, res)=>{
    res.send("helluuuurrr wrld");
})

app.use("/auth", auth);

app.listen(port, (connection)=>{
    console.log(`started listening on port ${port}`);
})

/*
mongodb+srv://jojackblack:VaZ0t4CIOhjp1eBL@cluster0.yysbreu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/