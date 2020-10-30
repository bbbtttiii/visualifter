class Adapter {
    constructor() {
        this.baseUrl = `http://localhost:3000`;
    }

    //create
    createBlock(formValues) {
        const newBlock = {block: formValues};
        return fetch(`${this.baseUrl}/blocks`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newBlock)
        })
        .then(response => response.json())
    }

    //to update block when saving workout (not for editing block attributes)
    updateBlock(workoutId, blockId) {
        const updatedBlock = {block: 
            {workout_id: workoutId}
        };
        return fetch(`${this.baseUrl}/blocks/${blockId}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedBlock)
        })
        .then(response => response.json())
    }

    //create
    createWorkout(formValue) {
        const newWorkout = {workout: formValue};
        return fetch(`${this.baseUrl}/workouts`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newWorkout)
        })
        .then(response => response.json())
    }

    //read
    loadWorkout() {
        return fetch(`${this.baseUrl}/workouts`).then(res => res.json())
        .then(function(res) {
            for (let w of res) {
                new Workout(w)
            }
        Workout.listWorkouts();
        });
    }

    //delete
    deleteBlock(blockId) {
        return fetch(`${this.baseUrl}/blocks/${blockId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(function(obj){
            if (obj.message) {
                Block.removeBlock(blockId);
            }
        })
    }
}