const jwt = require("jsonwebtoken");


validateToken = async (req, res, next) => { 
        // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization']
 
 //checking whether token is null or not:---> 
  if (authHeader == null) return res.status(401).send({ 'message': 'Auth Token does not present in the request ', 'data': null, 'status': 401 })
 
//decrypting token :--->
   const response = await  jwt.verify(authHeader, '$@g@r', (err, user) => {
   

    if(err==null){
      console.log('DECRYPTED user info =====',user);
      //adding decrypted user to req.user object 
      req.user = user;
     //next() executes next argument :-->
      next() 
    }
    else if (err.name=='JsonWebTokenError') {
        return res.status(403).send({ 'message': 'UnAuthorized Token', 'data': null, 'status': 403 })
    }
    else {
      return res.status(406).send({ 'message': 'Expired Token', 'data': null, 'status': 403 })
    }

  })
};

module.exports = {
    validateToken
  }