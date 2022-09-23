const express = require('express')
const db = require("./db")


const app = express()


app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))
const contactos = require("./routes/contactos")
app.use(contactos)
app.use(express.json())
app.get('/',(req,res)=>{res.send("Hola mundo")})
app.use(express.static('public'))



app.listen(3000,()=>{
    console.log('servidor corriendo en http://localhost:3000')
})