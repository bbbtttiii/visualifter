

function makeBlock(reps, sets, weight) {
    const container = document.getElementById("container")
    let block = document.createElement('div');
    block.className = 'block';
    container.append(block);
}

// function makeBlock(reps, sets, weight) {
//   block.style.setProperty('--grid-rows', reps);
//   block.style.setProperty('--grid-cols', sets);
//   for (c = 0; c < (reps * sets); c++) {
//     let cell = document.createElement("div");
//     cell.innerText = weight;
//     container.appendChild(block)
//     block.appendChild(cell).className = "grid-item";
//   }
// }

makeBlock(5, 5, 185);


//set, rep, weight//




dragElement(document.querySelectorAll(".block"));

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.x;
    pos4 = e.y;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.x;
    pos2 = pos4 - e.y;
    pos3 = e.x;
    pos4 = e.y;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}