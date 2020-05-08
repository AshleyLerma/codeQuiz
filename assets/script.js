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

// Variables
var questionEl = document.querySelector("h2");
var answerOptions = document.querySelector(".answerOptions");
var answerBtns = document.querySelectorAll(".answerButtons");
var choice1 = document.getElementById("choice0");
var choice2 = document.getElementById("choice1");
var choice3 = document.getElementById("choice2");
var choice4 = document.getElementById("choice3");
var welcomeText = document.getElementById("welcome");
var timeEl = document.getElementById("time");
var startQuizBtn = document.getElementById("startQuiz");

var secondsLeft = 75;
var score = 0;
var qIndex = 0;
var questions = [
  // question one
  {
    question: "Question One",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer1",
  },
  // question two
  {
    question: "Question Two",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer4",
  },
  // question three
  {
    question: "Question Three",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer3",
  },
];
// Populate question and choices
var thisQuestion = questions[qIndex];

// hides buttons on starter screen
answerOptions.style.display = "none";

// When start button is clicked trigger the startQuiz function
startQuizBtn.addEventListener("click", startQuiz);

// Start Quiz function
function startQuiz() {
  // sets the interval timer
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  //   clears the  h1, p, and start button
  welcomeText.style.display = "none";

  // Shows the question
  questionEl.textContent = thisQuestion.question;

  // Shows the answer choices
  answerOptions.style.display = "block";
  choice1.textContent = thisQuestion.choices[0];
  choice2.textContent = thisQuestion.choices[1];
  choice3.textContent = thisQuestion.choices[2];
  choice4.textContent = thisQuestion.choices[3];

  // Check user answer
  checkAnswer();
}

// Check Answer Function
function checkAnswer() {
  // Target the user selected button
  for (var i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener("click", function userSelection() {
      // If correct flash green and add point to score
      if (event.currentTarget.textContent === thisQuestion.answer) {
        document.querySelector("body").style.backgroundColor = "green";
        score++;
      }
      // If incorrect flash red and subtract 10 seconds
      else {
        document.querySelector("body").style.backgroundColor = "red";
        secondsLeft = secondsLeft - 10;
      }
    });
  }
}
