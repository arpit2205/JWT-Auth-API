// Express
const express = require("express");
const app = express();

// Dotenv
require("dotenv").config();

// MongoDB
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://user:${process.env.MONGODB_PASSWORD}@cluster0.hplg3.mongodb.net/${process.env.MONGODB_CLUSTER}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Routes
const authRoutes = require("./routes/auth/auth");

// Middleware
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
