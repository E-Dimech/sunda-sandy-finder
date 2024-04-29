require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mapRoutes = require("./mapRoutes");
const app = express();
const port = 8000;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());

// Routes
app.use("/api", mapRoutes);

app.get("/", (req, res) => {
  res.send("Hell00o from the backend!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
