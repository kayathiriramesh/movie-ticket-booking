const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const dburl = process.env.MONGO_URL;

module.exports={mongodb,MongoClient,dburl}