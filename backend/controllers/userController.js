const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async(req, res)=>{
    const {name, email, password, role} = req.body;
    try {
        const user = await User.create({name,email,password,role});
        res.status(200).json({success:true, user})
    } catch (error) {
        res.status(400).json('registration failed');
    }
}

exports.login = async(req, res)=>{
   const {email,password} = req.body;
   const user = await User.findOne({email})

   if(!user){
    return res.status(500).json('user not found');
   }
   const isPassMatch = await bcrypt.compare(password, user.password);

   if(!isPassMatch){
    return res.status(400).json('password not match');
   }

   const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{
    expiresIn:'1d'
   })

   res.status(200).json({success:true, user, token});
}