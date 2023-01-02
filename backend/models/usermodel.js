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
Books: {
    type: mongoose.Schema.Types.ObjectId, 
ref: "Book"


}




}, {timestamps: true})

module.exports = mongoose.model("User", userSchema)