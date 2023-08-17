const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

//db connection
// const connectDB = require("./config/db");
// connectDB();
app.get("/", (req, res) => {
  res.send("hello");
});
app.use(express.json());
app.use(express.urlencoded());
//define the port number
const port = process.env.PORT || 5000;

//start the server
const server = app.listen(port, () =>
  console.log(`Server running on port ${port} 🔥`)
);
