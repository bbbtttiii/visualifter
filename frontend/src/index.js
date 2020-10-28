document.getElementById('block-form').addEventListener("submit", Block.createBlock);
document.getElementById('save-workout-form').addEventListener("submit", Workout.createWorkout);
document.getElementById('load-workout-form').addEventListener("submit", Workout.openWorkout);

//block highlighting
document.querySelectorAll('block').forEach(e => {
  e.addEventListener("click", function() {
      document.getElementsByClassName('block');
      document.getElementById('exercise').value = this.exercise;
      document.getElementById('reps').value = this.reps;
      document.getElementById('sets').value = this.sets;
      document.getElementById('weight').value = this.weight;
  })
})