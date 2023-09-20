// Import required modules
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1:27017/crud";

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log("Unable to connect ", error);
  });

const port = 3000;
app.listen(port, () => {
  console.log("Server listening on port:", port);
});
