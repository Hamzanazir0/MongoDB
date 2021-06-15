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

const updateProduct = async (id, title, price, tags) => {
  let product = await modal.findById(id);
  product.title = title;
  product.price = price;
  product.tags = tags;
  // product.slug = slug;
  await product.save();
  console.log("Product Added");
  return product;
};

const deleteProduct = async (id) => {
  let product = await modal.findByIdAndDelete(id);
  console.log(product);
};

const getAllProduct = async () => {
  let products = await modal.find();
  return products;
};

const getProduct = async (id) => {
  let product = await modal.findById(id);
  return product;
};

module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.getAllProduct = getAllProduct;
module.exports.getProduct = getProduct;
