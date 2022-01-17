//select the start quiz button:
// 1.timer begins
// 2.displays first question
var buttonEl = window.document.querySelector(".start");
const timeH = document.querySelector("h3");
let timeSecond = 75;
timeH.innerHTML = timeSecond;

console.dir(buttonEl);
// console.dir(counter);

buttonEl.addEventListener("click", function () {
  const countDown = setInterval(() => {
    timeSecond--;
    timeH.innerHTML = timeSecond;
    if (timeSecond <= 0 || timeSecond < 1) {
      clearInterval(countDown);
    }
  }, 1000);
});

//Commonly used data types DO Not inlude:
//1. strings
//2. booleans
//3. alerts
//4. numbers

//The condition in an if/else statement is enclosed with____.
//1. quotes
//2. curly brackets
//3. parenthesis
//4. square brackets

//Arrays in JavaScript can be used to store____.
//1. numbers and strings
//2. other arrays
//3. booleans
//4. all of the above

//A very useful tool used during development and debugging for printing content to the debugger is:
//1. JaveScript
//2. terminal/bash
//3. for loops
//4. console.log

//String values must be envlosed within _____ when being assigned to variables.
//1. commas
//2. curly brackets
//3. quotes
//4. parenthesis

//All Done!
//Your final score is
//Enter initials
