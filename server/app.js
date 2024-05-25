const app = require("express")();
const port = 3000;

app.get("/hello", (req, res)=>{
    res.send("helluuuurrr wrld");
})

app.listen(port, (connection)=>{
    console.log(`started listening on port ${port}`);
})

/*
mongodb+srv://jojackblack:VaZ0t4CIOhjp1eBL@cluster0.yysbreu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/