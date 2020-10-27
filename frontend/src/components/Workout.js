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
            name: document.getElementById('workout').value,
        };
        new Adapter().createWorkout(formValue).then(workout => {
            let blk = Block.allBlocks
            // debugger
            for (let block of blk) {
                new Adapter().updateBlock(workout.id, block.id)
            }
            new Workout(workout);
            Workout.loadWorkout();
        });

    }

    //fetch request #2 updates each block id

    static loadWorkout() {

    }

    listWorkouts() {
        document.getElementById('workout-list');
    }

    // static loadWorkout() {

    //     .then(response => {showSavedWorkouts(response)})
    // }

}