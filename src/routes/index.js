const express = require("express");
//Módulo encargado de crear las rutas
const router = express.Router();

router.get("/", (req, res) =>
  res.render("index.html", { tittle: "Primera pagina web node" })
);
router.get("/contact", (req, res) =>
  res.render("contact.html", { tittle: "Página de contacto" })
);

module.exports = router;
