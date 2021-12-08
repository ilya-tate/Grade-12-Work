require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

module.exports = async (req, res) => {
  const {
    purchase,
    total_amount: totalAmount,
    shipping_fee: shippingFee
  } = req.body;

  const calcTotal = () => {
    return totalAmount + shippingFee;
  };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calcTotal(),
    currency: "usd"
  });

  res.json({ clientSecret: paymentIntent.client_secret });
};
