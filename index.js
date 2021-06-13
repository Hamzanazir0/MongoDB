console.clear();

const express = require("express");
const app = express();
app.use(express.json());

const mongo = require("mongoose");
mongo
  .connect("mongodb://localhost/mernstack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Succesfull with mongo");
  })
  .catch((err) => {
    console.log("Error Connection");
  });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000);
