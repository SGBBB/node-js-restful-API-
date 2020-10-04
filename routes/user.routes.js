module.exports = app => {
    const signup = require("../controllers/controller.signup");
    const login= require("../controllers/controller.login");

  
    var router = require("express").Router();
  
    // Create a new Employee
    router.post("/signup", signup.createUser);
    router.post("/login",login.loginUser)
    app.use('/api', router);
  };