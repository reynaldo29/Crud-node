const Contacto=require('../model/Contacto')


module.exports.mostrar = (req,res) =>{
    Contacto.find({},(error,contactos)=>{
        if(error){
            return res.status(500).json({
                message:"Error mostrando conctactos"
            })
        }
        return res.render('index',{contactos: contactos})
    })
}

module.exports.crear = (req,res) =>{
    const contacto = new Contacto({
        nombre:req.body.nombre,
        celular:req.body.celular
    })
    contacto.save(function(error,contacto){
        if(error){
            return res.status(500).json({
                message:error
            })
        }
        res.redirect("/")
    })
}

module.exports.editar = (req,res) =>{
   const id = req.body.id_editar
   const nombre = req.body.nombre_editar
   const celular = req.body.celular_editar
   Contacto.findByIdAndUpdate(id,{nombre,celular},(error,contacto)=>{
    if(error){
        return res.status(500).json({
            message:'Error actualizando a contacto'
        })
    }
    res.redirect('/')
   })
}

module.exports.borrar = (req,res) =>{
    const id = req.params.id
    Contacto.findByIdAndRemove(id,(error,contacto)=>{
        if(error){
            return res.status(500).json({
                message:'Error al eliminar contacto'
            })
        }
        res.redirect("/")
    })
 }

