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
const ans4Btn = document.querySelector("answer4");
// submit score
const submitScrBtn = document.querySelector("#submit-score");
// return
const returnBtn = document.querySelector("#return");
// reset scores
const resetBtn = document.querySelector("#resetscores");
// check scores
const viewBtn = document.querySelector("#view-scores");

const questions = [ 
    { question: "Inside which HTML element do we put the JavaScript?",
      answers: ["a. <javascript>", "b. <script>", "c. <js>", "d. <scripting>"],
      correct: 1,
      },
    {
      question: "Where is the correct place to insert JavaScript?",
      answers: ["a. the <head> section", "b. the <body> section", "c. both the <head> section and <body> section are correct"],
      correct: 2,
      },
    {
      question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
      answers: ["a. <script name=\"xxx.js\">", "b. <script href=\"xxx.js\">", "c. <script src=\"xxx.js\""],
      correct: 2,
      },
    {
      question: "How do you call a function named \"myFunction\"?",
      answers: ["a. call myFunction()", "b. myFunction ()", "c. call function MyFunction()"],
      correct: 1,
      },
    {
      question: "How do you write an IF statement in JavaScript?",
      answers: ["a. if i = 5 then", "b. if i = 5 then", "c. if i == 5 then", "d. if (i==5)"],
      correct: 3,
      },
    {
        question: "Write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        answers: ["a. if i < > 5", "b. if (i < > 5)", "c. if(i != 5)", "d. if i=! 5 then"],
        correct: 2,
        },
    {
         question: "How does a WHILE loop start?",
         answers: ["a. while i = 1 to 10", "b. while (i <= 10)", "c. while(i <= 10; i++)"],
        correct:  1,
        },
    {
        question: "How does a FOR loop start?",
        answers: ["a. for (i = 0; i <= 5; i++)", "b. for (i <= 5; i++)", "c. for (i = 0; i <= 5)", "d. for i = 1 to 5"],
        correct: 0,
        },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: ["a. var colors = (1:\"red\", 2:\"green\", 3:\"blue\")", "b. var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")", "c. var colors = \"red\", \"green\", \"blue\"", "d. var colors=[\"red\", \"green\", \"blue\""],
        correct: 3,
        },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        answers: ["a. rnd(7.25)", "b. round(7.25)", "c. Math.rnd(7.25)", "d. Math.round(7.25)"],
        correct: 3,
        },
    {
        question: "How do you find the nuber with the highest value of x and y?",
        answers: ["a. Math.ceil(x,y)", "b. top(x,y)", "c. ceil(x,y)", "d. Math.max(x,y)"],
        correct: 3,
        },
    {
        question: "JavaScript is the same as Java.",
        answers: ["a. True", "b. False"],
        correct: 1,
        },
    {
        question: "How can you detect the client's browser name?",
        answers: ["a. client.navName", "b. browser.name", "c. navigator.appName"],
        correct: 2,
        },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: ["a. onmouseover", "b. onclick", "c. onmouseclick", "d. onchange"],
        correct: 2,
        },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: ["a. x", "b. =", "c. *", "d. -"],
        correct: 1,
        },
    {
        question: "What is the following code return: Boolean(10 > 9)",
        answers: ["a. true", "b. false", "c. NaN"],
            correct: 0,
        },
    {
        question: "Is JavaScript case-sensitive?",
        answers: ["a. Yes", "b. No"],
        correct: 0,
        },
]



