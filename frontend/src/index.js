function makeBlock(reps, sets, weight, exercise) {
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

makeBlock(5, 5, 185, "bench press");
makeBlock(3, 12, 35, "curls");
makeBlock(3, 5, 75, "incline bench press");
makeBlock(1, 3, 305, "squat")

//set, rep, weight//


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
        console.log(elmnt.offsetTop)
        elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}