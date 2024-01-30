
let numberOfGrids = document.getElementById('create-grid').addEventListener('click', gridCreator);


function gridCreator(){

  let userInput = prompt("How many boxes would you like to have per side?");
  if (userInput <=100) {
  let sketchBoardContainer = document.getElementById('sketch-board-container');
  sketchBoardContainer.style.display = 'flex';
  sketchBoardContainer.style.flexWrap = 'wrap';
  sketchBoardContainer.style.height = '500px';
  sketchBoardContainer.style.width = '500px';
  // sketchBoardContainer.style.padding = '20px';
  // the line of code below calculates the length and breadth of divs by dividing the minimun of height/width by the sqrt(userInput) such that the divs are able to fit in the smaller dimension and not overflow.
  // const boxSize = Math.min(sketchBoardContainer.offsetWidth, sketchBoardContainer.offsetHeight) / userInput;
  // console.log(boxSize);
  for (let i = 0; i < userInput**2; i++){
    let addDiv = document.createElement('div');
    addDiv.style.display = 'flex';
    addDiv.style.backgroundColor = 'black';
    addDiv.style.border = '10px';
    let divSize = Math.min(sketchBoardContainer.offsetWidth, sketchBoardContainer.offsetHeight) / userInput;
    addDiv.style.width = divSize + 'px'; 
    addDiv.style.height = addDiv.style.width;
    sketchBoardContainer.appendChild(addDiv);

    addDiv.addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = "white";
    });

    let resetGrid = document.getElementById('reset-sketch');
    resetGrid.addEventListener('click', function() {
    sketchBoardContainer.removeChild(addDiv);
  } );
  }
  }
  else {
    alert("You have exceeded the max limit of usable grids!");
  }
  


}



