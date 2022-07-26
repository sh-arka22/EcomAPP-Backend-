const express = require('express');
const serverConfigs = require('./configs/server.configs');
const config = require('./configs/server.configs');
const db = require('./models');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// dotenv -> Zero dependency modules

const Category = db.category;
const Product = db.product;
const Role = db.role;
console.log(typeof(Category));

/** 
 * Setting the relationship between the tables in the database
*/
Category.hasMany(Product, {foreignKey: 'categoryID'}); // One to many relationship
// Product.belongsTo(Category, {foreignKey: 'categoryID'});

// db.sequelize.sync({ force: true })
db.sequelize.sync({force:true}).then( () => {
    // console.log("table dropped");
    init();
}).catch(err =>{
    console.log(err.message);
});


/** 
 * This function should be execuated at the beginning of the app startup process
*/
function init() {
    var categories = [
    {
        name: 'Electronics',
        description: 'This catagory will constain all the Electronics product'
    },
    {
        name: 'Kitchen Items',
        description: 'This catagory will constain all the Kitchen related items'
    }];

    Category.bulkCreate(categories).then( () => {
        console.log('categories are added successfully')
    }).catch(err =>{
        console.log(err)
    })

    /** 
     * Create roles 
    */
   Role.create({
    id: 1,
    name: 'customer'
   });

   Role.create({
    id: 2,
    name: 'admin'
   });
}

//Intitialise the routes
require('./routes/category.route')(app);
require('./routes/product.route')(app);
require('./routes/auth.route')(app);
require('./routes/cart.route')(app);

app.listen(process.env.PORT, ()=>{
    console.log('application started:', serverConfigs.PORT);
})