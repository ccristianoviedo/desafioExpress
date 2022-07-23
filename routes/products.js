const express = require ('express');
const Product = require('../controller/product.controller');
const productsRouter = express.Router()
const pageProducts= require("../pageProducts")

productsRouter.get("/", (req, res)=>{
    const products = Product.getAll()
    res.send(products)
})

productsRouter.get("/:id", (req, res)=>{
   const {id} = req.params
    res.send(pageProducts.findOne(parseInt(id)))
})

productsRouter.post("/", (req, res)=>{
    const {name, price, img} = req.body
    const product = Product.create(name, price, img)
    res.send(product)
})

productsRouter.put("/:id", (req, res)=>{
    const id = req.params.id
    let{price} = req.body.price

    const product = Product.update(id, price)

     res.send(product)
})

module.exports = productsRouter;