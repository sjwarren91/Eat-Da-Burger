var orm = require("../config/orm");

var burger = {
    all: (cb) => {
        orm.selectAll("cats", (res) => {
            cb(res);
        });
    },

    create: (col, val, cb) => {
        orm.insertOne("cats", col, val, (res) => {
            cb(res);
        });
    },

    update: (colVal, condition, cb) => {
        orm.updateOne("cats", colVal, condition, (res) => {
            cb(res);
        });
    }
}

module.exports = burger;