const router = require("express").Router();
const argon = require("argon2");

router.get("/", (req, res)=>{
    res.send("hey from auth controller");
})

router.post("/signup", (req, res)=>{
    console.log(req.body);
    res.send(`Good stuff`)
})

module.exports = router;