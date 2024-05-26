const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const app = express();

mongoose.connect("mongodb+srv://jojackblack:VaZ0t4CIOhjp1eBL@cluster0.yysbreu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// routes
const auth = require("./controllers/auth");

// middleware
app.use(express.json());

// routing middleware
app.use("/auth", auth);

app.listen(port, (connection)=>{
    console.log(`started listening on port ${port}`);
})

/*
mongodb+srv://jojackblack:VaZ0t4CIOhjp1eBL@cluster0.yysbreu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/