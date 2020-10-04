// Import express
let express = require('express')
// Initialize the app
let app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Setup server port
var port = process.env.PORT || 8888;
// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to NodeJS, Express Application is here'));

//Routing the ap to corresponding URL's:--->
require("./routes/user.routes")(app);

// app.post('/dogs', function (req, res) {
//   var dog = req.body;
//   console.log(dog);

//   res.send({ "status": "Dog added!", "data": dog });
// });

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running NodeJS, Express application on port " + port);
});