const modal = require("./Models/products.js");

const createProduct = async (title, price, tags) => {
  let product = new modal();
  product.title = title;
  product.price = price;
  product.tags = tags;
  // product.slug = slug;
  await product.save();
  console.log("Product Added");
  return product;
};

module.exports = createProduct;
