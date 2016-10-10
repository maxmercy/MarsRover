var myRover = {
  position: [0,0], 
  direction: 'N'
};
var i = 0

var rovermove 

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  	if (rover.position[0] === 10) {
		rover.position[0] = 0;
	} 
	if (rover.position[0] === -1) {
		rover.position[0] = 9;
	} 
	if (rover.position[1] === 10) {
		rover.position[1] = 0;
	} 
	if (rover.position[1] === -1) {
		rover.position[1] = 9;
	} 


  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function roverLeft(rover) { 
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'N'
      break;
  };
  console.log("New Rover Direction: Facing " + rover.direction )
}

function roverRight(rover) { 
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  };
  console.log("New Rover Direction: Facing " + rover.direction )
}





// read the array and call the corresponding functions:

function roverOrder(rover, order) { 
		for (i=0 ; i< order.length; i++){
			switch(order[i]){
				case 'f':
					goForward(rover);
					break;
				case 'b':
					goBack(rover);
					break;
				case 'l':
					roverLeft(rover);
					break;
				case 'r':
					roverRight(rover);
					break;		
			}
		}
  


 console.log("The Rover reach the Position: [" + rover.position[0] + ", " + rover.position[1] + "], Facing " + rover.direction )


}



rovermove = 'fffffffffffffffrfffffffffffffffffrffffffffffffffffffrfffffffffffff'
roverOrder(myRover, rovermove)

