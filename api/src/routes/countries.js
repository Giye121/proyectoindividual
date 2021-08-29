const { Router } = require("express");
const { Country } = require("../db");
const router = Router();

router.get("/", (req, res) => {
  Country.findAll();
  res.send("Ruta countries");
});
router.get("/", (req, res) => {
  res.send("Ruta countries");
});
router.get("/", (req, res) => {
  res.send("Ruta countries");
});
router.get("/", (req, res) => {
  res.send("Ruta countries");
});

module.exports = router;
