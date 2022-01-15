  // select countdown container
  const countContainer = document.getElementById("countdown-number");
  
  // select action buttons
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const resetButton = document.getElementById("reset");
  
  // select timeout Audio element
  const timeoutAudio = document.getElementById("timeout_audio");
  
  // variable to store count
  var remainingTime = 240;
  
  // variable to store time interval
  var timer;
  
  // variable to track whether timer is running or not
  var isStopped = true;
  
  // function to start Timer
  const startTimer = () => {
    if (isStopped) {
      isStopped = false;
      countContainer.innerHTML = remainingTime;
      timer = setInterval(renderTime, 1000);
    }
  };
  
  // function to stop timer
  const stopTimer = () => {
    isStopped = true;
    if (timer) {
      clearInterval(timer);
    }
  };
  
  // function to reset timer
  const resetTimer = () => {
    isStopped = true;
    clearInterval(timer);
    remainingTime = 240;
    countContainer.innerHTML = remainingTime;
  };
  
  // initialize timeout sound
  timeoutAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
  timeoutAudio.load();
  
  // attach onclick event to buttons
  startButton.onclick = startTimer;
  resetButton.onclick = resetTimer;
  stopButton.onclick = stopTimer;
  
  // function to display time
  const renderTime = () => {
    // decement time
    remainingTime -= 1;
    // render count on the screen
    countContainer.innerHTML = remainingTime;
    // timeout on zero
    if (remainingTime === 0) {
      isStopped = true;
      clearInterval(timer);
      // Play audio on timeout
      timeoutAudio.play();
      remainingTime = 240;
    }
  };
  
  var button = document.getElementById('start')
  button.addEventListener('click',hideshow,false);
  
  function hideshow() {
      document.getElementById('welcome-message').style.display = 'block'; 
      this.style.display = 'none'
  };
  

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



