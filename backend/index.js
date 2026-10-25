require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./Models/HoldingsModel");
const { PositionsModel } = require("./Models/PositionsModel");
const { OrdersModel } = require("./Models/OrdersModel");

const authRoute = require("./Routes/AuthRoute");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(PORT, () => {
  console.log("App is listening to port ", PORT);
});

app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001" ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find();
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find();
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved");
});

// app.use(express.json());

// Authentication Route
app.use("/auth/", authRoute);
