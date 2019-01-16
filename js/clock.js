/*
* @Author: Charlie Gallentine
* @Date:   2018-10-05 15:34:33
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2018-11-09 10:54:41
*/

const year = new Date().getYear() + 1900;
const month = new Date().getMonth();
const day = new Date().getDate();

console.log(year);
console.log(month);
console.log(day);

const eventStartTime = 8;
const eventEndTime = 20;
const eventStartMinutes = 0;
const eventEndMinutes = 0;

// var startTime = (new Date(year, month, day, eventStartTime)).getTime();
// var endTime = (new Date(year, month, day, eventEndTime)).getTime();

console.log(new Date(year, month, day, eventStartTime, eventStartMinutes));
console.log(new Date(year, month, day, eventEndTime, eventEndMinutes));

/*
  Gets the number of milliseconds since 1/1/1970

  Return: integer, milliseconds since the epoch
 */
function currentTime() {
  return (new Date()).getTime();
}

/*
  Gets the number of milliseconds since 1/1/1970

  Return: integer, milliseconds since the epoch
 */
function startTime() {
  return (new Date(year, month, day, eventStartTime)).getTime();
}

/*
  Gets the number of milliseconds since 1/1/1970

  Return: integer, milliseconds since the epoch
 */
function endTime() {
  return (new Date(year, month, day, eventEndTime)).getTime();
}



// Object containing boolean key:value pairs concerning event progress
var progress = {
    before: function () {
      return currentTime() < startTime();
    },
    during: function () {
      return startTime() <= currentTime() && currentTime() < endTime();
    },
    after: function () {
      return endTime() <= currentTime();
    }
};

console.log(startTime());
console.log(currentTime());
console.log(endTime());

// Log the current relation to the event
if (progress.before()) {
  console.log("The event has not started");
}
else if (progress.during()) {
  console.log("The event is in progress");
}
else if (progress.after()) {
  console.log("The event is over");
}
else {
  console.log("How did you get out of all time?");
}


// Canvas access
//   ID clock found in index.html along with width/height data
var c = document.getElementById("clock"),
    ctx = c.getContext("2d"),
    width = c.width,
    height = c.height;

// Colors
var gridLineColor = "#FFF";

/*
  This gradient is present where the top of the canvas is lighter than the bottom
    Changes based on current state of competition, i.e. before/during/after

  Return: gridTextGradient object, defines start/end colors for a linear 
    gradient on the canvas
  Params: None, does get information from progress object
 */
function getCurrentGradient() {
  var gridTextGradient = ctx.createLinearGradient(0,0,0,height);
  if (progress.before()) {
  	gridTextGradient.addColorStop(0, "#0016ff"); // old color here!
  	gridTextGradient.addColorStop(1, "#01a"); // make this a darker one!
  }
  else if (progress.during()) {
  	gridTextGradient.addColorStop(0, "#FDB92E"); // old color here!
  	gridTextGradient.addColorStop(1, "#FDB92E"); // make this a darker one!
  }
  else {
  	gridTextGradient.addColorStop(0, "#FDB92E"); // old color here!
  	gridTextGradient.addColorStop(1, "#FDB92E"); // make this a darker one!
  }

  return gridTextGradient;
}


// First object controls the number/size of each digit
// Blank spaces between digits/sides
function get_digit()
{
  var digit;
  if (progress.during())
  {
    digit = { count: 6, pairs: 3, width: 3, height: 5 };
  }
  else
  {
    digit = { count: 8, pairs: 4, width: 3, height: 5 };
  }
  return digit;
}
digit = get_digit();

function get_space()
{
  var space;
  if (progress.during())
  {
    space = { sides: 0, topBottom: 0, inBetweenPairs: 3, inBetweenDigits: 1 };
  }
  else
  {
    space = { sides: 0, topBottom: 1, inBetweenPairs: 2, inBetweenDigits: 1 };
  }
  return space;
}
space = get_space();

// Set height of canvas grid in rows
var rows = space.topBottom * 2 + digit.height;
// Set width of canvas grid in columns

var columns;
function get_columns()
{
  var columns;
  if (progress.during())
  {
    columns = 27;
  }
  else if (progress.before())
  {
    columns = space.sides * 2
      + digit.count * digit.width // added size by digits
      + (digit.pairs - 1) * space.inBetweenPairs // space between individual pairs of numbers
      + digit.pairs * space.inBetweenDigits; // space between numbers in pair
  }
  else
  {
    columns = 43;
  }
  return columns;
}
  
// Set columns for page load
columns = get_columns();

// grid state [y, x] for consistency
var grid = [], y, x;
for (y = 0; y < rows; y++) {
    grid.push([]);

    for (x = 0; x < columns; x++) {
      grid[y].push(0);
    }
}


/* getDigitPosition()
 * returns [y, x] digit position
 *
 *  Return: int array, the [y, x] coordinate of a digit on the canvas grid
 *  Param1: position of the digit in clock i.e 01:23:45:67 || dd:hh:mm:ss
 */
function getDigitPosition(d) {
    const y = space.topBottom;
    const x = space.sides
	  + Math.floor(d / 2) * (digit.width * 2 + space.inBetweenPairs + space.inBetweenDigits)
	  + (d % 2) * (digit.width + space.inBetweenDigits);

    return [y, x];
}


function getCanvasCoords(y, x) {
    return [Math.floor(y * height / rows), Math.floor(x * width / columns)];
}
/*
 * All numbers return x, y offsets
 */
const G = 1, _ = 0;
const zero =
      [
    	  [G, G, G],
    	  [G, _, G],
    	  [G, _, G],
    	  [G, _, G],
    	  [G, G, G]
      ],
      one =
      [
    	  [_, G, _],
    	  [G, G, _],
    	  [_, G, _],
    	  [_, G, _],
    	  [G, G, G]
      ],
      two =
      [
    	  [G, G, G],
    	  [_, _, G],
    	  [G, G, G],
    	  [G, _, _],
    	  [G, G, G]
      ],
      three =
      [
    	  [G, G, G],
    	  [_, _, G],
    	  [G, G, G],
    	  [_, _, G],
    	  [G, G, G]
      ],
      four =
      [
    	  [G, _, G],
    	  [G, _, G],
    	  [G, G, G],
    	  [_, _, G],
    	  [_, _, G]
      ],
      five =
      [
    	  [G, G, G],
    	  [G, _, _],
    	  [G, G, G],
    	  [_, _, G],
    	  [G, G, G]
      ],
      six =
      [
    	  [G, G, G],
    	  [G, _, _],
    	  [G, G, G],
    	  [G, _, G],
    	  [G, G, G]
      ],
      seven =
      [
    	  [G, G, G],
    	  [_, _, G],
    	  [_, _, G],
    	  [_, _, G],
    	  [_, _, G]
      ],
      eight =
      [
    	  [G, G, G],
    	  [G, _, G],
    	  [G, G, G],
    	  [G, _, G],
    	  [G, G, G]
      ],
      nine =
      [
    	  [G, G, G],
    	  [G, _, G],
    	  [G, G, G],
    	  [_, _, G],
    	  [_, _, G]
      ];

const digits = [zero, one, two, three, four, five, six, seven, eight, nine];

/*
  Returns the difference between start time if before and current time in seconds
    or the amount of time before the end of the event if the event has started

    Return: integer, Time in seconds
 */
function secondsLeft() {
    if (progress.before()) {
      return Math.floor((startTime() -  currentTime()) / 1000);
    }
    else if (progress.during()) {
      return Math.floor((endTime() - currentTime()) / 1000);
    }
    else {
      throw new Error("This shouldn't be happening!!!");
    }
}



/*
 * returns whether the was a change in the grid
 */
function writeDigitAt(number, numberPos) {
    const base = getDigitPosition(numberPos);
    const numberSpec = digits[number];
    var wasChange = false;

    for (y = 0; y < digit.height; y++) {
      for (x = 0; x < digit.width; x++) {
          if (grid[base[0] + y][base[1] + x] === numberSpec[y][x]) { continue; }
          grid[base[0] + y][base[1] + x] = numberSpec[y][x];
          wasChange = true;
      }
    }
    return wasChange;
}


function logGrid() {
    var gridToText = "";
    for (y = 0; y < grid.length; y++) {
      for (x = 0; x < grid[y].length; x++) {
        gridToText += (grid[y][x] == 0 ? '_' : 'G');
      }
      gridToText += "\n";
    }
    console.log(gridToText);
}

function updateGrid() {
  var clockTime = secondsLeft();
  var seconds = clockTime % 60;
  clockTime = Math.floor(clockTime / 60);
  var minutes = clockTime % 60;
  clockTime = Math.floor(clockTime / 60);
  var hours = clockTime % 24;
  clockTime = Math.floor(clockTime / 24);
  var days = clockTime;

  var wasChange;
  if (!progress.during())
  {
    wasChange = writeDigitAt(Math.floor(days / 10), 0);
    wasChange = writeDigitAt(days % 10, 1) || wasChange;

    wasChange = writeDigitAt(Math.floor(hours / 10), 2) || wasChange;
    wasChange = writeDigitAt(hours % 10, 3) || wasChange;

    wasChange = writeDigitAt(Math.floor(minutes / 10), 4) || wasChange;
    wasChange = writeDigitAt(minutes % 10, 5) || wasChange;

    wasChange = writeDigitAt(Math.floor(seconds / 10), 6) || wasChange;
    wasChange = writeDigitAt(seconds % 10, 7) || wasChange;
  }
  else
  {
    wasChange = writeDigitAt(Math.floor(hours / 10), 0) || wasChange;
    wasChange = writeDigitAt(hours % 10, 1) || wasChange;

    wasChange = writeDigitAt(Math.floor(minutes / 10), 2) || wasChange;
    wasChange = writeDigitAt(minutes % 10, 3) || wasChange;

    wasChange = writeDigitAt(Math.floor(seconds / 10), 4) || wasChange;
    wasChange = writeDigitAt(seconds % 10, 5) || wasChange;
  }

//    logGrid();
    return wasChange;
}

const boxWidth = getCanvasCoords(1,1)[1];
const boxHeight = getCanvasCoords(1,1)[0];
function drawBox(y, x) {
    const topLeft = getCanvasCoords(y, x);
    ctx.beginPath();
    ctx.rect(topLeft[1]+0.5, topLeft[0]+0.5, boxWidth+0.5, boxHeight+0.5);
    ctx.fill();
}

function drawNumbers() {
  // draw the boxes
  for (y = 0; y < rows; y++) {
    for (x = 0; x < columns; x++) {
      if (grid[y][x] == 1) {
        ctx.fillStyle = getCurrentGradient();
        drawBox(y, x);
      }
    }
  }
  drawGrid();
}

function drawGrid() {
    ctx.strokeStyle = gridLineColor;
    ctx.lineWidth = 1;
    // draw the grid
    for (y = 1; y < rows; y++) {
    	var lineY = getCanvasCoords(y, 0)[0];
    	ctx.beginPath();
    	ctx.moveTo(-9.5, lineY+0.5);
    	ctx.lineTo(width + 10.5, lineY+0.5);
    	ctx.stroke();
    }
    for (x = 1; x < columns; x++) {
    	var lineX = getCanvasCoords(0, x)[1];
    	ctx.beginPath();
    	ctx.moveTo(lineX+0.5, -9.5);
    	ctx.lineTo(lineX+0.5, height+10.5);
    	ctx.stroke();
    }


}


// Event Has Ended!
// var eventOver = [
//     [G,_,_,G,_,_,G,G,_,_,_,G,G,_,G,_,G,_,_,G,G,G,_,_,_,G,G,_,_,G,_,_,G,_,G,G,G,_,G],
//     [G,_,_,G,_,G,_,_,G,_,G,_,_,_,G,_,G,_,_,G,_,_,G,_,G,_,_,G,_,G,G,_,G,_,G,_,_,_,G],
//     [G,G,G,G,_,G,G,G,G,_,G,_,_,_,G,G,_,_,_,G,_,_,G,_,G,_,_,G,_,G,G,G,G,_,G,G,G,_,G],
//     [G,_,_,G,_,G,_,_,G,_,G,_,_,_,G,_,G,_,_,G,_,_,G,_,G,_,_,G,_,G,_,G,G,_,G,_,_,_,_],
//     [G,_,_,G,_,G,_,_,G,_,_,G,G,_,G,_,G,_,_,G,G,G,_,_,_,G,G,_,_,G,_,_,G,_,G,G,G,_,G]
// ];

var eventOver = [
    [G,G,G,_,_,G,_,_,G,_,G,G,G,G,_,_,G,_,G,_,G,_,_,G,G,_,_,G,G,G,G,_,G,_,_,_,_,G,G,G,_,_,G],
    [G,_,_,G,_,G,_,_,G,_,G,_,_,_,_,_,G,_,G,_,G,_,G,_,_,G,_,G,_,_,G,_,G,_,_,_,_,G,_,G,G,_,G],
    [G,G,G,_,_,G,G,G,G,_,G,G,G,G,_,_,G,_,G,_,G,_,G,_,_,G,_,G,G,G,_,_,G,_,_,_,_,G,_,_,G,_,G],
    [G,_,_,G,_,_,_,_,G,_,G,_,_,_,_,_,G,_,G,_,G,_,G,_,_,G,_,G,_,G,G,_,G,_,_,_,_,G,_,G,G,_,_],
    [G,G,G,_,_,G,G,G,G,_,G,G,G,G,_,_,G,G,G,G,G,_,_,G,G,_,_,G,_,_,G,_,G,G,G,G,_,G,G,G,_,_,G]
];


function staticDrawEnd() {
    var rowStart = Math.floor(Math.max(0, rows/2) - eventOver.length/2),
        colStart = Math.floor(Math.max(0, columns/2) - eventOver[0].length/2);

    ctx.fillStyle = getCurrentGradient();
    for (y = 0; y < eventOver.length; y++) {
    	for (x = 0; x < eventOver[0].length; x++) {
  	    if (eventOver[y][x]) {
  		    drawBox(y+rowStart,x+colStart);
  	    }
    	}
    }

    drawGrid();

    $(".time-label").hide();
}














