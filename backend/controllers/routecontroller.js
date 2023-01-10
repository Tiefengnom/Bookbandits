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

//create a new book
const createBook = async (req,res,next) => {
 const {title,author,synopsis,language,state,owner,category,borrowed,image} = req.body
let id = ""
    
 try  {
      const book = await Book.create({title,author,synopsis,state,language,owner,category,borrowed,image})
      
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

//Search books by title, author, category and synopsis (global search)
const searchBooks = async (req, res) => {
    console.log("params", req.params);
    console.log("body", req.body);

    const search = { $regex: req.params.query || req.body.query, $options: "i" };
    const books = await Book.find(
        { $or: [{ title: search }, { author: search }, { category: search }, { synopsis: search }] },
        { title: 1, author: 1, synopsis: 1, category: 1 }
    ).sort({
        createdAt: -1,
    });

    res.status(200).json(books);
};

//test filter by language
// const getLanguages= async (req, res)=>{Book.aggregate([{$group: {_id: "$language"}}]); }

const getBooksByLanguage = async (req, res) => {
    const { language } = req.params;
    //book.find({language}) instead of {language:language} because it takes the key's name from the variable name.
    const books = await Book.find({ language });

    res.status(200).json({ books });
};

//End Books

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
    createBook,
    getBooks,
    getBook,
    getUser,
    deleteBook,
    updateBook,
    getUserBooks,
    signUser,
    searchBooks,
    getBooksByLanguage
};
