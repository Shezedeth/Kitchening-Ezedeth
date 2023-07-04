const express = require("express");
const app = express();
const path = require("path");
const PORT = 3030;

// CONFIGURACIONES

app.use(express.static("public"));

// RUTAS
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);

app.get("/quienes", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "quienes.html"))
);

app.get("/contacto", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "contacto.html"))
);

app.get("/portfolio", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "portfolio.html"))
);

app.get("/servicios", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "servicios.html"))
);

app.get("/sucursales", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "sucursales.html"))
);

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "404.html"))
);

app.listen(PORT, () =>
  console.log("Servidor corriendo en http://localhost:" + PORT)
);
