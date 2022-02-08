const router = require("express").Router();
const Basket = require("../models/Basket");

const { authenticateAdmin, authenticateUser } = require("../utils");

// Create basket
router.post("/", async (req, res) => {
  const newBasket = new Basket(req.body);
  try {
    await newBasket.save();
    res.status(200).json(newBasket);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get basket
router.get("/:userId", authenticateUser, async (req, res) => {
  try {
    const basket = await Basket.findOne({ userId: req.params.userId });
    if (!basket) res.status(400).json("Basket not found");
    res.status(200).json(basket);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update basket
router.put("/:userId", authenticateUser, async (req, res) => {
  try {
    const updatedBasket = await Basket.findOneAndUpdate(
      { userId: req.params.userId },
      { $set: req.body },
      { new: true }
    );
    if (updatedBasket) {
      res.status(200).json(updatedBasket._doc);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete basket
router.delete("/:userId", authenticateUser, async (req, res) => {
  try {
    await Basket.findAndDelete({ userId: req.params.userId });
    res.status(200).json("Basket deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
