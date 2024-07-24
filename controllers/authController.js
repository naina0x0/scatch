const bcrypt = require("bcrypt");
const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken");
const {generateToken}= require("../utils/generateToken");
// const userModel = require("../models/user-model");


module.exports.registerUser = async (req, res) => {
    try {
      let { email, password, fullname } = req.body;

      let user = await userModel.findOne({email:email});
  if(user) return res.status(401). send ("you already have an account")
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          if (err) return res.send(err.message);
          else {
            let user = await userModel.create({
              email,
              password: hash,
              fullname,
            });
          let token = generateToken(user);
            res.cookie("token", token);
            res.send("user created successfully");
          }
        });
      });
  
      res.send(user);
    } catch (err) {
      console.log(err);
    }
  };

  module.exports.loginUser = async (req, res) => {
    let {email, password}= req.body;


   let user = await  userModel.findOne({email: email});
   if(!user) return res.send ("Email or Password Incorrect!");
   
   bcrypt.compare(password, user.password,function(err,result){
if (result){
   let token =  generateToken(user);
   res.cookie("token", token);
   res.send("you can login ")
}
else{
   res.send("Password Incorrect!"); 
}
   })
  }

  module.exports.logout = function(req, res){
    res.cookie("token","");
    res.redirect("/")
  }