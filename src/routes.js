const express = require("express");
const ProductController = require("./controllers/ProductController")

const routes = express.Router();

routes.post("/product", ProductController.create);         //Create
routes.get("/product", ProductController.index);           //Read
routes.get("/product/:id", ProductController.find)
routes.post("/product/:id", ProductController.update)      //Update
routes.delete("/product/:id", ProductController.delete)    //Delete


module.exports = routes;

