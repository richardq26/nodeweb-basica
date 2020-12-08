const express = require("express");
const app = express(); //es el servidor
const path = require("path");

//settings
app.set("port", 3000);
app.engine("html", require("ejs").renderFile); //para no usar archivos .ejs, el ejs interpreta el html
app.set("view engine", ".ejs"); //para reemplazar archivos .html por .ejs
app.set("views", path.join(__dirname,"views"));
//middlewares

//routes
app.use(require("./routes/index"));

//static files

app.use(express.static(path.join(__dirname, "public")));
/*
app.get(
  "/",
    (req,res)=> res.render("index",{title:"first web site"})
    )*/
  //(req, res) => res.sendFile(path.join(__dirname, "views/index.html"))
  //el path concatena los directorios asi sea linux o windows;


//litening the server
app.listen(3000, () => console.log("Server on port ", app.get("port")));
