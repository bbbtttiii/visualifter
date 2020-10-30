class Workout {

    static allWorkouts = [];

    constructor(workout) {
        this.name = workout.name;
        this.blocks = Block.allBlocks.filter(block => {block.workoutId === workout.id});
        this.id = workout.id;
        Workout.allWorkouts.push(this);
    }

    static createWorkout(event) {
        debugger
        event.preventDefault();
        let formValue = {
            name: document.getElementById('workout-input').value,
        };
        new Adapter().createWorkout(formValue).then(workout => {
            let blk = Block.allBlocks
            // debugger
            for (let block of blk) {
                new Adapter().updateBlock(workout.id, block.id)
                block.workoutId = workout.id
                // debugger
            }
            let newWorkout = new Workout(workout);
            // debugger
            newWorkout.listWorkout();
            // newWorkout.blocks = blk;

            let savedForm = document.getElementById('save-workout-form')
            let savedMsg = document.createElement('span');
            savedMsg.innerText = "Saved!";
            savedForm.appendChild(savedMsg).className = 'message';
            let savedInput = document.getElementById('workout-input')
            savedInput.value = '';

            let name = document.getElementsByTagName('h3')[0];
            name.innerText = workout.name;
        });

    }

    static listWorkouts() {
        let wrkts = Workout.allWorkouts;
        // debugger
        for (let workout of wrkts) {
            workout.listWorkout()
        }
    }

    listWorkout() {
        let list = document.getElementById('workout-list');
        let item = document.createElement('option');
        item.innerText = this.name;
        item.setAttribute('value', this.id)
        list.append(item);
    }

    static openWorkout() {
        let selection = document.getElementById('workout-list').value;
        let result = Workout.allWorkouts.find(workout => (workout.id === parseInt(selection)));
        debugger
        
        for (let b of result.blocks) {
            // debugger
            b.renderBlock();
        }
        // new Adapter().loadWorkout(result);
        // debugger
    }
}