const { Router } = require("express");
const { Country } = require("../db");
const router = Router();

router.get("/", (req, res) => {
  Country.findAll()
    .then((country) => res.send(country))
    .catch((error) => next(error));

router.get("/:id", (req, res) => {
  Country.findAll()
    .then((country) => res.send(country))
    .catch((error) => next(error));
});

router.post("/", (req, res) => {
  res.send("Ruta countries");
});
router.put("/", (req, res) => {
  res.send("Ruta countries");
});
router.delete("/", (req, res) => {
  res.send("Ruta countries");
});

module.exports = router;
