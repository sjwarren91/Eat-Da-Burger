var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) {
        console.log("error connecting: " + err.stack);
        return
    } else {
        console.log("connected as id " + connection.threadId);
    }
});

module.exports = connection;
