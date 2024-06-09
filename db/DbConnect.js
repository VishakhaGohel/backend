const { MongoClient } = require('mongodb');
const url = "mongodb+srv://vishakhagohel3108:vishu3182@cluster3182.hi3edlg.mongodb.net/?retryWrites=true&w=majority&appName=cluster3182";
const client = new MongoClient(url);

async function ConnectToMongoDB() {
    try {
        await client.connect();
        const database = client.db("RaahNGO"); 
        console.log("Connected to MongoDB");
        return database;
    } 
    catch (error) {
        console.log(error);
    }
}

module.exports = ConnectToMongoDB;