/** 
 * This file will bw used for authentication purposes
*/

const bcrypt = require('bcryptjs');
const db = require('../models');
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op; //operator for Sequelize

const jwt = require('jsonwebtoken');

const secretKey = require('../configs/secret.config');// used for encrypting the secret key
/** 
 * Handler for sigup
*/
exports.signup = function(req, res, next) {
    
    const userObj = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8),
        email: req.body.email
    } 

    User.create(userObj).then(user=>{
        console.log("user created");

        if(req.body.roles){
            //I need to first have a role created in the system

            //chech desired roles match with the supported roles
            Role.findAll({
                where:{
                    name: {
                        [Op.or] : req.body.roles //this compares the admin/customer roles
                    }
                }
            }).then(roles=>{
                user.setRoles(roles).then(()=>{
                    console.log("registration completed");
                    res.status(201).send({
                        message: "User successfully registered"
                    })
                })
            })
        }
        else{
            /** 
            //one option is that I fetch the Role object by running the query
            Role.findOne({
                where: {
                    name: 'customer'
                }
            }).then(roles=>{
                User.setRoles(roles).then(()=>{
                    console.log("registration created");
                    res.status(201).send({
                        message: "User successfully created"
                    })
                })
            })
            res.status(201).send({
                message: "User roles didnt provide"
            })
            */

            user.setRoles([1]).then(()=>{
                console.log("registration completed");
                res.status(201).send({
                    message: "User succesfully registered"
                })
            })
        }
    }).catch(err=>{
        console.log("eror will craeting user", err.message);
        res.status(500).send({
            message: "Some internal errors"
        })
    })
}


/** 
 * Handler for signin
*/

exports.signin = function(req, res, next){
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user=>{
        if(!user) return res.status(404).send({ message: "User not found"})
        else{
            var passwordValid = bcrypt.compareSync(req.body.password, user.password);
            if(!passwordValid) return res.status(404).send({ message:"invalid password"});

            /**
             * Password is valid so i need to create the acces tocken
             */
            var token = jwt.sign({id: user.id}, secretKey.secret, {
                expiresIn: 300 // 300 seconds
            });

            /**
             * I want to provide the roles assigned to user in the response
             */

            var authorities = [];
            user.getRoles().then(role => {
                console.log(role.length);
                for(var i=0;i<role.length; i++){
                    authorities.push("ROLE_" + role[i].name.toUpperCase());
                }

                res.status(200).send({
                    id: user.id,
                    username: user.username,
                    roles: authorities,
                    accesToken: token
                });
            });
        }
    }).catch(err => {res.status(500).send({message: "some internal errors"})});
}