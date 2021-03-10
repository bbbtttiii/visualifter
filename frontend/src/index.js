class Index {
  constructor() {
    this.setEventListeners();
    this.workouts = new Adapter().loadWorkouts();
  }

  setEventListeners() {
    document.getElementById('block-form').addEventListener("submit", Block.createBlock);
    document.getElementById('save-workout-form').addEventListener("submit", Workout.createWorkout);
    document.getElementById('load-workout-form').addEventListener("submit", Workout.openWorkout);
    document.getElementById('main').addEventListener("click", Block.resetBlockForm); 
  }
}

//show slider value
let repsSlider = document.getElementById("reps");
let repsOutput = document.getElementById("reps-output");
let setsSlider = document.getElementById("sets");
let setsOutput = document.getElementById("sets-output");
repsOutput.innerHTML = repsSlider.value; // Display the default slider value
setsOutput.innerHTML = setsSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
repsSlider.oninput = function() {
  repsOutput.innerHTML = this.value;
}

setsSlider.oninput = function() {
  setsOutput.innerHTML = this.value;
}

let selected = false;

new Index();