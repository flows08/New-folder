const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.send("hello")
});


app.listen("3000", function () {
    console.log("sercver is running")
});