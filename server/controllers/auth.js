const router = require("express").Router();

router.get("/", (req, res)=>{
    res.send("hey from auth controller");
})

module.exports = router;