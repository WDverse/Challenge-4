var startQuizEl = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");
var timer =0;
var finalScore = 0;
var buttonEl = document.getElementById("buttons");
var questionEl = document.querySelector ("#question");
var currentQuestion = 0;


timerEl.textContent = "Time Left: " + timer;

startQuizEl.addEventListener("click", function(){
    // timerEl.textContent = "Time Left: " + 75;
    var questions = [
        {
          title: 'Commonly used data types DO NOT include:',
          choices: ['strings', 'booleans', 'alerts', 'numbers'],
          answer: 'alerts',
        },

        {
          title: 'The condition in an if / else statement is enclosed within ____.',
          choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
          answer: 'parentheses',
        },
        {
          title: 'Which of the following is not a primitive data set?',
          choices: ['boolean', 'number', 'object', 'string'],
          answer: 'string',
        },
    ]
    ;

    for (var i = 0; i < questions[0].choices.length; i++) {
        var buttonEl =  document.createElement('button');
        var choice = questions[0].choices[i];
        buttonEl.textContent = choice;
    } 
    
});
    
    // questionEl.textContent = "Which of the following is not a primitive data set?";
    // startQuizEl.textContent ="string"
   
    // var button2 = document.createElement("button");
    // var button3 = document.createElement("button");
    // var button4 = document.createElement("button");

   
    // button2.textContent = "boolean";
    // button3.textContent = "number";
    // button4.textContent = "object";

   
    // buttonEl.appendChild(button2)
    // buttonEl.appendChild(button3)
    // buttonEl.appendChild(button4)

