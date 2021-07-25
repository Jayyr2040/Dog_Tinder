require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
// const session = require("express-session");
const methodOverride = require("method-override");
const cors = require("cors");

// Mongoose connection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );
app.use(cors());

// Controllers
const usersController = require("./controllers/user");
const dogsController = require("./controllers/dog");
const likeEventsController = require("./controllers/likeEvent");
const sessionsController = require("./controllers/sessions.js");
app.use("/users", usersController);
app.use("/dogs", dogsController);
app.use("/likeevents", likeEventsController);
app.use("/sessions", sessionsController);

app.listen(PORT, () => {
  console.log("Matching happening on port", PORT);
});
