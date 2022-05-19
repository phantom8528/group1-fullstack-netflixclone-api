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
//4. if not, send them to the user doesn't exist page

const readUser = (req, res) => {
    const user = req.body;
    console.log('USER:', user);
    let readQuery = `SELECT FROM users WHERE 
                        (email ilike '${user.email}' AND password ilike '${user.password}')`
    client.query(readQuery, (err, result) => {
        if (err) {
            res.send(`Something is wrong: ${err}`)   
        }

        if(result.rowCount > 0){
            console.log('RESULT:', result.rowCount)
            // res.send(result);
            res.send(`
            Login was Sucessful, Result: ${result}
            `);
            //this is where the user would get directed to there user page
        }else{
            res.send(`Message: Wrong email / password combination`)
        }
    })
}

module.exports = {
    createUser,
    readUser
};

