const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner");


// console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === "development") {
    router.post("/create", async (req, res) => {
        const { fullname, email, password } = req.body;

        const isOwner = await ownerModel.findOne({email})
        if (isOwner) {
            return res.status(504).send("You are not allowed")
        }


        const createOwner = await ownerModel.create({
            fullname,
            email,
            password
        })

        res.send(createOwner);

    });
}

router.get("/", (req, res) => {
    res.send("hello")
});




module.exports = router