const pgp = require('pg-promise')();

const config = {
    hostname: 'localhost',
    port: 5432,
    database: 'miniNetflixdb',
    user: 'corcoding'
};

module.exports = pgp;

