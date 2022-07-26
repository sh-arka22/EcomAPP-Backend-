/** 
 * Schema of Category resource
*/

module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('category',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        description:{
            type: Sequelize.STRING
        }
    },
    {
            tableName: 'categories' // the table name i want to give
        
    })
    return Category;
}