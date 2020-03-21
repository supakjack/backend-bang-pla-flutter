var mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
  host: process.env.SERVER_NAME,
  user: process.env.DATABASE_CPT_USERNAME,
  password: process.env.DATABASE_CPT_PASSWORD,
  database: process.env.DATABASE_CPT_NAME
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected database');
});

module.exports = connection;
