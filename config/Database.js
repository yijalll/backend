const { Sequelize } = require("sequelize");

const db = new Sequelize("skripsi", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
