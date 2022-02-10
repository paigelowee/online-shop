const router = require("express").Router();
const Order = require("../models/Order");

const { authenticateUser, authenticateAdmin } = require("../utils");

// Create order
router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    await newOrder.save();
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get order
router.get("/:id", authenticateUser, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) res.status(400).json("Order not found");
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get orders
router.get("/", authenticateUser, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update order
router.put("/:id", authenticateUser, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (updatedOrder) {
      res.status(200).json(updatedOrder._doc);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete order
router.delete("/:id", authenticateAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
