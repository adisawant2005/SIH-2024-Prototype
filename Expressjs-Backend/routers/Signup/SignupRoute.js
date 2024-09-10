const express = require("express");
const router = express.Router();
const Signup = require("../../db/dbSchema/AccountSchema");

// Signup Route
router
  .route("/")
  .get((req, res) => res.send("Signup Your Self"))
  .post(async (req, res) => {
    if (!req.body) {
      return res.status(400).send("Request body is missing");
    } else if (
      req.body.email === "" ||
      req.body.password === "" ||
      req.body.firstName === "" ||
      req.body.lastName === "" ||
      req.body.gender === "" ||
      req.body.country === "" ||
      req.body.city === "" ||
      req.body.streetAddress === "" ||
      req.body.postalCode === "" ||
      req.body.phoneNumber === "" ||
      req.body.birthdate === ""
    ) {
      return res
        .status(400)
        .json({ message: "Hii, Enter valid credentials", body: req.body });
    } else {
      const newUser = new Signup(req.body);
      try {
        await newUser.save();
        res.status(201).send(newUser);
      } catch (error) {
        res.status(400).send(error);
      }
    }
  });

module.exports = router;
