const User = require("../models/usermodel")
const mongoose = require("mongoose")


//User

//signup as a User

async function signUser(req, res) {

    const { first_name, last_name, password } = req.body
 
    const user = await User.findOne({ first_name: first_name, last_name: last_name/*,password :password*/ })
 
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
  const {first_name,last_name,Adress,PLZ,mail,password} = req.body
 
     
  try    {
         const user = await User.create({first_name,last_name,Adress,PLZ,mail,password})
         res.status(200).json(user)
         }
  catch (error) {
         res.status(400).json({error: error.message})
 
     }
 }
 
const Bookentry = async (req,res,next) => {
const {id} = req.params

if (!mongoose.Types.ObjectId.isValid(id)) {
   return res.status(404).json({error: "No such user"})
}

const user = await User.findOneAndUpdate({_id: id}, {
   $push: {Books: {btime,title,book_id: id,borrower}}

   })


}


 const UpdateUser = async (req,res,next) => {
   const {id} = req.params
   const {owner,btime,title,borrower} = req.body

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: "No such user"})
   }

   const user = await User.findOneAndUpdate({_id: owner}, {
   $push: {bbooks: {btime,title,book_id: id,borrower}}

   })

   if(!user) {
      return res.status(404).json({error: "No such user"})
      }
     next()

 }

 const RentUser = async (req,res) => {
   const {id} = req.params
   const {borrower,btime,title} = req.body

   if (!mongoose.Types.ObjectId.isValid(borrower)) {
      return res.status(404).json({error: "No such user"})
   }

   const user = await User.findOneAndUpdate({_id: borrower}, {
      $push: {rbooks: {btime,title,book_id: id}}
   
      })

      if(!user) {
         return res.status(404).json({error: "No such user"})
         }
        

 }

 const updateBook = async (req,res, next) => {
  
   const {id} = req.params
   console.log(req.body)
 
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: "No such book"})
    }
    
    const book = await Book.findOneAndUpdate({_id: id}, {
    ...req.body
    })
   
    if(!book) {
       return res.status(404).json({error: "No such book"})
       }
  
    res.status(200).json({book})
   next()
   }
 
 
 //End User
 
 
 
 module.exports = {
     createUser,
     getUser,
     signUser,
     UpdateUser,
     RentUser
      };