function makeBlock(reps, sets, weight) {
    const container = document.getElementsByClassName('main')[0];
    let block = document.createElement('div');
    block.className = 'block';
    block.style.setProperty('--grid-rows', reps);
    block.style.setProperty('--grid-cols', sets);
    for (c = 0; c < (reps * sets); c++) {
      let cell = document.createElement('div');
      cell.innerText = weight;
      container.appendChild(block)
      block.appendChild(cell).className = 'grid-item';
    }
}

// function makeBlock(reps, sets, weight) {
  // block.style.setProperty('--grid-rows', reps);
  // block.style.setProperty('--grid-cols', sets);
  // for (c = 0; c < (reps * sets); c++) {
  //   let cell = document.createElement("div");
  //   cell.innerText = weight;
  //   container.appendChild(block)
  //   block.appendChild(cell).className = "grid-item";
//   }
// }

makeBlock(5, 5, 185);

//set, rep, weight//




var draggableElements = document.getElementsByClassName('block');

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
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
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        console.log(elmnt.offsetTop)
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}