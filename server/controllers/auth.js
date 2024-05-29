const router = require("express").Router();
const { json } = require("express");
const userModel = require("../models/User");
const argon = require("argon2");
const User = require("../models/User");

router.get("/", (req, res)=>{
    res.send("hey from auth controller");
})

router.post("/signup", async (req, res)=>{
    // console.log(req.body);
    const { email, password, confirmPassword, username } = req.body;
    
    const duplicateEmail = await User.find({email});

    if(duplicateEmail){
        res.status(400).send({error:"An account is already created using this email address"});
        return;
    }
    if(password === confirmPassword){
        try{
            const hash = await argon.hash(password);
            const newUser = new userModel({
                username, email, password:hash
            })
            // console.log(newUser);
            await newUser.save();
            res.status(200).send({username, email});
            return;
        }
        catch{
            res.status(400).send({error: "Cant make a hashed password"});
            return;
        }
    }
    else{
        res.status(400).send({error:"password is incorrect"});
        return;
    }
})

module.exports = router;