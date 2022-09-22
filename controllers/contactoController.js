import { Model } from "mongoose";
import model from "../model/Contacto.js";

export const mostrar = (req,res) =>{
    model.find({},(error,contactos)=>{
        if(error){
            return res.status(500).json({
                message:"Error mostrando conctactos"
            })
        }
        return res.render('index',{contactos: contactos})
    })
}

export const crear = (req,res) =>{
    const contacto = new model({
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

export const editar = (req,res) =>{
   const id = req.body.id_editar
   const nombre = req.body.nombre_editar
   const celular = req.body.celular_editar
   model.findByIdAndUpdate(id,{nombre,celular},(error,contacto)=>{
    if(error){
        return res.status(500).json({
            message:'Error actualizando a contacto'
        })
    }
    res.redirect('/')
   })
}

export const borrar = (req,res) =>{
    const id = req.params.id
    model.findByIdAndRemove(id,(error,contacto)=>{
        if(error){
            return res.status(500).json({
                message:'Error al eliminar contacto'
            })
        }
        res.redirect("/")
    })
 }

