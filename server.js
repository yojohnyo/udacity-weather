// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/

const bodyParser = require('body-parser')

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 5000;
const server = app.listen(port, listening);
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

let postData=[];

app.post('/formData', getZip);

// // GET route
app.get('/all', sendData);

function sendData (request, response) {
    console.log(postData);
    response.send(postData);
};



function getZip(req, res) {
    newEntry = {
        zip: req.body.zip,
        date: req.body.date,
        temp: req.body.temp,
        note: req.body.note
    }
    postData.push()
    postData.push(req.body);
    // console.log(postData);
}