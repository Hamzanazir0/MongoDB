console.clear();

const express = require("express");
const app = express();
app.use(express.json());

const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
} = require("./createProduct");

const mongo = require("mongoose");
mongo
  .connect("mongodb://localhost/mernstack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connection Succesfull with mongo");
    // let product = await createProduct("Lenovo", 300, ["acha hay"]);
    // console.log(product);
    // let updatedproduct = await updateProduct(
    //   "60c7102e6bde222504d2685c",
    //   "Lenovo updated",
    //   300,
    //   ["acha hay"]
    // );
    // console.log(updatedproduct);
    // let deletedproduct = await deleteProduct("60c7102e6bde222504d2685c");
    // let getproducts = await getAllProduct();
    // console.log(getproducts);
    let getproduct = await getProduct("60c65ff8ee18f70138e6403e");
    console.log(getproduct);
  })
  .catch((err) => {
    console.log("Error Connection" + err);
  });
