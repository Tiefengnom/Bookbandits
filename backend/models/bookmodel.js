const mongoose = require("mongoose")

const Schema = mongoose.Schema

const bookSchema = new Schema({
title: {
type: String,
required : true
},
author: {
type: String,
required : true
},
synopsis: {
    type: String,
    required: true
},
state: {
    type: String,
    required: true
},
owner: {
type: mongoose.Schema.Types.ObjectId, 
ref: "User",
required: true
},
language: {
type: String
},
category: {
type: String
},
borrowed: {
type: Boolean
},
image: {
    type: String
},
btime: {
    type: String
},
borrower : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
},
pending: {
    type: Boolean
}


}, {timestamps: true})

module.exports = mongoose.model("book", bookSchema)