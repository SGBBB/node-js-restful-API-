const { User } = require('../models/sequalize')

createUser = async (req, res) => {

  const body = req.body;
  try {
    console.log('Request Body --- ', body);
    const createResp = await User.create(body);


    res.send({ 'message': 'User Created Successfuly!', 'data': createResp, 'status': 200 });
  } catch (error) {
    console.log('Error', error);
    res.send({ 'message': 'An Error occoured while creating User!', 'data': req.body, 'status': 201 });
  }

};
module.exports = {
  createUser,

}
