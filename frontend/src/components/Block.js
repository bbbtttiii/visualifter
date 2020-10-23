class Block {

    static allBlocks = [];

    constructor(block) {
        this.exercise = block.attributes.exercise;
        this.weight = block.attributes.weight;
        this.reps = block.attributes.reps;
        this.sets = block.attributes.sets;
        this.id = block.id;
        this.workoutId = block.attributes.workout_id;
    }

    static createBlock() {
        event.preventDefault();
        
    }

}