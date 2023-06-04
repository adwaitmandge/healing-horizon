const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const adminRoutes = require("./routes/adminRoutes");

const { default: mongoose } = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/healingHorizon")
  .then(() => {
    console.log("Connected to MONGODB successfully");
  })
  .catch((err) => {
    console.log("Couldn't connect to db");
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);

const server = app.listen("5000", () => {
  console.log("ON PORT 5000");
});
