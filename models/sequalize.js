// DAO layer to connect MySQL


const Sequelize = require('sequelize');
const UserModel = require('./user_details');
var common=require('../config/common')
var config=common.config();


const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

//if table exits it will drop it thereby create a new one with no previous records 
//hence consoderd not a wise option for industry level work
// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })



//checking whether connection is established or not???You may uncomment it in future 

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


const User = UserModel(sequelize, Sequelize);

module.exports = {
User
}