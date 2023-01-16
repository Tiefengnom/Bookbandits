const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const { UserContext } = require("../../frontend/src/context/Usercontext")

const Schema = mongoose.Schema

const userSchema = new Schema({
first_name: {
type: String,
required : true
},
last_name: {
type: String,
required : true
},
email : {
type: String,
unique: true

},
Adress: {
    type: String,
    required: true
},
PLZ: {
    type: Number,
    required: true
},
mail: {
    type: String
},
// bbooks is the books somebody has lent out to other people
bbooks : [
     {
        title : String,
        book_id : mongoose.Schema.Types.ObjectId,
        btime : String,
        borrower : mongoose.Schema.Types.ObjectId
    }
],
//rbooks is the books the user hat rented from other users
rbooks : [
    {
    title : String,
        book_id : mongoose.Schema.Types.ObjectId,
        btime : String,
        owner : mongoose.Schema.Types.ObjectId
    }],
    Books : {
        book_id: mongoose.Schema.Types.ObjectId,
        
    },
    password : {
        type: String,
    }
    
  
}, {timestamps: true})

// static signup method
userSchema.statics.signup = async (email,password) => {

    const exists = await this.findOne({email})

    if(exists) {
        throw Error("Email already in use")
    }

const salt = await bcrypt.genSalt(10)

const hash = await bcrypt.hash(password, salt)

const user = await this.create({email, password: hash })

return user
}



module.exports = mongoose.model("User", userSchema)