const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")


const Schema = mongoose.Schema

const userSchema = new Schema({
first_name: {
type: String,

},
last_name: {
type: String,

},
email : {
type: String,
unique: true

},
Adress: {
    type: String,
    
},
PLZ: {
    type: Number,
    
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
        borrower : mongoose.Schema.Types.ObjectId,
        borrowerfname : String,
        borrowerlname: String,
        borrowed : Boolean,
        pending: Boolean,
    }
],
//rbooks is the books the user hat rented from other users
rbooks : [
    {
    title : String,
        book_id : mongoose.Schema.Types.ObjectId,
        btime : String,
        owner : mongoose.Schema.Types.ObjectId,
        allowed : Boolean
    }],
    Books : {
        book_id: mongoose.Schema.Types.ObjectId,
        
    },
    password : {
        type: String,
    }
    
  
}, {timestamps: true})

// static signup method
userSchema.statics.signup = async function(first_name,last_name,Adress,PLZ, mail, email, password)  {

    //validation
    if(!email || !password || !first_name || !last_name || !Adress || !PLZ   ) {
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)) {
        throw Error("Email is not valid")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough")
    }


    const exists = await this.findOne({email})

    if(exists) {
        throw Error("Email already in use")
    }

const salt = await bcrypt.genSalt(10)

const hash = await bcrypt.hash(password, salt)

const user = await this.create({first_name,last_name,Adress,PLZ, mail, email, password: hash })

return user
}

//static login method
userSchema.statics.login = async function(email,password) {

if (!email || !password) {
    throw Error("All fields must be filled")
}

const user = await this.findOne({email})

if(!user) {
    throw Error("Incorrect email")
}

const match = await bcrypt.compare(password, user.password)

if(!match) {
    throw Error("Incorrect password")
}

return user

}



module.exports = mongoose.model("User", userSchema)