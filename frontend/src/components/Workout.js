class Workout {

    static allWorkouts = []

    constructor(workout) {
        this.name = workout.name;
        this.blocks = workout.blocks.map(block => new Block(block));
        Workout.allWorkouts.push(this);
    }

    static createWorkout() {

    }

}