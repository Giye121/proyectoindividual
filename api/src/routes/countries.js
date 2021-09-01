const { Router } = require("express");
const router = Router();
const {
  getAllCountries,
  getByID,
  addCountry,
  updateCountry,
  deleteCountry,
} = require("../controllers/countries");

router.get("/", getAllCountries);

router.get("/:id", getByID);

router.post("/", addCountry);

router.put("/", updateCountry);

router.delete("/", deleteCountry);

module.exports = router;
