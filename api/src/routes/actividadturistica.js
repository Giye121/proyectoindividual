const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Ruta Activad turistica");
});

module.exports = router;
