const { User } = require('../models/sequalize')
const jwt = require("jsonwebtoken");


function generateAccessToken(userObject) {
    
    // expires after half and hour (1800 seconds = 30 minutes)

    return jwt.sign(userObject, '$@g@r', { expiresIn: '1d' });
  }

loginUser = async (req, res) => {

      const body = req.body;
      const email=body.user_email;
      const password=body.user_password;

    try {
        console.log('Request Body --- ', body);
        const findResponse = await User.findOne({ where: { user_email: email, user_password: password} });

        if (findResponse == null ) {
     
          
             res.send({ 'message': 'Invalid username/password.', 'data': null, 'status': 201 });

        }
        else {
            const userObject = {id: findResponse.id, email: findResponse.user_email, mobile: findResponse.user_mob};
            const token = generateAccessToken(userObject);
            // res.json(token);
            res.send({ 'message': 'User LoggedIn Successfuly!', 'data': {'token': token}, 'status': 200 });
        }
        
    } catch (error) {
        console.log('Error', error);
        res.send({ 'message': 'An Error occoured while fetching User!', 'data': findResponse, 'status': 201 });
    }

};
module.exports = {
    loginUser,

}