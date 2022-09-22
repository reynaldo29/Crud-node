import {Router} from "express";
import * as contactoController from "../controllers/contactoController.js"
export const contactoRouter = Router()
contactoRouter.route("/").get(contactoController.mostrar)
contactoRouter.route("/crear").post(contactoController.crear)
contactoRouter.route("/editar").post(contactoController.editar)
contactoRouter.route("/borrar/:id").get(contactoController.borrar)


