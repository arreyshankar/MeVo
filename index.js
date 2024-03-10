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
    const database = client.db("mevo");
    const users = database.collection("users");
    const user = {
        Name: "testUser",
        Password : "test123"
    }
    /*
    const result = await users.insertOne(user);
    if(result.acknowledged == true){
        console.log("Successfully Inserted");
    }
    */
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
