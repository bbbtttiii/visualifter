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

    static createBlock(event) {
        // debugger
        event.preventDefault();
        let formValues = {
            exercise: document.getElementById('exercise').value,
            reps: document.getElementById('reps').value,
            sets: document.getElementById('sets').value,
            weight: document.getElementById('weight').value
        };
        new Api().createBlock(formValues);
    }

    renderBlock() {
        let container = document.getElementsByClassName('main')[0];
        let block = document.createElement('div');
        block.className = 'block';
        block.style.setProperty('--grid-rows', reps);
        block.style.setProperty('--grid-cols', sets);
    
        for (c=0; c<(reps * sets); c++) {
          let cell = document.createElement('div');
          cell.innerText = weight;
          container.appendChild(block);
          block.appendChild(cell).className = 'block-item';
        }
        
        let label = document.createElement('span');
        label.innerText = exercise;
        block.appendChild(label).className = 'block-label';
    }

}