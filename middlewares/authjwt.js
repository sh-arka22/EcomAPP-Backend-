const jwt = require('jsonwebtoken'); // getting as an object
const secretKey = require('../configs/secret.config'); //used for decrypting the jwt tokens
const db = require('../models');
const User = db.user;


verifyToken = function(req, res, next) {
    const token = req.headers['x-access-token'];

    if(!token) {
        return res.status(400).send({
            message: 'No token provided'
        })
    }

    jwt.verify(token, secretKey.secret, (err, decodedToken) => {
        // console.log(decodedToken.id, "--------------------------------");
        if(err) {
            return res.status(401).send({ message: "Unauthorizede"});
        }
        req.userId = decodedToken.id;
        next();
    })
}

isAdmin = function(req, res, next) {
    //Fetching user
    // console.log(req.userId);
    User.findOne({ 
        where: { id: req.userId}
    }).then(user => {
        
        user.getRoles().then(roles => {
            
            for(let i=0; i<roles.length; i++) {
                if(roles[i].name == 'admin'){
                    console.log(roles[0].name, "********************************########");
                    next();
                    return;
                }
            }
            return res.status(403).send({ message: "Requires ADMIN role"});
        })
        
    })
}

const authjwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
}
module.exports = authjwt;