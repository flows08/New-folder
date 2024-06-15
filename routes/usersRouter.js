const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");

const registrationSchema = Joi.object({
    fullname: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

});

router.get("/", (req, res) => {
    res.render("register")
});

router.post("/register", async (req, res) => {
    try {
        // console.log(req.body)
        const { error, value } = registrationSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        // console.log(value)

        const userExist = await userSchema.findOne({ email: value.email })
        if (userExist) {
            return res.status(400).json({ error: "User already exist" })
        }

        bcrypt.genSalt(10, (error, salt) => {
            if (error) {
                return res.send(error.message)
            }
            else {
                bcrypt.hash(value.password, salt, (error, hash) => {
                    if (error) {
                        return res.status(400).send(error.message)
                    }
                    else {
                        // res.send(hash)
                        console.log(hash)
                    }
                });
            }
        });


        const user = await userSchema.create({
            fullname: value.fullname,
            email: value.email,
            password: value.password
        });
        res.status(200).json({ message: "Registeration Successfully !", data: user });
        res.send(user);
        // console.log(user)
    } catch (error) {
        console.log(error.message);
    }
});



module.exports = router;