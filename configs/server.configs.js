if(process.env.NODE_ENV !== 'production'){ //STANDARD WAY OF WRITING
    //IF THSI IS NOT A PRODUCTION MACHINE THAN READ THE ENV FILE FROM THE .ENV FILE)
    require('dotenv').config();
}

module.exports = {
    PORT : process.env.PORT
}