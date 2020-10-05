
const { User } = require('../models/sequalize')

createUser = async (req, res) => {

  const body = req.body;
  try {
    console.log('Request Body --- ', body);
    const user_dob_obj=new Date(body.user_dob);
    body['user_dob']=user_dob_obj;
    const createResp = await User.create(body);



    res.send({ 'message': 'User Created Successfuly!', 'data': createResp, 'status': 200 });
  } catch (error) {
    console.log('Error', error);
    res.send({ 'message': 'An Error occoured while creating User!', 'data': req.body, 'status': 201 });
  }

};

listAllUsers = async (req, res) => {

  console.log('USER DECRYPTED OBJECT ------ ', req.user);

  try {
   
    const findAllResp = await User.findAll({});



    res.send({ 'message': 'User List fetched Successfuly!', 'data': findAllResp, 'status': 200 });
  } catch (error) {
    console.log('Error', error);
    res.send({ 'message': 'An Error occoured while creating User!', 'data':error, 'status': 201 });
  }

};
module.exports = {
  createUser,
  listAllUsers

}
