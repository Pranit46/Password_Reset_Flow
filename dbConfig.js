const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
dbName = "Passwror_Reset_Flow"
const dbUrl = `mongodb+srv://admin:l96gYJFQpGVs9ATC@pranit7.yhko9.mongodb.net/${dbName}`;
module.exports = { dbUrl, mongodb, MongoClient };