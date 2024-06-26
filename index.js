require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017";
const PORT = 8082;
const recordsRouter = require("./routes/records.route");
const verifyAuth = require("./middlewares/verifyauth");

app.use(express.json());
app.use(cors());
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB connection is succesfull");
    app.listen(PORT, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is running on");
      }
    });
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });

app.use(verifyAuth);
app.use("/records", recordsRouter);
