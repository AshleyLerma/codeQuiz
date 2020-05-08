/*
repeat with up to 10 questions 
when timer hits zero or 10 questions have been answered 
    -h1 Game Over 
    -h2 Your Final Score is *score*

box to submit initials and submit score 
 */

// Variables
var questionEl = document.querySelector("h2");
var quizText = document.querySelector("#quizText");
var answerBtns = document.querySelectorAll(".answerButtons");
var choice1 = document.getElementById("choice0");
var choice2 = document.getElementById("choice1");
var choice3 = document.getElementById("choice2");
var choice4 = document.getElementById("choice3");
var welcomeText = document.getElementById("welcome");
var startQuizBtn = document.getElementById("startQuiz");
var rightOrWrong = document.getElementById("rightOrWrong");

// time variables
var timeEl = document.getElementById("time");
var secondsLeft = 75;
timeEl.textContent = secondsLeft + " seconds left";

var score = 0;
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
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice4",
  },
  // question three
  {
    question: "Question Three",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer3",
  },
  // question four
  {
    question: "Question Four",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice2",
  },
  // question five
  {
    question: "Question Five",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer4",
  },
  // question six
  {
    question: "Question Six",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice2",
  },
  // question seven
  {
    question: "Question Seven",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer3",
  },
  // question eight
  {
    question: "Question Eight",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice1",
  },
  // question nine
  {
    question: "Question Nine",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer2",
  },
  // question ten
  {
    question: "Question Ten",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice4",
  },
];
// Grab question and choices based on index starting at zero
var qIndex = 0;
var thisQuestion = questions[qIndex];

// Hides quiz text on starter screen
quizText.style.display = "none";

// When start button is clicked trigger the startQuiz function
startQuizBtn.addEventListener("click", startQuiz);

// Start Quiz function
function startQuiz() {
  // starts timer
  startTimer();
  //   clears the  h1, p, and start button
  welcomeText.style.display = "none";
  // Shows answer choice buttons
  quizText.style.display = "block";

  nextQuestion();
}

// Start Timer Function
function startTimer() {
  // sets the interval timer
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";
    // if time hits 0 stop
    if (secondsLeft <= 0 || qIndex > questions.length) {
      clearInterval(timerInterval);
      quizText.style.display = "none";
      timeEl.style.display = "none";
    }
  }, 1000);
}

// Function to populate the question
function nextQuestion() {
  // Shows the question
  thisQuestion = questions[qIndex];
  questionEl.textContent = thisQuestion.question;

  // Shows the answer choices
  choice1.textContent = thisQuestion.choices[0];
  choice2.textContent = thisQuestion.choices[1];
  choice3.textContent = thisQuestion.choices[2];
  choice4.textContent = thisQuestion.choices[3];
}
// Sequence to check answer

// Target the user selected button
for (var i = 0; i < answerBtns.length; i++) {
  answerBtns[i].addEventListener("click", function userSelection() {
    // If correct flash green and add point to score
    if (event.currentTarget.textContent === thisQuestion.answer) {
      rightOrWrong.textContent = "Correct!";
      score++;
    }
    // If incorrect flash red and subtract 10 seconds
    else {
      rightOrWrong.textContent = "Incorrect";
      secondsLeft = secondsLeft - 10;
    }
    // Add 1 to index to set up next question
    qIndex++;

    if (qIndex < questions.length && secondsLeft > 0) {
      // Show next question
      nextQuestion();
    } else {
      quizText.style.display = "none";
      timeEl.style.display = "none";
    }
  });
}
