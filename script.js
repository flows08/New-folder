const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const connectdb = require("./config/db");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const db = require("./config/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});
db();



app.get("/", (req, res) => {
    res.send("hello");
})



app.listen("3000", function () {
    console.log("sercver is running");
});