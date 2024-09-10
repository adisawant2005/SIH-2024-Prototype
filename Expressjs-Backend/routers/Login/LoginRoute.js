const express = require("express");
const router = express.Router();
const Login = require("../../db/dbSchema/AccountSchema");
require("dotenv").config();

router.route("/").get(async (req, res) => {
  const { email, password } = req.query;
  try {
    const user = await Login.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).send({ error: "Invalid credentials" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
