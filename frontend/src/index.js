const block = document.getElementById("block");
const container = document.getElementById("container")

function makeBlock(reps, sets, weight) {
  block.style.setProperty('--grid-rows', reps);
  block.style.setProperty('--grid-cols', sets);
  for (c = 0; c < (reps * sets); c++) {
    let cell = document.createElement("div");
    cell.innerText = weight;
    container.appendChild(block)
    block.appendChild(cell).className = "grid-item";
  }
}

makeBlock(1, 5, 185);
makeBlock(1, 5, 155);
makeBlock(2, 5, 255);

//set, rep, weight//






dragElement(document.getElementById("block"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
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