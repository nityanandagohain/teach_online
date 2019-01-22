const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/Users");;
const auth = require("../auth");
const config = require("../config");

// @route       POST /users/register
// @desc        Registers a User
// @headers     [{"key":"Content-type","value":"application/json","description":""]
// @body        name,email,password
// @access      Public
router.post("/register", (req, res)=>{
    //register user
    const {name, email, password} = req.body;
    const user = new User({
        name,
        email,
        password
    })
    //encrypt the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, async(err, hash)=>{
            user.password  = hash;
            //save the user
            try{
                const newUser = await user.save();
                res.sendStatus(201);
            }catch(err){
                console.log(err)
                res.status(403).json({
                    message: "error creating user"
                })
            }
        });
    });
});


// @route       POST /users/auth
// @desc        Authenticate a user and returns an accesstoken valid for 15min
// @headers     [{"key":"Content-type","value":"application/json","description":""}]
// @body        email,password
// @access      Public
router.post("/auth", async(req, res)=>{
    const {email, password} = req.body;
    try{
        const user = await auth.authenticate(email, password);
        const token = await jwt.sign(user.toJSON(), config.JWT_SECRET, {expiresIn: "15m"});
        const {iat, exp} = jwt.decode(token);
        res.send({iat, exp, token});
    }catch(err){
        console.log(err)
        res.status(403).json({
            message: "Error in authentication"
        })
    }
});


module.exports = router;