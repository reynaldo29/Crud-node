import mongoose from "mongoose";
const Schema = mongoose.Schema

const contactoSchema = new Schema({
    nombre:String,
    celular:String,
},{versionKey:false})

const model = mongoose.model('contactos',contactoSchema)
export default model