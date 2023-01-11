const User = require("../models/usermodel")
const mongoose = require("mongoose")


//User

//signup as a User

async function signUser(req, res) {

    const { first_name, last_name } = req.body
 
    const user = await User.findOne({ first_name: first_name, last_name: last_name })
 
    if (!user) {
       return res.status(400).json({ error: "No such user" })
    }
    res.status(200).json(user)
 }
 
 //get a single user
 const getUser = async (req,res) => {
  const  {userid} = req.params
 
  if (!mongoose.Types.ObjectId.isValid(userid)) {
     return res.status(404).json({error: "No such user"})
  }
 
  const user = await User.findById(userid)
 
  if(!user) {
  return res.status(400).json({error: "No such user"})
  }
  res.status(200).json(user)
 }
 
 
 //create a new user
 const createUser = async (req,res) => {
  const {first_name,last_name,Adress,PLZ,mail} = req.body
 
     
  try    {
         const user = await User.create({first_name,last_name,Adress,PLZ,mail})
         res.status(200).json(user)
         }
  catch (error) {
         res.status(400).json({error: error.message})
 
     }
 }
 
 
 
 
 
 //End User
 
 
 
 module.exports = {
     createUser,
     getUser,
     signUser,
      };