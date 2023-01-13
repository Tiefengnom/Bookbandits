const Book = require("../models/bookmodel")
const mongoose = require("mongoose")

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
     
     const getUserBooks = async (req, res) => {
         if (req.params.userid && req.params.userid !== 'undefined') {
             const books = await Book.find({ owner: req.params.userid }).sort({ createdAt: -1 });

             res.status(200).json(books);
         } else {
             res.status(400).json({ error: "Please log in first." });
         }
     };

       // rent and update a book
  
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
  
  //Search books by title, author, category and synopsis (global search)
  const searchBooks = async (req, res) => {
   try{   
   console.log("params", req.params);
      console.log("body", req.body);

      const query = {
          $and: [],
      };

      if (req.params.query || req.body.query) {
          const search = { $regex: req.params.query || req.body.query, $options: "i" };
          query.$and.push({ $or: [{ title: search }, { author: search }, { category: search }, { synopsis: search }] });
      }

      if (req.body.language) {
          query.$and.push({ language: req.body.language });
      }

      if (req.body.availability) {
         query.$and.push({ borrowed: req.body.availability });
     }
console.log(query)
      const books = await Book.find(query, { title: 1, author: 1, synopsis: 1, category: 1 }).sort({
          createdAt: -1,
      });

      res.status(200).json(books);}
      catch (error) {
         console.log(error)
      }
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

  module.exports = {
    createBook,
    getBooks,
    getBook,
    deleteBook,
    updateBook,
    getUserBooks,
    searchBooks,
    getBooksByLanguage
};