const { Router } = require("express");
// Importar todos los routers;traer los countries
// Ejemplo: const authRouter = require('./auth.js');
const CountriesRoutes = require("./countries");
const actividadturisticaRoutes = require("./actividadturistica");

const router = Router();

router.use("/countries", CountriesRoutes);
router.use("/actividadturistica", actividadturisticaRoutes);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
