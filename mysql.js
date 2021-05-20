const mysql = require('mysql2');

var pool = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "",
	database: "escola"
});

exports.pool = pool;