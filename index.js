console.clear();

const express = require("express");
const app = express();
app.use(express.json());

const createProduct = require("./createProduct");

const mongo = require("mongoose");
mongo
  .connect("mongodb://localhost/mernstack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connection Succesfull with mongo");
    let product = await createProduct("Dell", 300, ["acha hay"]);
    console.log(product);
  })
  .catch((err) => {
    console.log("Error Connection" + err);
  });
