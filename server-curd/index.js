const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require("mongodb");

// middleware
app.use(cors());
app.use(express.json());

// mongo pass
// h3C6dn6hhydR1wKk
// curdUser

const uri =
  "mongodb+srv://curdUser:h3C6dn6hhydR1wKk@cluster0.alsn6h3.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Simple curd operation");
});

// MongoBD
async function run() {
  try {
    await client.connect();

    const usersDB = client.db("usersDB");
    const usersCollection = usersDB.collection("usersCollection");

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      console.log("hitting the users post api", newUser);
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
