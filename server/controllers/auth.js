const router = require("express").Router();
const { json } = require("express");
const userModel = require("../models/User");
const argon = require("argon2");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const universalTokenSecret = "0#82da25!3$d74f!s";

router.get("/", (req, res)=>{
    res.send("hey from auth controller");
})

router.post("/signup", async (req, res)=>{
    const { email, password, passwordConfirmation, username } = req.body;
    
    const duplicateEmail = await User.findOne({email});

    if(duplicateEmail){
        res.status(400).send({error:"An account is already created using this email address"});
        return;
    }
    if(password === passwordConfirmation){
        try{
            const hash = await argon.hash(password);
            const newUser = new userModel({
                username, email, password:hash
            })
            await newUser.save();
            const token = await jwt.sign(JSON.stringify(newUser), universalTokenSecret);
            res.status(200).send({token, user:newUser});
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

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(user){
        try{
            if(await argon.verify(user.password, password)){
                console.log(user);
                const foundUser = {email, password, username: user.username};
                const token = await jwt.sign(foundUser, universalTokenSecret);
                res.status(200).send({token, user:foundUser});
                return;
            }
        }
        catch(err){
            console.log(err);
            res.status(400).send("naw, homes, passwords dont match");
            return
        }
    }
    else{
        res.status(400).send("naw, homes, no user found");
        return
    }
})

module.exports = router;