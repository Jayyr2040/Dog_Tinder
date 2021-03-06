const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const User = require("../models/User.js");


// ROUTES
// get new user index
router.get("/new", (req, res) => {
    res.render("../views/login.ejs");
   });

router.post("/", (req, res) => {
    User.findOne({username: req.body.username},(err,foundUser) => {
        if (err) {
            console.log(err);
            res.send("oops the db had a problem");      
          } else if (!foundUser) {
            res.send('<a  href="/">Sorry, no user found </a>');
          } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            req.session.currentUser = foundUser;
            console.log("log in user", req.session.currentUser);
            res.redirect("/users");
            } else {
                res.send('<a href="/"> password does not match </a>');
              }
          })
   });

   // logout
   router.delete("/", (req, res) => {
    console.log("log out user", req.session.currentUser);
    req.session.destroy(() => {
      res.redirect("/");
    });
  });
  

// EXPORT
module.exports = router;
