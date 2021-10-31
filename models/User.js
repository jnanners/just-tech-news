const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

//create User model
class User extends Model {}

//define table columns and configuration
User.init(
    {
        //define and id column
        id: {
            //use special Sequelize DataTypes object to provide what type of data it is
            type: DataTypes.INTEGER,
            //this is the same as sql NOT NULL option
            allowNull: false,
            //instruct that this is the primary key
            primaryKey: true,
            //turn on auto increment
            autoIncrement: true
        },
        //define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //define an email colimn
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //there cannot be any duplicate email values in this table
            unique: true,
            //if allowNull is set to false we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        //define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //this means password must be at least 4 characters long
                len: [4]
            }
        }
    },
    {
        //table configuration options here
        //pass in our imported sequelize connection (the direct connectionto our database)
        sequelize,
        //don't automatically create createdAt/updatedAt timestampt fields
        timestamps: false,
        //don't pluralize name of database table
        freezeTableName: true,
        //use underscores instead of camel-casing
        underscored: true,
        //make it so our model name stays lowercase in the database
        modelName: "user"
    }
);

module.exports = User;