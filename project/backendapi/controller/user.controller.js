import { validationResult } from "express-validator"
import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import nodemailer from "nodemailer";
export const signIn = async (request, response, next) => {
  try {
    let { email, password } = request.body;
    let user = await User.findOne({ email });
    if (user) {
      let hashPassword = user.password;
      let status = bcrypt.compareSync(password, hashPassword);
      return status ? response.status(200).json({ message: "Sign in success", user, token: generateToken(email) }) : response.status(401).json({ error: "Bad request | Invalid password" });
    }
    else
      return response.status(401).json({ error: "Bad request | Email id not found" });
  }
  catch (err) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
}
const generateToken = (userEmail) => {
  let payload = { subject: userEmail };
  return jwt.sign(payload, process.env.SECRET_KEY);
}
export const signUp = async (request, response, next) => {
  try {
    let error = validationResult(request);
    if (!error.isEmpty())
      return response.status(401).json({ error: "Bad request.." });
    let { password } = request.body;
    let saltKey = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, saltKey);
    request.body.password = password;
    
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'puruaiai4@gmail.com',
        pass: process.env.GMAIL_PASSWORD
      }
    });
    let otp = generateOTP();
    const receiver = {
      from: 'puruaiai4@gmail.com',
      to: request.body.email,
      subject: 'E-shop User Verification',
      html: `<h3>Dear ${request.body.name}</h3><br>
      <p>Thank you for registration. To verify your account use this OTP.</p>
      <h1>${otp}</h1>
      <p>Thanks</p>
      <p>E-shop team</p>`
      
    };

    transport.sendMail(receiver, async (error, info) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log('Email sent:', info.response);
        request.body.OTP = otp;
        let result = await User.create(request.body);
        return response.status(201).json({ message: "User created", user: result });
      }
    });
  }
  catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal Server Error" });
  }
}

function generateOTP() { 
  let digits = '0123456789'; 
  let OTP = ''; 
  let len = digits.length 
  for (let i = 0; i < 4; i++) { 
      OTP += digits[Math.floor(Math.random() * len)]; 
  } 
   
  return OTP; 
} 
