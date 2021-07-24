const express = require("express")
const router = express.Router()
const User = require("../models/User")

// INDEX
router.get("/", (req, res) => {
    User.find({}, (err, foundUsers) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(foundUsers);
    });
  });

// CREATE  
router.post("/", (req, res) => {
  User.create(req.body, (error, createdUser) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdUser);
  });
});


// ========================== //
// ========================== //

// DELETE
router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedUser);
  });
});


// UPDATE
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedUser) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedUser);
    }
  );
});

// ========================== //
// ========================== //

  
router.get("/seed", (req, res) => {
  User.remove({}, (error, users) => {
    User.create([{
      "username": "jerk13",
      "password": "12345",
      "email": "jerk@gmail.com",
      "firstName": "Jerrick",
      "lastName": "What",
      "location": "N",
      "type": "user",
      "description": "looking for some mate for my doge",
      "dog": "60fac0f512cc4a0015da2b4e",
    },
    {
      "username": "slyguy",
      "password": "12345",
      "email": "slyguy@aol.com",
      "firstName": "Sylvester",
      "lastName": "What",
      "location": "W",
      "type": "user",
      "description": "doge please",
      "dog": "60fac0f512cc4a0015da2b4f",
    },
    {
      "username": "joyboy",
      "password": "12345",
      "email": "email@email.com",
      "firstName": "Jay",
      "lastName": "What",
      "location": "C",
      "type": "user",
      "description": "where is a good place for dog",
      "dog": "60fac0f512cc4a0015da2b50",
    },
    {
      "username": "edddd",
      "password": "12345",
      "email": "email@email.com",
      "firstName": "Ed",
      "lastName": "What",
      "location": "C",
      "type": "user",
      "description": "i have a big dog",
      "dog": "60fb58eb8d362a04eebc6526",
    }
    ], (err, data) => {
      res.redirect("/users");
    });
  });
});


module.exports = router