const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const favicon = require('serve-favicon');
const handlebars = require('express-handlebars');
const controllers = require('./controller/index');
const helpers = require('./views/helpers/index');

//set app to server
app.set('port', process.env.PORT || 3000);

// set up location of the views folder and the views engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// tell express to use the view engine (express-handlebars) to render hbs files
// configure express-handlebars by giving the various directories that the engine will search for, and the default layout
app.engine(
    'hbs',
    handlebars({
        extname: 'hbs',
        layoutsDir: path.join(__dirname, 'views', 'layouts'),
        partialsDir: path.join(__dirname, 'views', 'partials'),
        defaultLayout: 'main',
        helpers,
    })
);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/:route', express.static(path.join(__dirname, '..', 'public')));
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;