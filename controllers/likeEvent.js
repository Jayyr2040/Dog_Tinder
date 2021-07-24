const express = require("express")
const router = express.Router()
const LikeEvent = require("../models/LikeEvent")


// INDEX
router.get("/", (req, res) => {
    LikeEvent.find({}, (err, foundLikeEvents) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(foundLikeEvents);
    });
  });


// CREATE
router.post("/", (req, res) => {
  LikeEvent.create(req.body, (error, createdLikeEvents) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdLikeEvents);
  });
});


// ========================== //
// ========================== //

// DELETE
router.delete("/:id", (req, res) => {
  LikeEvent.findByIdAndRemove(req.params.id, (err, deletedEvent) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedEvent);
  });
});


// UPDATE
router.put("/:id", (req, res) => {
  LikeEvent.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedEvent) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedEvent);
    }
  );
});

// ========================== //
// ========================== //


router.get("/seed", (req, res) => {
  LikeEvent.remove({}, (error, events) => {
    LikeEvent.create([{
      "liker": "111",
      "likee": "222",
    },
    {
      "liker": "333",
      "likee": "444",
    },
    {
      "liker": "555",
      "likee": "666",
    },
    ], (err, data) => {
      res.redirect("/likeevents");
    });
  });
});

module.exports = router