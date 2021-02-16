// const { request } = require("express");
const products = require("../models/product.models");


module.exports.createProduct = (req, res) => {
    const {title, price, description}= req.body;
    products.create({title,price,description})
        .then(newProduct => res.json({ newProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findAllProducts = (req, res) => {
    products.find()
        .then(allProd => res.json( allProd ))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getProduct = (request, response) => {
    products.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
};
module.exports.updateProduct = (request, response) => {
    console.log("lolololololol");
    products.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
};
module.exports.deletePerson = (request, response) => {
    products.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}