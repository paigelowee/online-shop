const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("", (req, res) => {
  stripe.charges.create(
    {
      sourec: req.body.tokenId,
      amount: req.body.amount,
      currency: "gbp",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json("Payment unauthorised");
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
