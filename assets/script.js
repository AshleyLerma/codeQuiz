// Variables
var answerBtns = document.querySelectorAll(".answerButtons");
var questionEl = document.getElementById("question");
var choice1 = document.getElementById("choice0");
var choice2 = document.getElementById("choice1");
var choice3 = document.getElementById("choice2");
var choice4 = document.getElementById("choice3");
var welcomeText = document.getElementById("welcome");
var quizText = document.getElementById("quizText");
var allDone = document.getElementById("allDone");
var startQuizBtn = document.getElementById("startQuiz");
var rightOrWrong = document.getElementById("rightOrWrong");
var retakeBtn = document.getElementById("takeAgain");
var clearScoresBtn = document.getElementById("clearScores");

// score variables
var scoreEl = document.getElementById("finalScore");
var score = 0;
var saveScoreBtn = document.getElementById("saveScore");
var userNameInput = document.getElementById("userNameInput");
var currentList = document.getElementById("currentList");
var highScores = [];

// time variables
var timeEl = document.getElementById("time");
var secondsLeft = 75;
timeEl.textContent = secondsLeft + " seconds left";

// All questions, choices and answers
var questions = [
  // question one
  {
    question: "Who does Michael hit with his car?",
    choices: ["Meredith", "Kelly", "Jim", "Angela"],
    answer: "Meredith",
  },
  // question two
  {
    question: "What movie does Jim think shouldn't be a desert island movie?",
    choices: [
      "Bring it On",
      "Harry Potter",
      "The Divinci Code",
      "Legally Blonde",
    ],
    answer: "Legally Blonde",
  },
  // question three
  {
    question: "Who does Dwight bring to the Dinner Party?",
    choices: ["his wife", "his cousin", "his old babysitter", "no one"],
    answer: "his old babysitter",
  },
  // question four
  {
    question: "Where does Jim propose to Pam?",
    choices: [
      "the roof of Dunder Mifflin",
      "a rest stop",
      "the parking lot",
      "he doesn't propose",
    ],
    answer: "a rest stop",
  },
  // question five
  {
    question: "How long were Pam and Roy engaged?",
    choices: ["6 months", "1 year", "8 weeks", "3 years"],
    answer: "3 years",
  },
  // question six
  {
    question: "What do they sell at Dunder Mifflin?",
    choices: ["water coolers", "paper", "computers", "toys"],
    answer: "paper",
  },
  // question seven
  {
    question: "What kind of pet does Angela have several of?",
    choices: ["horses", "dogs", "cats", "mice"],
    answer: "cats",
  },
  // question eight
  {
    question: "Where did Andy go to college?",
    choices: ["Cornell", "Harvard", "University of Texas", "Princeton"],
    answer: "Cornell",
  },
  // question nine
  {
    question: "What department does Toby work in?",
    choices: ["Accounting", "HR", "Sales", "Reception"],
    answer: "HR",
  },
  // question ten
  {
    question: "What is Dwight's title?",
    choices: [
      "Assistant Regional Manager",
      "Front Office Manager",
      "Big Boss",
      "Assistant to the Regional Manager",
    ],
    answer: "Assistant to the Regional Manager",
  },
];

// Grab question and choices based on index starting at zero
var qIndex = 0;
var thisQuestion = questions[qIndex];

// Hides quiz text on starter screen
quizText.style.display = "none";
allDone.style.display = "none";

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
      allDone.style.display = "block";
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

// Target the user selected button/check answer

// Adds event listener to each answe choice button
for (var i = 0; i < answerBtns.length; i++) {
  answerBtns[i].addEventListener("click", function userSelection() {
    // If correct say so and add point to score
    if (event.currentTarget.textContent === thisQuestion.answer) {
      rightOrWrong.textContent = "Correct!";
      score++;
    }
    // If incorrect say incorrect and subtract 10 seconds
    else {
      rightOrWrong.textContent = "Incorrect";
      secondsLeft = secondsLeft - 10;
    }
    scoreEl.textContent = "Your final score is: " + score;

    // Add 1 to index to set up next question
    qIndex++;

    if (qIndex < questions.length && secondsLeft > 0) {
      // Show next question
      nextQuestion();
    } else {
      quizText.style.display = "none";
      timeEl.style.display = "none";
      allDone.style.display = "block";
    }
  });
}

// ALL HIGHSCORE FUNCTIONS

// save high score
saveScoreBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var userName = score + " - " + userNameInput.value.trim();

  var pastNames = JSON.parse(localStorage.getItem("highScores"));
  if (pastNames !== null) {
    highScores = pastNames;
  }

  // Add current score to highScores Array
  highScores.push(userName);

  // Add highScores to local storage as a JSON array
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // Clear the input value
  userNameInput.value = "";
  userNameInput.readOnly = true;

  getHighScores();
});

// Retrieve past scores from local storage
function getHighScores() {
  var storedNames = JSON.parse(localStorage.getItem("highScores"));
  if (storedNames !== null) {
    highScores = storedNames;
  }
  renderHighScores();
}

// Post highscore names to screen
function renderHighScores() {
  currentList.innerHTML = "";
  for (var hsIndex = 0; hsIndex < highScores.length; hsIndex++) {
    var highScore = highScores[hsIndex];

    var li = document.createElement("li");
    li.textContent = highScore;
    currentList.appendChild(li);
  }
}

// Clears scores
clearScoresBtn.addEventListener("click", clearYourScores);

function clearYourScores() {
  // removes from local storage
  localStorage.clear();
  // removes current list
  currentList.style.display = "none";
}

// Takes you back to welcome page
retakeBtn.addEventListener("click", retakeQuiz);

function retakeQuiz() {
  window.location.reload();
}
