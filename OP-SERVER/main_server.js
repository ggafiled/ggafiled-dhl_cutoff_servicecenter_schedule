/***
 * Github : https://github.com/ggafiled
 * ########## IMPORTANCE FILE ##########
 * - main_server.js
 * - db.js
 * - backend.js
 * ########## IMPORTANCE FILE ##########
 *
 * import library that using in our server such as
 * - express : using for simulator server like apache in php
 * - bodyParser : convert request body from client to json format becuase server must have a middleware for convert data
 * - cors : this maganent sucurity request 
 * - compression : compress file. reduce size of file
 * - path : system IO
 * - busboy : manage file upload form client to save in server path
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require("compression");
const path = require('path');
var busboy = require('connect-busboy');

// api : it load sub router form ./api/backend.js file
const api = require("./api/backend");

// port : varible for contain number of port number that we tell to server listerning.
const port = process.env.PORT || 3000;

// app : varible instance of express (create server).
const app = express();

// server configulations for use above library in our server.
app.use(busboy());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors());

// this mean allow all device whether it be local device (dhl) or external device (not dhl).
app.options('*', cors());

// this mean /api/v1 to tell server use this url path to base path when we want to access sub path in api file.
app.use('/api/v1', api);
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    const removeOnRoutes = '/not-wanted-route-part';
    req.originalUrl = req.originalUrl.replace(removeOnRoutes,'');
    req.path = req.path.replace(removeOnRoutes,'');
    next();
});

// handle when server error give it print error and response to client.
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

app.get('/', function (req, res, next) {
    res.redirect('/operations');
});

/*** 
 * when use typing and enter url to /operations server will be return index.html file in public folder 
 * (folder contain frontend file that deverlop from Angular8 already build for production)
*/
app.use('/operations', express.static(path.join(__dirname, '/public'), {
    maxAge: '1y'
}));

/**
 * command for tell server start.
 */
app.listen(port, (err) => {
    if (err) {
        console.log('-----ERROR-----', err);
    } else {
        console.log('server is running on :', port);
    }
});