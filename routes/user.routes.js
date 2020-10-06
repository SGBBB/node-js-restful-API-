module.exports = app => {
    const signup = require("../controllers/controller.signup");
    const login= require("../controllers/controller.login");
    //Importing token.validator from middleware directory:--->
    const tokenValidator = require("../middleware/token.validator");

  //Assigning Router object to var router:----->
    var router = require("express").Router();
  
    // Create a new User
    router.post("/signup", signup.signUp);
    router.post("/login",login.loginUser);
    //Arguments in below method are (route,middleware for token validation,routing address of method):--->
    router.get("/user", tokenValidator.validateToken, signup.listAllUsers);
    // fetching a User based on userId
    router.get("/user/:id", tokenValidator.validateToken, signup.findOneUser);
    router.put("/user", tokenValidator.validateToken, signup.updateUser);
    router.delete("/user/:id", tokenValidator.validateToken, signup.deleteUser);

    app.use('/api', router);
  };