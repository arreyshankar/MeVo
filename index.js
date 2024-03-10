const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://sarvesh:mevo123@testingcluster.tg9uqrx.mongodb.net/?retryWrites=true&w=majority&appName=TestingCluster";
const client = new MongoClient(uri);
async function run() {
  try {
    
    const database = client.db("mevo");
    const movies = database.collection("records");

    const query = { Name: "Akshay Kumar" };

    const options = {
      projection: { _id: 0, Age: 1, Gender: 1, Name:1 },
    };

    const movie = await movies.findOne(query,options);
    
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);