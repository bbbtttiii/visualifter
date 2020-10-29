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
    
    deleteBlock(event) {
        event.preventDefault();
        new Adapter().deleteBlock(this.id);
    }

    renderBlock() {
        let container = document.getElementById('main'); //selecting canvas
        let block = document.createElement('div');  //creating inner block div

        block.className = 'block'; //assigning block to its class
        
        block.style.setProperty('--grid-rows', this.sets); //setting the block rows to the number of reps
        block.style.setProperty('--grid-cols', this.reps); //setting the block cols to the number of sets
        
        for (let c=0; c<(this.sets * this.reps); c++) { //loop thru
            let cell = document.createElement('span'); //create span called cell
            cell.innerText = this.weight; //put weight inside each cell
            block.appendChild(cell).className = 'block-item'; //append cells to the block, assign block-item class
            container.appendChild(block); //append each outerblock to the container
        }
        
        let label = document.createElement('span'); //create span called label
        label.innerText = this.exercise; //set label to exercise name
        block.appendChild(label).className = 'block-label'; //append block with label, give class block-label
        
        Block.drag();
        Block.resetBlockForm();

        //block highlighting
        block.addEventListener("click", (event) => {
            event.stopPropagation();
            //when selected
            if (editing === false) {
                editing = true;
                let ex = document.getElementById('exercise');
                    ex.value = this.exercise;
                let rep = document.getElementById('reps');
                    rep.value = this.reps;
                let set = document.getElementById('sets');
                    set.value = this.sets;
                let wght = document.getElementById('weight');
                    wght.value = this.weight;

                //add delete button
                if (!document.querySelector('.delete-button')) {
                    let form = document.getElementById('block-form');
                    let deleteBtn = document.createElement('button');
                    deleteBtn.innerText = "Delete Block";
                    form.appendChild(deleteBtn).className = 'delete-button';
                    deleteBtn.style.display = 'inline';
                } else {
                    let btn = document.querySelector('.delete-button');
                    btn.style.display = 'inline';
                }
            //when un-selected
            } else {
                let btn = document.querySelector('.delete-button');
                btn.classList.remove('.delete-button')
                Block.resetBlockForm();
            }
        }) 
    }

    editBlock() {
        
    }

    static resetBlockForm() {
            editing = false;
            let ex = document.getElementById('exercise');
                ex.value = '';
            let rep = document.getElementById('reps');
                rep.value = '';
            let set = document.getElementById('sets');
                set.value = '';
            let wght = document.getElementById('weight');
                wght.value = '';

            if (document.querySelector('.delete-button')) {
                let btn = document.querySelector('.delete-button')
                btn.style.display = "none";
            }
    }

    static drag() {
        let draggableElements = document.getElementsByClassName('block');

        for(let i=0; i<draggableElements.length; i++){
            dragElement(draggableElements[i]);
        }

        function dragElement(elmnt) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            // move the div:
            elmnt.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                // get the mouse cursor position at startup:
                pos3 = parseInt(e.clientX);
                pos4 = parseInt(e.clientY);
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
                return false;
            }

            function elementDrag(e) {
                e = e || window.event;
                // calculate the new cursor position:
                pos1 = pos3 - parseInt(e.clientX);
                pos2 = pos4 - parseInt(e.clientY);
                pos3 = parseInt(e.clientX);
                pos4 = parseInt(e.clientY);
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
                elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
            }

            function closeDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }
}