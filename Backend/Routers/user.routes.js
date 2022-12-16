require("dotenv").config();
const express = require("express");
const { UserModel } = require("../Models/user.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.get("/", async (req, res) => {
  const allUsers = await UserModel.find();
  res.send(allUsers);
});

userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const UserPresent = await UserModel.find({ email });
  if (UserPresent?.email) {
    res.send({ User: "User already exists!" });
  } else {
    try {
      bcrypt.hash(password, 8, async (e, hash) => {
        const newUser = new UserModel({
          email: email,
          password: hash,
          name: name,
        });
        await newUser.save();
        console.log(newUser);
      });
      res.send({ User: "User Created Successfully!" });
    } catch (e) {
      res.send({ e: e.message });
    }
  }
});

userRouter.post("/login", async(req,res) => {
  const {email,password} = req.body
  const isPresent = await UserModel.findOne({email})
  if(isPresent){
      const id = isPresent._id
      const hash_password = isPresent.password
      bcrypt.compare(password,hash_password, function(e,result){
          if(result== true){
              const token = jwt.sign({userID:id},process.env.S_KEY,{expiresIn:'1h'})
              res.send({Login:"login SUcess","Token":token})
          }
      })
           

    

  }else{
      res.send({"Err":"Login Failed !"})

  }
  
})

module.exports = { userRouter };