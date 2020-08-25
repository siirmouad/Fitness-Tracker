const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();
const db = require("./models");

const PORT = process.env.PORT || 4000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workouts";
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URI, options);

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, (err) => {
  console.log("App is listening on:" + PORT);
  if (err) {
    console.log(500);
  } else {
    console.log(200);
  }
});
