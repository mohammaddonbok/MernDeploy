const productController = require("../controllers/product.controllers");

module.exports = app =>{
    app.post("/api/newProduct",productController.createProduct);
    app.get("/api/findAll",productController.findAllProducts);
    app.get('/api/product/:id', productController.getProduct);
    app.put('/api/product/:id/edit', productController.updateProduct);
    app.delete('/api/product/:id', productController.deletePerson);
};
