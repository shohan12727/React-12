const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is cooking");
});

const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com" },
  { id: 2, name: "sabnoor", email: "sabana@gmail.com" },
  { id: 3, name: "sakila", email: "sabana@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
