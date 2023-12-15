const jwt = require('jsonwebtoken');

const generateToken = (id) =>{
       return jwt.sign({id},process.env.JWT_SERCRET,{expiresIn:'1d'});
};

module.exports={generateToken};