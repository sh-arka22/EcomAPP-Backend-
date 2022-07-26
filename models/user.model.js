/** 
 * This file will contain the schema details of the users
*/

module.exports = function(sequelize, Sequelize){
    const User = sequelize.define('user',{
        username:{
           type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING
        }
    })
    return User
}