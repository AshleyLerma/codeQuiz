/*
when answer button is selected 
    -screen background color will flash red if wrong or green if correct for 1 second 
    -if answer is correct +1 point to score 
    -if answer is wrong -10seconds from remaining time 

repeat with up to 10 questions 
when timer hits zero or 10 questions have been answered 
    -h1 Game Over 
    -h2 Your Final Score is *score*

box to submit initials and submit score 
 */
var questionEl = document.querySelector("h2");
var answerBtns = document.querySelector(".answerButtons");
var choice1 = document.getElementById("choice0");
var choice2 = document.getElementById("choice1");
var choice3 = document.getElementById("choice2");
var choice4 = document.getElementById("choice3");
var welcomeText = document.getElementById("welcome");
var timeEl = document.getElementById("time");
var startQuizBtn = document.getElementById("startQuiz");

var secondsLeft = 75;
var questions = [
  // question one
  {
    question: "Question One",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: 1,
  },
  // question two
  {
    question: "Question Two",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: 2,
  },
  // question three
  {
    question: "Question Three",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: 0,
  },
];

answerBtns.style.display = "none";

function startQuiz() {
  // sets the interval timer
  var timerInterval = setInterval(function () {
    secondsLeft = secondsLeft - 1;
    timeEl.textContent = secondsLeft + " seconds left";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
  //   clears the  h1, p, and start button
  welcomeText.style.display = "none";
  questionEl.textContent = questions[0].question;
  answerBtns.style.display = "block";
  choice1.textContent = questions[0].choices[0];
  choice2.textContent = questions[0].choices[1];
  choice3.textContent = questions[0].choices[2];
  choice4.textContent = questions[0].choices[3];
}

startQuizBtn.addEventListener("click", startQuiz);
