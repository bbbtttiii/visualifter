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
        new Adapter().createBlock(formValues).then(block => {
            let newBlock = new Block(block);
            newBlock.renderBlock();
        });
    }

    renderBlock() {
        let container = document.getElementsByClassName('main')[0]; //selecting canvas
        let outerBlock = document.createElement('div'); //creating outer block div
        let block = document.createElement('div');  //creating inner block div

        block.className = 'block'; //assigning block to its class
        outerBlock.className = 'outer-block'; //assign outer block to its class
        
        block.style.setProperty('--grid-rows', this.sets); //setting the block rows to the number of reps
        block.style.setProperty('--grid-cols', this.reps); //setting the block cols to the number of sets
        
        for (let c=0; c<(this.sets * this.reps); c++) { //loop thru
            let cell = document.createElement('span'); //create span called cell
            cell.innerText = this.weight; //put weight inside each cell
            block.appendChild(cell).className = 'block-item'; //append cells to the block, assign block-item class
            container.appendChild(outerBlock); //append each outerblock to the container
            outerBlock.appendChild(block)   //append block to the outer block
        }
        
        let label = document.createElement('span'); //create span called label
        label.innerText = this.exercise; //set label to exercise name
        block.appendChild(label).className = 'block-label'; //append block with label, give class block-label
        
        Block.drag();
        Block.resetBlockForm();

        //block highlighting
        block.addEventListener("click", () => { //inherits 'this' from bigger scope
        // debugger
        // add 'edit' class
            document.getElementsByClassName('block');
            document.getElementById('exercise').value = this.exercise;
            document.getElementById('reps').value = this.reps;
            document.getElementById('sets').value = this.sets;
            document.getElementById('weight').value = this.weight;
        }) 
    }   

    static resetBlockForm() { //remove 'edit' class
        document.getElementById('exercise').value = '';
        document.getElementById('reps').value = '';
        document.getElementById('sets').value = '';
        document.getElementById('weight').value = '';
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