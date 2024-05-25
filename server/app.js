const app = require("express")();
const port = 3000;

app.get("/hello", (req, res)=>{
    res.send("helluuuurrr wrld");
})