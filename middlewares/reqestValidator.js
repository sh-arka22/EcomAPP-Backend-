/** 
 * Validator for request body
*/
const db = require('../models');
const category = db.category;
const validateCategoryRequest = (req, res, next) => {
    //check if category name 
    if(!req.body.name){
        return res.status(400).send({
            message: 'name of the category is required'
        })
    }

    if(!req.body.description){
        return res.status(400).send({
            message: 'description of the category is required'
        })
    }

    //Go to the controller
    next();
}

const validateProductRequest = (req, res, next) => {
    if(!req.body.name){
        return res.status(400).send({
            message: 'name of the product is required'
        })
    }

    if(!req.body.description){
        return res.status(400).send({
            message: 'description of the product is required'
        })
    }

    if(req.body.cost <= 0){
        return res.status(400).send({
            message: 'cost of the product cannot be less than zero'
        })
    }

    /**
     * validation for the categoryID
     */
    if(req.body.categoryID){
        category.findByPk(req.body.categoryID).then(category => {
            if(!category){
                console.log("i am inside if");
                return res.status(400).send({
                    message: 'category not found with the ID '
                })
            }
            else{
                console.log("i am inside else");
                next();
            }
        })
    }
    else{
        res.status(400).send({
            message: "Category ID is not provided"
        })
        next();
    }
}

module.exports = {validateCategoryRequest : validateCategoryRequest,
                  validateProductRequest : validateProductRequest};