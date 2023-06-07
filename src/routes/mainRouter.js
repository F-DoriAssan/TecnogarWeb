const express = require("express");
const router = express.Router();

/* MAIN ROUTES */

router.get('/', (req, res) => {
    res.send("Pagina de inicio")
}); //Declaracion de rutas

router.get('/contacto', (req, res) => {
    res.send("Pagina de contacto")
}); //Declaracion de rutas

//EXPORTAMOS
module.exports = router;