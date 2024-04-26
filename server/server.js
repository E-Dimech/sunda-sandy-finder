const express = require("express");
const app = express();
const port = 8000;

const mapRoutes = require("./mapRoutes");
app.use("/api", mapRoutes);

app.get("/", (req, res) => {
  res.send("Hell00o from the backend!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
