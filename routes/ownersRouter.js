const express = require('express');
const router = express.Router();;
const ownerModel = require("../models/owner-model");

if(process.env.NODE_ENV === 'development') {
    router.post('/create', async  (req, res) => {
      let owner = await  ownerModel.find();
       if(owner.lenght>0){
        return res.send(503).send("Permission denied");
    } 
    let {username, email, password} = req.body;
   let createdOwner = await ownerModel.create({
        fullname,
        email,
        password 
    
    });
 res.send("Permission granted");
        }); 
}



router.get('/', (req, res) => {
res.send("hey");
});
module.exports = router;

