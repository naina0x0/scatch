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



router.get('/admin', (req, res) => {
   let success =  req.flash('success')
res.render("createproduct.ejs",{success});
});
module.exports = router;

