const jwt = require("jsonwebtoken");


validateToken = async (req, res, next) => { 
        // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization']
  console.log('authHeader -------- ',authHeader);
  
  if (authHeader == null) return res.status(401).send({ 'message': 'Auth Token does not present in the request ', 'data': null, 'status': 401 })

   const response = await  jwt.verify(authHeader, '$@g@r', (err, user) => {
    console.log(err)
    if (err) {
        return res.status(403).send({ 'message': 'UnAuthorized Token', 'data': null, 'status': 403 })
    } else {
        console.log('DECRYPTED user info =====',user);
        req.user = user;
       
        next() 
    }
  })
};

module.exports = {
    validateToken
  }