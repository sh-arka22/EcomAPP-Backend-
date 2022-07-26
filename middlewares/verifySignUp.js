/**
 * Validation for the duplicate email or username
 */
const db = require('../models');
const User = db.user;
const Role = db.role;
const ROLES = db.ROLES;

const checkDuplicateUsernameOrEmail = function(req, res, next) {
    
    User.findOne({ 
        where: {
            username: req.body.username
        }
    }).then(user=>{
        if(user){
            return res.status(400).send({ message: "Failed !, Username already in exists"});
        }

        // Check for duplicate email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user=>{
            if(user){
                return res.status(400).send({ message: "Failed !, email already in exists"});
            }
            next();
        });
    });
}

/**
 * Validate for correct roles
 */
checkRolesExist = function(req, res, next) {
    if(req.body.roles){
        //I need to itterate through the rows provided by the cusrtomers and see if it is valid

        for(let i=0;i<req.body.roles.length;i++){
            if(!ROLES.includes(req.body.roles[i])) // if the roles in the req.body != the roles in the DB
                return res.status(400).send({ message: "Failed! Please check the role provided"});
        }
    }
    next();
}


const verifySignUp = {
    checkDuplicateUsernameOrEmail : checkDuplicateUsernameOrEmail,
    checkRolesExist : checkRolesExist
}
module.exports = verifySignUp;