/** 
 * This file is the controller aka the waiter controller
 * 
 * 
*/
const db = require('../models/index');
const Category = db.category;

exports.create = function(req, res, next){
    const category = {
        name: req.body.name,
        description: req.body.description
    }

    Category.create(category).then(category=>{
        console.log(`category name: ${category.name} got inserted successfully`);
        res.status(202).send(category);
    }).catch(err=>{console.log(err)});
}


exports.findAll = function(req, res, next){

    
    // query parameters
    const categoryName = req.query.name;
    let promise;
    if(categoryName){
        promise = Category.findAll({
            where : {
                name : categoryName
            }
        });
    }
    else{
        promise = Category.findAll();
    }


    promise.then(categories=>{
        res.status(200).send(categories);
    }).catch(err=>{res.status(500).send({
        message: err.message
    }), console.log(err)});
}


exports.findOne = function(req, res, next){
    const categoryID = req.params.id;
    Category.findByPk(categoryID).then(category=>{
        res.status(200).send(category);
    }).catch(err=>{res.status(500).send({
        message: "some error"
    })})
}

exports.update = function(req, res, next){
    const category = {
        name : req.body.name,
        description : req.body.description
    }
    /**
     * i need to know which category has to be updated
     */
    const categoryID = req.params.id;
    Category.update(category,{
        where: {id : categoryID},
        returning: true // this is set to true that we will be returning something
    }).then(updatedCategory=>{
        Category.findByPk(categoryID).then(category=>{
            res.status(200).send(category);
        }).catch(err=>{res.status(500).send({
            message: "some error"
        })})
    }).catch(err=>{res.status(500).send({
        message: "some error happened"
    })})
}


exports.delete = (req, res) => {
    const categoryID = req.params.id;
    Category.destroy({
        where: {id : categoryID},
    }).then(result=>{
        res.status(200).send({
            message: "Successfully Deleted"
        })
    }).catch(err=>{res.status(500).send({
        message: "some internal error happened"
    })})
}