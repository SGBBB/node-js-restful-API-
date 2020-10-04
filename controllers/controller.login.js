const { User } = require('../models/sequalize')

loginUser = async (req, res) => {

    const body = req.body;
      const email=body.user_email;
      const password=body.user_password;

    try {
        console.log('Request Body --- ', body);
        const findResponse = await User.findOne({ where: { user_email: email } });
        console.log('findResponse.user_password is ---->',findResponse.user_password)

        if (findResponse == null ) {
            res.send({ 'message': 'user not found', 'data': findResponse, 'status': 201 });

        }
        else {
            res.send({ 'message': 'User record fectched Successfuly!', 'data': findResponse, 'status': 200 });
        }
        res.send({ 'message': 'User fetched Successfuly!', 'data': findResponse, 'status': 200 });
    } catch (error) {
        console.log('Error', error);
        res.send({ 'message': 'An Error occoured while fetching User!', 'data': findResponse, 'status': 201 });
    }

};
module.exports = {
    loginUser,

}