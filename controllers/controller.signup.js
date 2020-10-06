
const { User } = require('../models/sequalize')

signUp = async (req, res) => {

  const body = req.body;
  try {
    //Checking whether email is already in use or not--->
    const userEmailResponse = await User.findOne({ where: { user_email: body.user_email } });
    //if userEmailResponse returns null i.e. user_email is not present .Hence user can be signned Up:--->
    if (userEmailResponse == null) {

      const user_dob_obj = new Date(body.user_dob);
      body['user_dob'] = user_dob_obj;
      const createResp = await User.create(body);
      res.send({ 'message': 'User Created Successfuly!', 'data': createResp, 'status': 200 });
    }
    else {
      res.send({ 'message': 'User already Exists!', 'data': null, 'status': 201 });
    }

  } catch (error) {
    console.log('Error --->', error);
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
    res.send({ 'message': 'An Error occoured while creating User!', 'data': error, 'status': 201 });
  }

};
findOneUser = async (req, res) => {

  const userId = req.params.id;
  // const userId = req.query.userId;
  console.log('userId', userId)
  try {
    const findResp = await User.findOne({ where: { id: userId } });
    if (findResp == null) {
      res.send({ 'message': 'user not found', 'data': findResp, 'status': 201 });

    }
    else {
      res.send({ 'message': 'User record fectched Successfuly!', 'data': findResp, 'status': 200 });
    }


  } catch (error) {
    console.log('Error', error);
    res.send({ 'message': 'An Error occoured while fetching User!', 'data': error, 'status': 201 });
  }
};

updateUser = async (req, res) => {

  const body = req.body;
  const id = body.id;
  console.log('id is -->', id)

  try {
    
    const result = await User.update(
      body,   //what going to be updated
      { where: { id: id } }
    )
    res.send({ 'message': 'User Updated Successfuly!', 'data': body, 'status': 200 })
  } catch {
    (err) => console.log(err);
    res.send({ 'message': 'An Error occoured while updating User!', 'data': err, 'status': 201 });
  }

};

deleteUser = async (req, res) => {
  console.log('userID at dleeteUSer is', req.params);
  const userId = req.params.id;
  console.log('inside deleteUser')

  try {

    const deleteResp = await User.destroy({ where: { id: userId } });
    console.log('deleteResp is-->', deleteResp);
    if (deleteResp == 0) {
      res.send({ 'message': 'user not found', 'data': deleteResp, 'status': 201 });

    }

    res.send({ 'message': 'Employee Deleted Successfuly!', 'data': null, 'status': 200 });
  } catch (error) {
    console.log('Error', error);
    res.send({ 'message': 'An Error occoured while Delete Employee!', 'data': error, 'status': 201 });
  }

};

module.exports = {
  signUp,
  listAllUsers,
  findOneUser,
  updateUser,
  deleteUser

}
