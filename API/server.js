const res = require('express/lib/response');
const http = require('http');
const express = require('express');

// const cors = require('cors');
const bodyParser = require('body-parser'); //<-replaced cors

const client = require('./server-to-db');
const { response } = require('express');

const hostname = `127.0.0.1`;
const port = 5000;

const app = express();
const server = http.createServer(app);

//middleware
// app.use(cors());
// app.use(express.json());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(function(req, res, next) { //<-- This will help with bypassing cors
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// app.get('/', (req, res) => {
//     res.send('Sign-In Page');
// });



//homepage route (sign-in page)
app.post('/', client.readUser);
//sign-up page route
app.post('/signup', client.createUser);

app.get('/homepage', (req, res) => {
    res.send('This is the Homepage');
});


//content page (of a given show clicked on by the user)
app.get('/content', (req, res) => {
    res.send('This is the Content');
});

//favorites page (elective, save for after project has been completed)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})



