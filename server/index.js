const express = require("express");
const { supabase } = require("./config/supabaseClient");
const app = express();
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const professorRoutes = require("./routes/professorRoutes");
const thesisRoutes = require("./routes/thesisRoutes");

const { default: mongoose } = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/chatSystem")
  .then(() => {
    console.log("Connected to MONGODB successfully");
  })
  .catch((err) => {
    console.log("Couldn't connect to db");
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

const server = app.listen("5000", () => {
  console.log("ON PORT 5000");
});