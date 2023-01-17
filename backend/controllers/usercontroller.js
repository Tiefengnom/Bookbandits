const User = require("../models/usermodel")
const Book = require("../models/bookmodel")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const createToken = (_id) => {
return jwt.sign({_id}, process.env.SECRET , {expiresIn: "3d"})


}
//User

//signup as a User

async function signUser(req, res,next) {

    const {email, password } = req.body
 
    try    {
      const user = await User.login(email,password )
     
      //create a Token
      const token = await createToken(user._id)


      res.status(200).json({user,token})
      }
catch (error) {
      res.status(400).json({error: error.message})

  }
  next()
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
  const {first_name,last_name,email,Adress,PLZ,mail,password} = req.body
 
     
  try    {
         const user = await User.signup(first_name,last_name,Adress,PLZ, mail, email,password )
        
         //create a Token
         const token = await createToken(user._id)


         res.status(200).json({user,token})
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
   const {owner,btime,title,borrower, borrowerfname, borrowerlname,pending,borrowed} = req.body

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: "No such user"})
   }

   const user = await User.findOneAndUpdate({_id: owner}, {
   $push: {bbooks: {btime,title,book_id: id,borrower, borrowerfname, borrowerlname,pending,borrowed}}

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

 const clearOwner = async (req,res,next) => {
   const {borrowed,bid,borrower,user_id} = req.body

   if (!mongoose.Types.ObjectId.isValid(user_id)) {
       return res.status(404).json({error: "No such user"})
    }

   const user = await User.findOneAndUpdate({_id:user_id}, {
      $pull: {bbooks: {book_id: bid,borrower : borrower }}

   })

   if(!user) {
       return res.status(404).json({error: "No such user"})
       }

      next()

}

const clearRenter = async (req,res,next) => {
   const {borrowed,bid,borrower,user_id} = req.body

   if (!mongoose.Types.ObjectId.isValid(borrower)) {
       return res.status(404).json({error: "No such user"})
    }

   const user = await User.findOneAndUpdate({_id:borrower}, {
      $pull: {rbooks: {book_id: bid,owner : user_id }}

   })

   if(!user) {
       return res.status(404).json({error: "No such user"})
       }

      next()

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
     RentUser,
     clearOwner,
     clearRenter
      };