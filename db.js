const Pool = require("pg").Pool; //allow us to configure to connect with the database

//where and how
const pool = new Pool({
    user: "postgres",
    password: "alics",
    host: "localhost",
    port: 5432,
    database: "cqlibrary"
  });
  
  module.exports = pool;