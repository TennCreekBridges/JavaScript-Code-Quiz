// time and score
let timeEl = document.querySelector("p.time");
let secondsLeft = 60;
let scoreEl = document.querySelector("#score");

// welcome message
const welcomeEl = document.querySelector("#welcome");

// quiz section
const questionsEl = document.querySelector("#questions");
// questions populate here
let questionEl = document.querySelector("#question");
// question count
let questionCount = 0;
// display whether response is correct or incorrect
const valid = document.querySelector("#valid");

// quiz complete section
const completeEl = document.querySelector("#complete");
// high score initials
let initialsEl = document.querySelector("#initials");
// high score section
const highScoresEl = document.querySelector("#highscores");
// list of scores
let scoreListEl = document.querySelector("#score-list");
// array of all scores
let scoreList = [];

//buttons
// start
const startBtn = document.querySelector("#start");
// answer button class
const ansBtn = document.querySelectorAll("button.ansBtn");
// answers
const ans1Btn = document.querySelector("#answer1");
const ans2Btn = document.querySelector("#answer2");
const ans3Btn = document.querySelector("#answer3");
const ans4Btn = document.querySelector("#answer4");
// submit score
const submitScrBtn = document.querySelector("#submit-score");
// return
const returnBtn = document.querySelector("#return");
// go back
const backBtn = document.querySelector("#go-back");
// reset scores
const resetBtn = document.querySelector("#reset-scores");
// check scores
const viewBtn = document.querySelector("#view-scores");

const questions = [ 
    { question: "Inside which HTML element do we put the JavaScript?",
      answers: ["a. <javascript>", "b. <script>", "c. <js>", "d. <scripting>"],
      correctAnswer: "1"
      },
    {
      question: "How do you call a function named \"myFunction\"?",
      answers: ["a. call myFunction()", "b. myFunction ()", "c. call function MyFunction()", "d. function MyFunction"],
      correctAnswer: "1"
      },
    {
      question: "How do you write an IF statement in JavaScript?",
      answers: ["a. if i = 5 then", "b. if i => 5 then", "c. if i == 5 then", "d. if (i==5)"],
      correctAnswer: "3"
      },
    {
        question: "Write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        answers: ["a. if i < > 5", "b. if (i < > 5)", "c. if(i != 5)", "d. if i=! 5 then"],
        correctAnswer: "2"
        },
    {
         question: "How does a WHILE loop start?",
         answers: ["a. while i = 1 to 10", "b. while (i <= 10)", "c. while(i <= 10; i++)", "d. while (i++ 10)"],
        correctAnswer:  "3"
        },
    {
        question: "How does a FOR loop start?",
        answers: ["a. for (i = 0; i <= 5; i++)", "b. for (i <= 5; i++)", "c. for (i = 0; i <= 5)", "d. for i = 1 to 5"],
        correctAnswer: "0"
        },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: ["a. var colors = (1:\"red\", 2:\"green\", 3:\"blue\")", "b. var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")", "c. var colors = \"red\", \"green\", \"blue\"", "d. var colors=[\"red\", \"green\", \"blue\""],
        correctAnswer: "3"
        },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        answers: ["a. rnd(7.25)", "b. round(7.25)", "c. Math.rnd(7.25)", "d. Math.round(7.25)"],
        correctAnswer: "3"
        },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: ["a. Math.ceil(x,y)", "b. top(x,y)", "c. ceil(x,y)", "d. Math.max(x,y)"],
        correctAnswer: "3"
    },
    {
        question: "How can you detect the client's browser name?",
        answers: ["a. client.navName", "b. browser.name", "c. navigator.appName", "d. which.browser"],
        correctAnswer: "2"
        },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: ["a. onmouseover", "b. onclick", "c. onmouseclick", "d. onchange"],
        correctAnswer: "2"
        },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: ["a. x", "b. =", "c. *", "d. -"],
        correctAnswer: "1"
        },
    {
        question: "What is the following code return: Boolean(10 > 9)",
        answers: ["a. true", "b. false", "c. NaN", "d. undefined"],
        correctAnswer: "0"
        },
]

// functions
// begin quiz timer
function setTime() {
  let timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = `Time:${secondsLeft}s`;

      if (secondsLeft <= 0 || questionCount === questions.length) {
          clearInterval(timerInterval);
          questionsEl.style.display = "none";
          completeEl.style.display = "block";
          scoreEl.textContent = secondsLeft;
      }
  }, 1000);
}

function startQuiz() {
  welcomeEl.style.display = "none";
  questionsEl.style.display = "block";
  questionCount = 0;
  setTime();
  setQuestions(questionCount);
}

// place questions, take count and display next
function setQuestions(id) {
  if (id < questions.length) {
    questionEl.textContent = questions[id].question;
    ans1Btn.textContent = questions[id].answers[0];
    ans2Btn.textContent = questions[id].answers[1];
    ans3Btn.textContent = questions[id].answers[2];
    ans4Btn.textContent = questions[id].answers[3];
  }
}

// check answer and move to next question
function checkAnswer(event) {
  event.preventDefault();
  valid.style.display = "block";
  let p = document.createElement("p");
  valid.appendChild(p);

  // remove message after one second
  setTimeout(function () {
    p.style.display = "none";
  }, 1500);

  if (questions[questionCount].correctAnswer === event.target.value) {
    p.textContent = "Correct!";
  } else if (questions[questionCount].correctAnswer !== event.target.value) {
    secondsLeft = secondsLeft - 10;
    p.textContent = "Incorrect. 10 Seconds Deducted."
  }

  if (questionCount < questions.length) {
    questionCount++;
  }

  setQuestions(questionCount);
}

function addScore(event) {
  event.preventDefault();
  completeEl.style.display = "none";
  highScoresEl.style.display = "block";
  let init = initialsEl.value.toUpperCase();
  scoreList.push({initials: init, score: secondsLeft});

  // put scores in order
  scoreList = scoreList.sort((a, b) => {
    if (a.score < b.score) {
      return 1;
    } else {
      return -1;
    }
  });

  scoreListEl.innerHTML="";
  for (let i=0; i < scoreList.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
    scoreListEl.append(li);
  }

  // send to local storage
  storeScores();
  displayScores();
}

function storeScores() {
  localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

// get stored scores from local storage & parse string to an object
function displayScores() {
  let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));
  // uupdate score list array
  if (storedScoreList !== null) {
    scoreList = storedScoreList;
  }
}

// reset scores
function clearScores() {
  localStorage.clear();
  scoreListEl.innerHTML="";
}

// event listeners
// start timer & show first question
startBtn.addEventListener("click", startQuiz);

// check answers
ansBtn.forEach(item => {
  item.addEventListener("click", checkAnswer);
});

// reset scores
resetBtn.addEventListener("click", clearScores);

// add score
submitScrBtn.addEventListener("click", addScore);

// go back
backBtn.addEventListener("click", function () {
  highScoresEl.style.display = "none";
  welcomeEl.style.display = "block";
  secondsLeft = 60;
  timeEl.textContent = `Time:${secondsLeft}s`;
});

// view & hide high scores button
viewBtn.addEventListener("click", function () {
  if (highScoresEl.style.display === "none") {
    highScoresEl.style.display = "block";
  } else if (highScoresEl.style.display === "block") {
    highScoresEl.style.display = "none";
  } else {
    return alert("No high scores yet.");
  }
});

