const res = require('express/lib/response');
const http = require('http');
const express = require('express');

const hostname = `127.0.0.1`;
const port = 3000;

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Sign-Up Page');
});

// app.get('/signin', (req, res) => {
//     res.send('Sign-In Page');
// });

app.get('/signup', (req, res) => {
    res.send('Sign-Up Page');
});

app.get('/homepage', (req, res) => {
    res.send('This is the Homepage');
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})