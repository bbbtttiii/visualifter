class Workout {

    static allWorkouts = []

    constructor(workout) {
        this.name = workout.name;
        this.blocks = workout.blocks.map(block => new Block(block));
        Workout.allWorkouts.push(this);
    }

    static createWorkout(event) {
        event.preventDefault();
        let formValue = {
            workout: document.getElementById('workout-input').value,
        };
        new Api().createWorkout(formValue).then(workout => {
            new Workout(workout);
        });
    }

}