// Import express
let express = require('express')
const nodemailer = require('nodemailer');

var mail = nodemailer.createTransport({
     service: 'gmail',
     auth: {
          user: 'sagarbora.2k01@gmail.com',
          pass: 'Canada321' 
     }
});

var mailOptions = {
     from: 'sagarbora.2k01@gmail.com', // Sender address
     to: 'sagarbora1857@gmail.com',      // List of recipients
     subject: 'Sending Email using Node.js',
     text: 'Have the most fun you can in a car. Get your Tesla today!', // Plain text body
     html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>',

     attachments: [
          { // Use a URL as an attachment
               filename: 'your-testla.png',
               path: 'https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048'
          }
     ]
}


mail.sendMail(mailOptions, function (error, info) {
     if (error) {
          console.log(error);
     } else {
          console.log('Email sent: ' + info.response);
     }
});

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
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running NodeJS, Express application on port " + port);
});