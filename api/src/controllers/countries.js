const { Country } = require("../db");
const { v4: uuidv4 } = require("uuid");
function getAllCountries(req, res, next) {
  return Country.findAll()
    .then((countries) => res.send(countries))
    .catch((error) => next(error));
}

function getByID(req, res, next) {
  const id = req.params.id;
  return Country.findByPk(id)
    .then((country) => res.send(country))
    .catch((error) => next(error));
}
function addCountry(req, res, next) {
  const country = req.body;
  return Country.create({ ...country, id: uuidv4() })
    .then((countries) => res.send(countries))
    .catch((error) => next(error));
}

function updateCountry(req, res) {
  const id = req.params.id;
  const country = req.body;
  return Country.update(country, { where: { id } })
    .then((updatedCountry) => res.send(updatedCountry))
    .catch((error) => next(error));
}

function deleteCountry(req, res) {
  const id = req.params.id;

  return Country.destroy({ where: { id } })
    .then(() => res.sendStatus(200))
    .catch((error) => next(error));
}

module.exports = {
  getAllCountries,
  getByID,
  addCountry,
  updateCountry,
  deleteCountry,
};
