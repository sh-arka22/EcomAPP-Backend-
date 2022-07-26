const requestValidator = require('./reqestValidator'); // getting as an object
const verifySignUp = require('./verifySignUp'); // getting as an object
const authjwt = require('./authjwt');

/**
 * This is returning an object
 */
module.exports = {requestValidator, verifySignUp, authjwt};