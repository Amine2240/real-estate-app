const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieparser = require("cookie-parser");
app.use(cookieparser());
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:5173"],
    credentials: true,
  })
);

const userrouters = require("./routes/userroutes");
const propertyrouters = require("./routes/propertyroutes");
mongoose
  .connect(`${process.env.MONGO_CONN_URL}`)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log("error while connecting to data base", err));

app.use("/", userrouters);
app.use("/properties", propertyrouters);

app.listen(5000, () => {
  console.log("server connected succsfully");
});
