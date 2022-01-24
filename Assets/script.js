var startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-Btn");
const questionContainerEl = document.getElementById("question-container");
var timeH = window.document.querySelector("h3");

const questionEl = document.getElementById("question");
const answerButtonsEl = document.querySelector("button.btn");

let timeSecond = 75;
timeH.innerHTML = timeSecond;

let shuffledQuestions, currentQuestionIndex;

function startGame() {
  startButton.classList.add("hide");
  document.getElementById("info").style.display = "none";
  questionContainerEl.classList.remove("hide");

  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;

  const countDown = setInterval(() => {
    timeSecond--;
    timeH.innerHTML = timeSecond;
    if (timeSecond <= 0 || timeSecond < 1) {
      clearInterval(countDown);
    }
  }, 1000);
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innterText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsEl.children).forEach((button) => {});
}

const questions = [
  {
    question: "Commonly used data types DO Not inlude:",
    answers: [
      { text: "Strings", correct: false },
      { text: "Booleans", correct: false },
      { text: "Alerts", correct: true },
      { text: "Numbers", correct: false },
    ],
  },
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
];

startButton.addEventListener("click", startGame);
