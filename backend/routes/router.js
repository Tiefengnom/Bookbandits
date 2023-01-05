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
    signUser
}               = require("../controllers/routecontroller")

const router = express.Router()

//user routes



router.get("/", (req,res) => {
    res.json({mssg: "All fine here today"})
})


//router.get("/user/:id", getUser)


router.get("/collection", getBooks)

router.post("/login", signUser)

router.get("/:userid/user_collection", getUserBooks)

router.get("/:userid", getUser)

router.get("/collection/:id", getBook)

router.post("/user/create_book", createBook)

router.post("/signup", createUser)   

router.delete("/user/user_collection/:id", deleteBook)

router.patch("/user/user_collection/:id", updateBook)




module.exports = router