//:::::::::::::Connection to the Database::::::::::::::::::

// const pgp = require('pg-promise')();

// const config = {
//     host: 'localhost', // localhost the same as 127.0.0.1
//     port: 5432,
//     database: 'miniNetflixdb',
//     user: 'corcoding'
// };

// const db = pgp(config); //<-- Connects to the database

const {Client} = require('pg');
const client = new Client({
    host: "localhost",
    port: 5432,
    database: "miniNetflixdb",
    user: 'corcoding'
});

client.connect();

//SELECTING all the users in the users table
// client.query('select * from users', (err, res) => {
//     if (!err) {
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
//     client.end;
// });



//:::::::::::::CRUD Operations::::::::::::::::::

//INSERTING a user into a database:
const createUser = (req, res) => {
    const user = req.body;
    let insertQuery = `INSERT INTO users (first_name, last_name, email, password)
                        VALUES ('${user.first_name}', '${user.last_name}', '${user.email}', '${user.password}')`
    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful');
            
        } else {
            console.log(err.message);
            
        }
    })
    client.end;
}


//Authenticating a user
//1. take in the users input
//2. select from the database
//3. if what the user entered is there, take them to the homepge 
//4. if not, send them to the user doesn't exist page



module.exports = {createUser};

