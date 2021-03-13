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

//get slider values
let repsSlider = document.getElementById("reps");
let repsOutput = document.getElementById("reps-output");
let setsSlider = document.getElementById("sets");
let setsOutput = document.getElementById("sets-output");

// Display the default slider values
repsOutput.innerHTML = repsSlider.value; 
setsOutput.innerHTML = setsSlider.value;

// Update the current slider values
repsSlider.oninput = function() {
  repsOutput.innerHTML = this.value;
}

setsSlider.oninput = function() {
  setsOutput.innerHTML = this.value;
}

//failure option
function toF() {
  let failureText = document.getElementById('failure')
  let failBtn = document.getElementById('fail-checkbox');
  let text = document.getElementById("reps-output");

  if (failBtn.checked == true) {
    repsSlider.value = 0;
    text.innerHTML = "To Failure";
    failureText.style.display = "none";
  } else {
    text.innerHTML = repsSlider.value;
    failureText.style.display = "inline";
  }
}

let selected = false;

new Index();