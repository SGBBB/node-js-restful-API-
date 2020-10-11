const sequelize = require("./sequalize");

module.exports = (sequelize, type) => {
    return sequelize.define('user_detail_tables', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: type.STRING
        },
        user_email: {
            type: type.STRING
        },
        user_mob: {
            type: type.STRING
        },
        user_password: {
            type: type.STRING
        },
        user_status: {
            type: type.STRING
        },
        user_dob: {
            type: type.DATE
        }
    });
}