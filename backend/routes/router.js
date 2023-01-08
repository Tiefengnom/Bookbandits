const express = require("express")

const {
    createUser,
    createBook,
    getBook,
    getBooks,
    getUser,
    deleteBook,
    updateBook,
    getUserBooks,
    signUser,
    searchBook,
    
}               = require("../controllers/routecontroller")

const router = express.Router()

//user routes



router.get("/", (req,res) => {
    res.json({mssg: "All fine here today"})
})


//router.get("/user/:id", getUser)


router.get("/collection", getBooks)

router.post("/collection",searchBook)

router.post("/login", signUser)

router.get("/:userid/user_collection", getUserBooks)

router.get("/:userid", getUser)

router.get("/collection/:id", getBook)

router.post("/collection/:id", updateBook)

router.post("/user/create_book", createBook)

router.post("/signup", createUser)   

router.delete("/:userid/user_collection/:id", deleteBook)

router.patch("/:userid/user_collection/:id", updateBook)




module.exports = router