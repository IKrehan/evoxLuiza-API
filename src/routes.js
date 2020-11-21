const express = require("express");
const ProductController = require("./controllers/ProductController")

const { body } = require('express-validator')

const routes = express.Router();


routes.post("/product", [
    body('name').isLength({ max: 255 }).trim(), 
    body('url_image').isLength({ max: 255 }).trim(),
    body('price').isFloat()
    ], ProductController.create);
  
routes.get("/product", ProductController.index);

routes.get("/product/:id", ProductController.find);

routes.delete("/product/:id", ProductController.delete);

routes.post("/product/:id", [
    body('name').isLength({ max: 255 }).trim(), 
    body('url_image').isLength({ max: 255 }).trim(),
    body('price').isFloat()
    ],  ProductController.update);



module.exports = routes;

