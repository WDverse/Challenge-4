var startQuizEl = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");
var timer = "";
var finalScore = 0;
var buttonEl = document.getElementById("buttons");
var questionEl = document.querySelector ("#question");

function beginQuiz (){
    timerEl.textContent = "Time Left: " + timer;
}


startQuizEl.addEventListener("click", function(){
    timer.textContent = "Time Left: " + 75;
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
} )


