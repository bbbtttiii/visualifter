class Api {
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
        return fetch(this.baseUrl).then(res => res.json());
    }


}