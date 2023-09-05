const Sequilize = require("sequelize");

const dbConfig = require("../config/dbConfig");

const Address = require("../models/Address");
const connection = new Sequilize(dbConfig);

Address.init(connection);



module.exports = connection;