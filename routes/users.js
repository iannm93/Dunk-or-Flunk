const express = require("express");
const db = require("../models");
const isAuthenticated = require("../config/isAuthenticated");

const router = express.Router();

// use isAuthenticated middleware to protect this route
router.get("/api/user/:id", isAuthenticated, (req, res) => {
  db.User.findById(req.params.id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});

router.get("/api/users/", (req, res) => {
  db.User.find({})
    .then((users) => res.json(users))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.patch("/api/users/:id", (req, res) => {
  db.User.updateOne({ _id: req.params.id }, req.body)
    .then((highScore) => console.log(highScore))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
