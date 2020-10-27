class Block {

    static allBlocks = [];

    constructor(block) {
        this.exercise = block.exercise;
        this.weight = block.weight;
        this.reps = block.reps;
        this.sets = block.sets;
        this.id = block.id;
        this.workoutId = block.workout_id;
        Block.allBlocks.push(this);
    }

    static createBlock(event) {
        event.preventDefault();
        let formValues = {
            exercise: document.getElementById('exercise').value,
            reps: document.getElementById('reps').value,
            sets: document.getElementById('sets').value,
            weight: document.getElementById('weight').value
        };
        new Api().createBlock(formValues).then(block => {
            let newBlock = new Block(block);
            newBlock.renderBlock();
        });
    }

    renderBlock() {
        let container = document.getElementsByClassName('main')[0];

        let block = document.createElement('div');
        block.className = 'block';
        block.style.setProperty('--grid-rows', this.reps);
        block.style.setProperty('--grid-cols', this.sets);

        for (let c=0; c<(this.reps * this.sets); c++) {
          let cell = document.createElement('div');
          cell.innerText = this.weight;
          container.appendChild(block);
          block.appendChild(cell).className = 'block-item';
        }
        
        let label = document.createElement('span');
        label.innerText = this.exercise;
        block.appendChild(label).className = 'block-label';
        Block.drag();
    }

    static drag() {
        var draggableElements = document.getElementsByClassName('block');

        for(let i=0; i<draggableElements.length; i++){
            dragElement(draggableElements[i]);
        }

        function dragElement(elmnt) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            elmnt.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                pos3 = parseInt(e.clientX);
                pos4 = parseInt(e.clientY);
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
                return false;
            }

            function elementDrag(e) {
                e = e || window.event;
                pos1 = pos3 - parseInt(e.clientX);
                pos2 = pos4 - parseInt(e.clientY);
                pos3 = parseInt(e.clientX);
                pos4 = parseInt(e.clientY);
                elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
                // console.log(elmnt.offsetTop)
                elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }

}