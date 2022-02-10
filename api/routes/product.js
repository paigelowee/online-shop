const router = require("express").Router();
const Product = require("../models/Product");

const { authenticateAdmin, authenticateUser } = require("../utils");

// Create product
router.post("/", authenticateAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) res.status(400).json("Item not found");
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get products
router.get("/", authenticateUser, async (req, res) => {
  // const sort = req.query.sort
  // const category = req.query.category
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update product
router.put("/:id", authenticateAdmin, async (req, res) => {
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
