const methodOverride = require("method-override");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

app.get("/personajes", (req, res) => {
  //   cconsole.log(__filename + "/data/personajes.json");
  //   console.log(path.join(__dirname, "/data/personajes.json"));
  const buffer = fs.readFileSync("./data/personajes.json");

  res.send("Lista de personajes");
  const personajes = JSON.parse(buffer);
  
});

app.use(methodOverride("_method"));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false })); //middlewares metodo get
app.use(express.json()); //middlewares para json

const mainRouter = require("./src/routes/mainRouter");
app.use("/", mainRouter); //"/" = aqui es el prefijo de las paginas

const productosRouter = require("./src/routes/productosRouter");
app.use("/productos", productosRouter);

const productosAPIRouter = require("./src/routes/api/productosAPIRouter");
app.use("/api/productos", productosAPIRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
