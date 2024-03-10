const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sarvesh:mevo123@testingcluster.tg9uqrx.mongodb.net/?retryWrites=true&w=majority&appName=TestingCluster";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("mevo").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    console.log();
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
