/** 
 * this is the controller of the product resource
*/
const db = require('../models/index');
const Product = db.product;

/**
 * Handler for the createing of the product
 */
exports.create = function(req, res, next){
    const prod = {
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        categoryID: req.body.categoryID
    }
    Product.create(prod).then(product=>{
        console.log(`product name: ${product.name} got inserted successfully`);
        res.status(202).send(product);
    }).catch(err=>{console.log(err)});
}

/** 
 * handler for all products
*/
exports.findAll = function(req, res, next){

    const productName = req.query.name;
    let promise;

    if(productName){
        console.log(productName);
        promise = Product.findAll({
            where: {
                name: productName
            }
        })
    }
    else{
        console.log("here")
        promise = Product.findAll()
    }

    promise.then(product=>{
        res.status(200).send(product);
    }).catch(err=>{
        console.log(`some internal internal errors`)
    })
}

exports.findOne = function(req, res, next){
    const productID = req.params.id;
    Product.findByPk(productID).then(product=>{
        res.status(200).send(product);
    }).catch(err=>{
        res.status(500).send({
            message: "some internal errors"
        })
    })
}

exports.update = (req, res, next)=>{
    const productID = req.params.id;
    const product = {
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost
    }
    Product.update(product,{
        where: {id : productID},
        returning: true
    }).then(product=>{
        res.status(200).send(product);
    }).catch(err=>{res.status(500).send({message: "some internal errors"})})
}

exports.delete = (req, res, next) =>{
    const productID = req.params.id;
    Product.destroy({
        where:{id: productID}
    }).then(result=>{
        message: "successfully Deleted"
    }).catch(err=>{
        res.status(500).send({
            message: "some internal errors happened"
        })
    })
}