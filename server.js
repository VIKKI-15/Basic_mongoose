// Import required modules
const express = require("express");
const app = express();

const mongoose = require("mongoose");
//use 127.0.0.1 in place of localhost if not working
const mongoDB = "mongodb://127.0.0.1:27017/crud";

const UserModel = require("./models/user.model");

// Connect to the local MongoDB server
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

// Create and save a new person document using promises
const newPerson = new UserModel({
  name: "Varun",
  age: 23,
  email: "Varun@gmail.com",
});

//Saving Person's Information in the database
newPerson
  .save()
  .then((savedPerson) => {
    console.log("Saved person:", savedPerson);
  })
  .catch((error) => {
    console.error("Error saving person:", error);
  });

const port = 3000;
app.listen(port, () => {
  console.log("Server listening on port:", port);
});
