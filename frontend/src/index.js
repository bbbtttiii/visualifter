class Index {

  constructor() {
    this.setEventListeners();
    this.workouts = new Adapter().loadWorkout();
  }

  setEventListeners() {
    document.getElementById('block-form').addEventListener("submit", Block.createBlock);
    document.getElementById('save-workout-form').addEventListener("submit", Workout.createWorkout);
    document.getElementById('load-workout-form').addEventListener("submit", Workout.openWorkout);
    
    document.getElementById('main').addEventListener("click", Block.resetBlockForm); 
  }
  
}

let editing = false;

new Index();