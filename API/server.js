const res = require('express/lib/response');
const http = require('http');
const express = require('express');
const cors = require('cors');

const pgp = require('./server-to-db');

const hostname = `127.0.0.1`;
const port = 3000;

const app = express();
const server = http.createServer(app);

//middleware
app.use(cors());
app.use(express.json());

//homepage route (sign-in page)
app.get('/', (req, res) => {
    res.send('Sign-In Page');

});

//wrting new user data into the database


//reading new data into the database

//sign-up page route
app.post('/signup', (req, res) => {
    // res.send('Sign-Up Page');
    try{
        const {first_name, last_name, email, password} = req.body;
        const newUser = pgp.query(`
        INSERT INTO users (first_name, last_name, email, password) 
            VALUES ($1, $2, $3, $4)` [first_name, last_name, email, password]);
        res.json(newUser);
    }catch (err){
        console.log(err.message);
    }
});



//user homepage (after successful login)
app.get('/homepage', (req, res) => {
    res.send('This is the Homepage');
});

//content page (of a given show clicked on by the user)
app.get('/content', (req, res) => {
    res.send('This is the Homepage');
});

//favorites page (elective, save for after project has been completed)


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})