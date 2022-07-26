const db = require('../models');
const Cart = db.cart;
const Product = db.product;
/**
 * Handler for the creating the cart request
 */
exports.create = function(req, res, next){
    const cart = {
        userId: req.userId
    };

    //if the user has also provide the item ids while creating cart
    // const itemId = req.body.it

    Cart.create(cart).then(cart=>{
        res.status(201).send({data: cart})
    }).catch(err=>{
        res.status(500).send({
            message: "some internal errors"
        })
    })
}


/**
 * Handler fro updating the cart
 */
exports.update = function(req, res, next){
    const carId = req.params.id;

    Cart.findByPk(carId).then(cart=>{
        //Add the products passed in the request body to the cart
        var productIds = req.body.productIds; // getting all the products IDs that i want to add on the cart

        Product.findAll({
            where: {
                id:productIds
            }
        }).then(products =>{
            if(!products){
                return res.status(400).send({
                    message: "Products trying to add doeant exists"
                })
            }
            //Set these products inside the cart
            cart.setProducts(products).then(()=>{
                console.log("Products successfully cadded in cart");
                //Take care of cost part
                var cost =0;
                var productsSelected = [];
                cart.getProducts().then(cartProducts =>{
                    for(i=0;i<cartProducts.length;i++){
                        productsSelected.push({
                            id: cartProducts[i].id,
                            name: cartProducts[i].name,
                            cost: cartProducts[i].cost,
                        });
                        cost = cost + cartProducts[i].cost;
                    }

                    //i ama ready to retuirn the cart update response

                    res.status(200).send({
                        id: cart.id,
                        productsSelected: productsSelected,
                        cost : cost
                    })
                })
            })
        })
    }).catch(err=>{
        return res.status(500).send({
            message: 'error while updating the cart'
        })
    })
}


/**
 * Search for a cart using cart id
 */
exports.getCart = function(req, res){
    const cartId = req.params.cartId;

    Cart.findByPk(cartId).then(cart => {
        var cost =0;
        var productsSelected = [];
        cart.getProducts().then(cartProducts =>{
            for(i=0;i<cartProducts.length;i++){
                productsSelected.push({
                    id: cartProducts[i].id,
                    name: cartProducts[i].name,
                    cost: cartProducts[i].cost,
                });
                cost = cost + cartProducts[i].cost;
            }

            //i ama ready to retuirn the cart update response

            res.status(200).send({
                id: cart.id,
                productsSelected: productsSelected,
                cost : cost
            })
        })
    })
}