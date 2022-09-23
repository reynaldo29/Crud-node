const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contactoSchema = new Schema({
    nombre:String,
    celular:String,
},{versionKey:false})

module.exports = mongoose.model("contactos",contactoSchema)