const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/products");
const app = express();
const port = 5001;
// Enable CORS for all routes
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-product-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Connected to local MongoDB database");
  })
  .on("error", (error) => {
    console.error(`Connection error: ${error}`);
  });

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port no ${port}`);
});
