// function makeBlock(reps, sets, weight, exercise) {
//     let container = document.getElementsByClassName('main')[0];
    
//     let outerBlock = document.createElement('div');
//     outerBlock.className = 'block-outer';

//     let block = document.createElement('div');
//     block.className = 'block';
//     block.style.setProperty('--grid-rows', reps);
//     block.style.setProperty('--grid-cols', sets);

//     outerBlock.appendChild(block);

//     for (c=0; c<(reps*sets); c++) {
//       let cell = document.createElement('div');
//       cell.innerText = weight;
//       container.appendChild(block);
//       block.appendChild(cell).className = 'block-item';
//     }
    
//     let label = document.createElement('span');
//     label.innerText = exercise;
//     outerBlock.appendChild(label).className = 'block-label';
// }

// makeBlock(5, 5, 185, "bench press");
// makeBlock(3, 12, 35, "curls");
// makeBlock(3, 5, 75, "incline bench press");
// makeBlock(1, 3, 305, "squat")

document.getElementById('block-form').addEventListener("submit", Block.createBlock);
