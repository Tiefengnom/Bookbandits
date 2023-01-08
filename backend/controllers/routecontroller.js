const User = require("../models/usermodel")
const Book = require("../models/bookmodel")
const mongoose = require("mongoose")

//Books

//get all books

const getBooks = async (req,res) => {
 const books = await Book.find({}).populate("owner").sort({createdAt: -1})

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

//get the books in the searchbar

const searchBook = async (req,res) => {
   const {search} = req.body
   console.log(req.body)
   const books = await Book.find({title: search})

   res.status(200).json(books)

}

//create a new book
const createBook = async (req,res,next) => {
 const {title,author,synopsis,language,state,owner,category,borrowed} = req.body
let id = ""
    
 try  {
      const book = await Book.create({title,author,synopsis,state,language,owner,category,borrowed})
      
      res.status(200).json(book)
                  
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
  

  // get books from a Usercollection

const getUserBooks = async (req,res) => {
   const books = await Book.find({owner: req.params.userid}).sort({createdAt: -1})

   res.status(200).json(books)
  }

   

  // rent and update a book
  
  const updateBook = async (req,res) => {
  
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
  
  }

//Search books test
const searchBooks = async (req, res) => {
    console.log(req.params);
    const books = await Book.find({ title: { $regex: req.params.query, $options: "i" } }, { title: 1 }).sort({
        createdAt: -1,
    });

    res.status(200).json(books);
};

 


//End Books

//User


//signup as a User

const signUser = async (req,res) => {
   
const {first_name,last_name} = req.body

const user = await User.findOne({first_name: first_name, last_name: last_name})

if(!user) {
   return res.status(400).json({error: "No such user"})
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
createBook,
getBooks,
getBook,
getUser,
deleteBook,
updateBook,
getUserBooks,
signUser,
searchBook,
searchBooks


}