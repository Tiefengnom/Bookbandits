const User = require("../models/usermodel")
const Book = require("../models/bookmodel")
const mongoose = require("mongoose")

//Books

//get all books

const getBooks = async (req,res) => {
 const books = await Book.find({}).sort({createdAt: -1})

 res.status(200).json(books)
}

//get a single book
const getBook = async (req,res) => {
 const  {id} = req.params

 if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such book"})
 }

 const book = await Book.findById(id)

 if (!book) {
    return res.status(400).json({error: "No such book"})
 }
 res.status(200).json(book)
}

//create a new book
const createBook = async (req,res) => {
 const {title,author,synopsis,state,owner} = req.body

    
 try  {
      const book = await Book.create({title,author,synopsis,state,owner})
      res.status(200).json(book)
      } 
 catch (error) {
      res.status(400).json({error: error.message})

    }}

//End Books

//User


//get a single user
const getUser = async (req,res) => {
 const  {id} = req.params

 if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such user"})
 }

 const user = await User.findById(id)

 if(!user) {
 return res.status(400).json({error: "No such user"})
 }
 res.status(200).json(user)
}


//create a new user
const createUser = async (req,res) => {
 const {first_name,last_name,Adress,PLZ} = req.body

    
 try    {
        const user = await User.create({first_name,last_name,Adress,PLZ})
        res.status(200).json(user)
        }
 catch (error) {
        res.status(400).json({error: error.message})

    }
}


//delete a book

const deleteBook = async (req,res) => {
 const {id} = req.params

 if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such book"})
 }

 const book = await Book.findOneAndDelete({_id: id})

 if(!book) {
    return res.status(404).json({error: "No such book"})
    }

 res.status(200).json(book)

}

//update a book

const updateBook = async (req,res) => {

 const {id} = req.params

 if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such book"})
 }
 
 const book = await Book.findOneAndUpdate({_id: id}, {
 ...req.body
 })

 if(!book) {
    return res.status(404).json({error: "No such book"})
    }

 res.status(200).json(book)

}




//End User



module.exports = {
createUser,
createBook,
getBooks,
getBook,
getUser,
deleteBook,
updateBook


}