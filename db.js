const mongoose = require('mongoose')
const url = 'mongodb://localhost/dbcontacto'

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: false,
   
})

const db = mongoose.connection
db.on('error',console.error.bind(console,'Error al conectar MongoDb'))
db.once('open',function callback(){
    console.log("conectado a mongo")
})
module.exports = db

