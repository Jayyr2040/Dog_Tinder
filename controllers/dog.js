const express = require("express");
const router = express.Router();
const Dog = require("../models/Dog");

// INDEX
router.get("/", (req, res) => {
  Dog.find({}, (err, foundDogs) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundDogs);
  });
});

// CREATE
router.post("/", (req, res) => {
  Dog.create(req.body, (error, createdDog) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdDog);
  });
});


// ========================== //
// ========================== //

// DELETE
router.delete("/:id", (req, res) => {
  Dog.findByIdAndRemove(req.params.id, (err, deletedDog) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedDog);
  });
});

// UPDATE
router.put("/:id", (req, res) => {
  Dog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedDog) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedDog);
    }
  );
});

// SHOW
router.get("/:name", (req, res) => {
  Dog.find( 
    { name: req.params.name },

     (error, foundDogs) => {
        console.log(foundDogs );
        res.send( foundDogs );
      } )
});

// ========================== //
// ========================== //



router.get("/seed", (req, res) => {
  Dog.remove({}, (error, dogs) => {
    Dog.create([{
      "name": "Kai Kai",
      "breed": "Pomeranian",
      "image": "https://images.pexels.com/photos/5766194/pexels-photo-5766194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "sex": "M",
      "yob": 2019,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      "name": "Money",
      "breed": "Daschund",
      "image": "https://images.unsplash.com/photo-1612195665612-30c359370759?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "sex": "F",
      "yob": 2017,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      "name": "Heroku",
      "breed": "Saint Bernard",
      "image": "https://images.unsplash.com/photo-1562193882-0ea2da14e6e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
      "sex": "F",
      "yob": 2019,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }], (err, data) => {
      res.redirect("/");
    });
  });
});

module.exports = router;
