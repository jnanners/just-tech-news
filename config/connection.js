//import Sequelize constructor from the library
const Sequelize = require("sequelize");

//executes when we use connection.js to make data in .env file available at process.env.
require("dotenv").config();


//create connection to our database, pass in your MySQL information for username and password 
//when the app is deployed it will have access to herokus variable, otherwise it will continue using localhost congifuration
let sequelize;

if(process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else{
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: "localhost",
        dialect: "mysql",
        port: 3306
    });
}

module.exports = sequelize