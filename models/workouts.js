const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,

        required: "Enter an exercise",
        trim: true,
      },
      name: {
        type: String,
        required: "Enter an exercise",
        trim: true,
      },
      duration: {
        type: Number,
        required: "Enter a time",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;
