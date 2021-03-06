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
    
    new Adapter().createBlock(formValues)
      .then(block => {
        let newBlock = new Block(block);
        newBlock.renderBlock();
      }
      );
  }

  deleteBlock(event) {
    event.preventDefault();
    new Adapter().deleteBlock(this.id);
    Block.removeBlock(this.id);
  }

  static removeBlock(blockId) {
    Block.allBlocks.find(block => block.id === blockId).resetBlockForm();
    document.getElementById(blockId).remove();
    //remove from frontend
    let b = Block.allBlocks.map(block => block.id).indexOf(blockId);
    if (b > -1) {
      Block.allBlocks.splice(b, 1);
    }
  }

  renderBlock() {

    let container = document.getElementById('main'); //selecting canvas
    let block = document.createElement('div');  //creating inner block div

    block.className = 'block'; //assigning block to its class
    block.id = this.id;

    if (this.reps.value == 0) {
      block.style.setProperty('--grid-rows', 1);
    } else {
      block.style.setProperty('--grid-rows', this.sets); //setting the block rows to the number of reps
    }

    block.style.setProperty('--grid-cols', this.reps); //setting the block cols to the number of sets

    for (let c = 0; c < (this.sets * this.reps); c++) { //loop thru
      let cell = document.createElement('span'); //create span called cell
      cell.innerText = this.weight; //put weight inside each cell
      block.appendChild(cell).className = 'block-item'; //append cells to the block, assign block-item class
      container.appendChild(block); //append each outerblock to the container
    }

    let label = document.createElement('span'); //create span called label
    label.innerText = this.exercise; //set label to exercise name
    block.appendChild(label).className = 'block-label'; //append block with label, give class block-label

    // failure label
    if (toF === true) {
      let fail = document.createElement('div');
      let name = document.getElementByClassName('block-label');
      fail.innerHTML = "To Failure";
      name.appendChild(fail).className = 'fail-label';
    }

    //X button
    let x = document.createElement('button');
    x.className = "x-btn";
    x.innerText = "X";
    x.title = "Delete block?"
    x.addEventListener("click", this.deleteBlock.bind(this));
    // x.id = `del-${this.id}`;
    block.parentNode.insertBefore(x, block.nextSibling);
    block.appendChild(x);

    //enable dragging
    Block.drag();
    //clear the form
    this.resetBlockForm();

    //block highlighting
    block.addEventListener("click", () => {
      //when selected
      if (selected === false) {
        selected = true;

        //input values
        let ex = document.getElementById('exercise');
        ex.value = this.exercise;
        let rep = document.getElementsByClassName('slider')[0];
        rep.value = this.reps;
        let repsOutput = document.getElementById('reps-output');
        repsOutput.innerText = this.reps;
        let set = document.getElementsByClassName('slider')[1];
        set.value = this.sets;
        let setsOutput = document.getElementById('sets-output');
        setsOutput.innerText = this.sets;
        let wght = document.getElementById('weight');
        wght.value = this.weight;

      //when deselected
      } else {
        selected = false;
        this.resetBlockForm();
      }
    })
  }

  // can use form.reset
  resetBlockForm() {
    //clear form fields
    let ex = document.getElementById('exercise');
    ex.value = '';
    let rep = document.getElementById('reps');
    rep.value = 1;
    let repsOutput = document.getElementById('reps-output');
    repsOutput.innerText = '1';
    let set = document.getElementById('sets');
    set.value = 1;
    let setsOutput = document.getElementById('sets-output');
    setsOutput.innerText = '1';
    let wght = document.getElementById('weight');
    wght.value = '';

    //hide delete button
    if (document.getElementById(`del-${this.id}`)) {
      let btn = document.getElementById(`del-${this.id}`)
      btn.style.display = "none";
    }
    selected = false;

  }

  static drag() {
    let draggableElements = document.getElementsByClassName('block');

    for (let i = 0; i < draggableElements.length; i++) {
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