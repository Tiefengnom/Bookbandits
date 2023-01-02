require("dotenv").config()

const express = require("express")
const router = require("./routes/router")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()


//middleware
app.use(express.json())
app.use(cors())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()

})

//routes

app.use("/bookbandits", router)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is running under " , process.env.PORT)
        })
})
.catch((error) => {
console.log(error)
})






