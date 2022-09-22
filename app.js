import express from "express"
import db from "./db.js"
import {contactoRouter} from "./routes/contactos.js"
const app = express()


app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))
app.use(contactoRouter)
app.use(express.json())
app.get('/',(req,res)=>{res.send("Hola mundo")})
app.use(express.static('public'))



app.listen(3000,()=>{
    console.log('servidor corriendo en http://localhost:3000')
})