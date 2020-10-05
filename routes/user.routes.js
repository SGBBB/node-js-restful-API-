module.exports = app => {
    const signup = require("../controllers/controller.signup");
    const login= require("../controllers/controller.login");
    const tokenValidator = require("../middleware/token.validator");

  
    var router = require("express").Router();
  
    // Create a new Employee
    router.post("/signup", signup.createUser);
    router.post("/login",login.loginUser);
    router.get("/user", tokenValidator.validateToken, signup.listAllUsers);
    app.use('/api', router);
  };