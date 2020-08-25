const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workouts.find({})
    .then((dbWorkouts) => {
      console.log("heres your workout", dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts/", (req, res) => {
  db.Workouts.create(req.body)
    .then((dbWorkouts) => {
      console.log("created new workout", dbWorkouts);
      res.json(dbWorkouts);
    })
    .then(function (_id) {
      console.log(_id);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", function ({ body, params }, res) {
  db.Workouts.findByIdAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workouts.find({})
    .then((range) => {
      res.json(range);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
