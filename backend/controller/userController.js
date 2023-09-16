const express = require('express');
const User = require('../model/userModel');
const {sendJWTToken} = require("../jwtService")

exports.registerUser = async (req, res, next) => {
  try {
    const { firstName,lastName, email, password } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      avatar: {
        public_id: 'this is demo id',
        url: 'publicurl',
      },
    });
    res.status(200).json({
      success: true,
      message: 'user Registered',
      user,
    });
    // sendJWTToken(user, 201, res);
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: false,
      message: 'user Registered unSuccessful',
    });
  }
};


// Login User
exports.loginUser = async (req, res, next) => {

  try{
    const { email, password } = req.body;
    console.log(email)

    if (!email || !password) {
      return next(
        console.log("Credential doesn't match")
      );
    }
  
     var user = await User.findOne({ email }).select('+password');
  
    if (!user) {
      return next(console.log("User Credential doesn't match"));
    }
  
    const isPasswordMatched = user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(console.log("Password Credential doesn't match"));
    }
  return sendJWTToken(user, 200, res);
  }catch(e){
console.log(e)
  }
  
 
};