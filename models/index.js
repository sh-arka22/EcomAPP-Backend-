const Sequelize = require('sequelize');
const config = require('../configs/db.configs');

/**
 * creating the db connection
 */

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host:config.HOST,
        dialect: config.dialect,
        pool:{
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.category = require('./category.model')(sequelize, Sequelize); // category schema
db.product = require('./product.models')(sequelize, Sequelize); // product schema
db.user = require('./user.model')(sequelize, Sequelize); // user schema
db.role = require('./role.model')(sequelize, Sequelize); // role schema
db.cart = require('./cart.model')(sequelize, Sequelize); // cart schema



/**
 * Many to many relationship established between roles and users
 */
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "role_id",
    otherKey:"user_id"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "user_id",
    otherKey: "roles_id"
})

/**
 * Mant to many relationship established between cart and items
 */
db.product.belongsToMany(db.cart, {
    through: "cart_product",
    foreignKey: "productId",
    otherKey: "cartId"
});
db.cart.belongsToMany(db.product, {
    through: "cart_product",
    foreignKey: "cartId",
    otherKey: "productId"
})

/**
 * one to many relationship established between users and cart
 */
db.user.hasMany(db.cart)



db.ROLES = ['customer', "admin"]
module.exports = db;