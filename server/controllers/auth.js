const router = require("express").Router();
const userModel = require("../models/User");
const argon = require("argon2");

router.get("/", (req, res)=>{
    res.send("hey from auth controller");
})

router.post("/signup", async (req, res)=>{
    // console.log(req.body);
    const { email, password, confirmPassword, username } = req.body;
    
    if(password === confirmPassword){
        try{
            const hash = await argon.hash(password);
            const newUser = new userModel({
                username, email, password:hash
            })
            // console.log(newUser);
            await newUser.save();
            res.status(200).send(newUser);
        }
        catch{
            res.status(400).send({"err": "Cant make a hashed password"});
        }
    }
    else{
        res.status(400).send("bad stuff");
    }
})

module.exports = router;