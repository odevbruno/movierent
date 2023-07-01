require("express-async-errors");
import MiddlewareInterceptionError from "./interception";
import Routes from "./routes";

const express = require("express");
const app = require("express")();
const http = require("http").Server(app);
const port = 5000;

app.use(express.json());
app.use("/", Routes);
app.use(MiddlewareInterceptionError);

http.listen(port, () => console.log(`Server is running in ${port}`));
