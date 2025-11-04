const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://smartDeals_db:uI5JSxCuQ1RZht5f@cluster0.alsn6h3.mongodb.net/?appName=Cluster0";
// mongo db client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Smart server is running");
});

async function run() {
  try {
    await client.connect();

    const smartDealsDB = client.db("smart_deals");
    const smartDeals_collection = smartDealsDB.collection(
      "smart_deals_collection"
    );
    const bidsCollection = smartDealsDB.collection("bids");
    const userCollection = smartDealsDB.collection("users");

    // users api
    app.post("/users", async (req, res) => {
      const newUsers = req.body;
      const email = req.body.email;
      const query = { email: email };
      const existingEmail = await userCollection.findOne(query);

      if (existingEmail) {
        res.send({message: "user already exit. do not need to log in again"});
      } else {
        const result = await userCollection.insertOne(newUsers);
        res.send(result);
      }
    });

    app.get("/products", async (req, res) => {
      //   const projectFiels = { title: 1 };
      console.log(req.query);
      const email = req.query.email;
      const query = {};
      if (email) {
        query.email = email;
      }

      const cursor = smartDeals_collection.find(query);
      // .sort({ price_min: -1 })
      // .skip(2)
      // .limit(3)
      // .project(projectFiels);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await smartDeals_collection.findOne(query);
      res.send(result);
    });

    app.post("/products", async (req, res) => {
      const newProducts = req.body;
      const result = await smartDeals_collection.insertOne(newProducts);
      res.send(result);
    });

    app.patch("/products/:id", async (req, res) => {
      const id = req.params.id;
      const updatedProduct = req.body;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: {
          name: updatedProduct.name,
          price: updatedProduct.price,
        },
      };
      const result = await smartDeals_collection.updateOne(query, update);
      res.send(result);
    });

    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await smartDeals_collection.deleteOne(query);
      res.send(result);
    });

    // bids related api

    app.get("/bids", async (req, res) => {
      const email = req.query.buyer_email;
      const query = {};
      if (email) {
        query.buyer_email = email;
      }
      const cursor = bidsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/bids/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bidsCollection.findOne(query);
      res.send(result);
    });

    app.post("/bids", async (req, res) => {
      const newBids = req.body;
      const result = await bidsCollection.insertOne(newBids);
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
  console.log(`smart server is running on ${port}`);
});
