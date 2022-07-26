/** 
 * This will hold schema for Cart
*/

module.exports = (sequelize, Sequelize)=>{
    const Cart = sequelize.define('cart',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cost: {
            type: Sequelize.INTEGER //npt mandetory
        }
    });
    return Cart;
}