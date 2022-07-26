/** 
 * thsi will be responsible for routing the requests to the correct controller method
*/
const controller = require('../controllers/category.controller');
const {requestValidator, authjwt} = require('../middlewares');
/**
 * 
 * const requestValidator = require('../middlewares');
 * than represents the whole object
 * 
 *  const {requestValidator} = require('../middlewares');
 * than it gets the conttent of the object
 */

module.exports = function(app){

    //Route for craeting
    app.post('/ecomm/api/v1/categories',[authjwt.verifyToken,authjwt.isAdmin,requestValidator.validateCategoryRequest], controller.create);

    //Route for getting all the uris
    app.get('/ecomm/api/v1/categories', controller.findAll);


    //Route for getting the category with the ID
    app.get('/ecomm/api/v1/categories/:id', controller.findOne);


    //Route for updating the category
    app.put('/ecomm/api/v1/categories/:id',[authjwt.verifyToken,authjwt.isAdmin,requestValidator.validateCategoryRequest], controller.update);

    //Route for deleting the category
    app.delete('/ecomm/api/v1/categories/:id',[authjwt.verifyToken,authjwt.isAdmin], controller.delete);
}