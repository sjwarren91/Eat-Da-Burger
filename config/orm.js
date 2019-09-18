var connection = require("./connection");

var orm = {
    selectAll : (table, cb) => {
        connection.query("SELECT * FROM ??;", [table], (err, data) => {
            if (err) throw err;

            cb(data);
        });
    },
    insertOne: (table, )
}


function objToSql(obj) {
    var arr = [];

    for (let key in obj) {
        var val = obj[key];
        if(Object.hasOwnProperty.call(obj, key)) {
            if (typeof val === "string" && val.indexOf(" ") >= 0) {
                val = "'" + val + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();

}