var startQuizEl = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");
var timer =0;
var finalScore = 0;
var buttonEl = document.getElementById("buttons");
var questionEl = document.querySelector ("#question");


timerEl.textContent = "Time Left: " + timer;

startQuizEl.addEventListener("click", function(){
    timerEl.textContent = "Time Left: " + 75;
    questionEl.textContent = "Which of the following is not a primitive data set?";
    startQuizEl.textContent ="string"
   
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");

   
    button2.textContent = "boolean";
    button3.textContent = "number";
    button4.textContent = "object";

   
    buttonEl.appendChild(button2)
    buttonEl.appendChild(button3)
    buttonEl.appendChild(button4)

    //use askbcs
} )


