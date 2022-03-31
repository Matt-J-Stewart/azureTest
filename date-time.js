const { response } = require("express");
const chalk = require('chalk');


var obj1 = undefined;
const MongoClient = require("mongodb").MongoClient;
const CONNECTION_URL = 'mongodb+srv://matthewjstewart:Sn3akySnak3@quizcluster.5oc2z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const DATABASE_NAME = 'Quiz-Capstone'

function getData(testP, callback) {
    MongoClient.connect(CONNECTION_URL, async function(error,client) {
        var database = client.db(DATABASE_NAME);
        var collection = database.collection("Quiz");
        var cursor = collection.find({quizName: testP}).limit(1);
        var allVals = await cursor.toArray();
        var testVar = allVals[0];
        client.close();
        console.log(chalk.red(testP))
        callback(testVar);
    });
};

   
  

module.exports = {
    getData: getData
};

