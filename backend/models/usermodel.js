const mongoose = require("mongoose")

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
        
    }
    
  




}, {timestamps: true})

module.exports = mongoose.model("User", userSchema)