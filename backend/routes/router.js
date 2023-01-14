const express = require("express")

/*const {
    createUser,
    createBook,
    getBook,
    getBooks,
    getUser,
    deleteBook,
    updateBook,
    getUserBooks,
    signUser,
    searchBooks,
    getBooksByLanguage
}               = require("../controllers/routecontroller")*/

const {
    createBook,
    getBook,
    getBooks,
    deleteBook,
    updateBook,
    getUserBooks,
    searchBooks,
    //getBooksByLanguage
}               = require("../controllers/bookcontroller.js")



const {
    createUser,
    getUser,
    signUser,
    UpdateUser,
    RentUser
}               = require("../controllers/usercontroller")

const router = express.Router()

//user routes



router.get("/", (req,res) => {
    res.json({mssg: "All fine here today"})
})


//router.get("/user/:id", getUser)


router.get("/collection", getBooks)

router.post("/collection", searchBooks)

// router.get("/collection/search/:query", searchBooks)

// router.get("/collection/language/:language", getBooksByLanguage)

router.post("/login", signUser)

router.get("/:userid/user_collection", getUserBooks)

router.get("/:userid", getUser)

router.get("/collection/:id", getBook)

router.post("/collection/:id", updateBook, UpdateUser, RentUser )

router.post("/user/create_book", createBook)

router.post("/signup", createUser)   

router.delete("/:userid/user_collection/:id", deleteBook)

router.patch("/:userid/user_collection/:id", updateBook)




module.exports = router