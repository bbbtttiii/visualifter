class Workout {

    static allWorkouts = []

    constructor(workout) {
        this.name = workout.name;
        Workout.allWorkouts.push(this);
    }

}