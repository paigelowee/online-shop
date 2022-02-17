const router = require("express").Router();
const Product = require("../models/Product");

const { authenticateAdmin, authenticateUser } = require("../utils");

// Create product
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    return res.status(200).json(newProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Get product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(400).json("Item not found");
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get products
router.get("/", async (req, res) => {
  const sort = req.query.sort;
  const category = req.query.category;
  const colour = req.query.colour;

  // sort products
  let product_sort = {};
  if (sort) {
    if (sort === "asc") {
      product_sort = { price: 1 };
    } else if (sort === "desc") {
      product_sort = { price: -1 };
    } else if (sort === "newest") {
      product_sort = { createdAt: 1 };
    }
  }

  // filter products by colour/category
  let product_query = {};
  let query = [];
  if (colour) {
    query.push({ colour: { $in: colour } });
  }
  if (category) {
    query.push({ category: { $in: category } });
  }

  if (query.length > 0) {
    product_query["$and"] = query;
  }
  try {
    const products = await Product.find(product_query).sort(product_sort);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (updatedProduct) {
      res.status(200).json(updatedProduct._doc);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete product
router.delete("/:id", authenticateAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
