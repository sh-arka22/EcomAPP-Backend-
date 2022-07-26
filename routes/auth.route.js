const authController = require('../controllers/auth.controller');
const {verifySignUp} = require('../middlewares')

/**
 * Define for the user creation
*/

module.exports = function(app){
    app.post("/ecomm/api/v1/auth/signup",[verifySignUp.checkDuplicateUsernameOrEmail,verifySignUp.checkRolesExist], authController.signup);
    app.post("/ecomm/api/v1/auth/signin",authController.signin);
}