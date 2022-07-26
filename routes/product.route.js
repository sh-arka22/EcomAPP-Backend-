const controller = require('../controllers/product.controller');
const {requestValidator, authjwt} = require('../middlewares');

module.exports = function(app){
   app.post('/ecomm/api/v1/products',[authjwt.verifyToken,authjwt.isAdmin,requestValidator.validateProductRequest], controller.create);

   app.get('/ecomm/api/v1/products', controller.findAll);

   app.get('/ecomm/api/v1/products/:id', controller.findOne);

   app.put('/ecomm/api/v1/products/:id',[authjwt.verifyToken,authjwt.isAdmin], controller.update);

   app.delete('/ecomm/api/v1/products/:id',[authjwt.verifyToken,authjwt.isAdmin], controller.delete);

//    app.get('/ecomm/api/v1/product', controller.)
}