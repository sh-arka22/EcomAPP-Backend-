const {authjwt} = require('../middlewares')
const cartController = require('../controllers/cart.controller');

module.exports = function(app){
    app.post('/ecomm/api/v1/carts',[authjwt.verifyToken],cartController.create);
    app.put('/ecomm/api/v1/carts/:id',[authjwt.verifyToken],cartController.update);
    app.get('/ecomm/api/v1/carts/:id',[authjwt.verifyToken],cartController.getCart);
}
