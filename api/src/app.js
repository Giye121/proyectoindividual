const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const errorHandler = require("./utils/middlewares/errorHandler");
const setHeaders = require("./utils/middlewares/setHeaders");
require("./db");

const server = express();

server.name = "API";

server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

server.get("/", (req, res) => res.send("HOlaa"));
server.use("/", routes);
server.use("/api", routes);

server.use(errorHandler);
server.use(setHeaders);
module.exports = server;
