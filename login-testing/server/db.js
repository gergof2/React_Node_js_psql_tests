const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "garfild222",
    host: "localhost",
    port: 5432,
    database: "test_login"
});

module.exports = pool;
