class Workout {

    static allWorkouts = [];

    constructor(workout) {
        this.name = workout.name;
        this.blocks = workout.blocks;
        debugger
        this.id = workout.id;
        Workout.allWorkouts.push(this);
    }

    static createWorkout(event) {
        event.preventDefault();
        let formValue = {
            name: document.getElementById('workout').value,
        };
        new Adapter().createWorkout(formValue).then(workout => {
            let blk = Block.allBlocks
            for (let block of blk) {
                new Adapter().updateBlock(workout.id, block.id)
            }
            //don't push in workout until it has all blocks associated with it
            new Workout(workout);
            Workout.listWorkouts();
        });
    }

    static listWorkouts() {
        let list = document.getElementById('workout-list');
        let wrkts = Workout.allWorkouts;
        for (let workout of wrkts) {
            let item = document.createElement('option');
            item.innerText = workout.name;
            item.setAttribute('value', workout.id)
            list.append(item);
        }
    }

    static openWorkout() {
        let selection = document.getElementById('workout-list').value;
        let result = Workout.allWorkouts.find(workout => (workout.id === parseInt(selection)));
        debugger
    }

}