const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const { connect } = require("./config/dbConfig");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.json());
connect();

// app.set('layout','./views/layouts/main');
app.set("view engine", "ejs");

app.use(express.json());
app.use("/api/users/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
