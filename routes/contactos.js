const express = require("express")
const router = express.Router()
const contactoController = require("../controllers/contactoController.js")

router.get("/",contactoController.mostrar)
router.post("/crear",contactoController.crear)
router.post("/editar",contactoController.editar)
router.get("/borrar/:id",contactoController.borrar)
module.exports = router
// export const contactoRouter = Router()
// contactoRouter.route("/").get(contactoController.mostrar)
// contactoRouter.route("/crear").post(contactoController.crear)
// contactoRouter.route("/editar").post(contactoController.editar)
// contactoRouter.route("/borrar/:id").get(contactoController.borrar)


