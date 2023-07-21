const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
})

connection.connect((error) => {
  if(error) {
    console.error('Error connecting to MySQL database: ', error)
  }else{
    // console.log('Connected to MySQL database!')
  }
})

module.exports = connection