const express = require("express");
const Razorpay = require("razorpay");
const dotenv = require("dotenv");
// const ejs = require("ejs");
dotenv.config();
const app = express();
// const rzp = new Razorpay({
//     key_id: process.env.KEY_ID,
//     key_secret: process.env.KEY_SECRET,
// });
app.set('view engine', 'html');
app.use(express.static("Frontend"));
app.use(express.json());
app.get("/", (req, res) => {
    res.render("home");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/donate", (req, res) => {
    res.render("donate");
});
// app.get("/contact", (req, res) => {
//     res.render("contact");
// });
app.post("/donate", async (req, res) => {
    
    const amount = req.body.amount;
    const paymentOptions = {
        amount: amount * 100,
        currency: 'INR',
        receipt: '#1',
     };
     const razorpayOrder = rzp.orders.create(paymentOptions);
     return res.json({ 
        message: 'success', 
        order: razorpayOrder 
    });
});

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("server has started at");
    console.log("server has started");
});