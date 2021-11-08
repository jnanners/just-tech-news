const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
//handlebars setup
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//handlebars setup
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//make files in public folder available to client
app.use(express.static(path.join(__dirname, "public")));

//turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log("Now Listening"));
});