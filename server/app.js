const express = require("express");
const morgan = require("morgan");
const router = require("./api");
const path = require("path");
const app = express();
module.exports = app;

app.use(morgan("dev"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", router);

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});
