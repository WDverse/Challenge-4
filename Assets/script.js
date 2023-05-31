var startQuizEl = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");
var timer = 75;
var finalScore = 0;
var buttonEl = document.getElementById("buttons");
var questionEl = document.querySelector("#question");
var instrucionsEl = document.querySelector("#instructions");
var headingEl = document.querySelector("#heading");
var quizEl = document.querySelector("#quiz-screen");
var resultsEl = document.querySelector("#results");


//Adds a click event listener to the "Start Quiz" button
startQuizEl.addEventListener("click", startQuiz)

// Sets an object with properties containing questions, choices, and the answers
var questions = [

    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['1. alerts', '2. strings', '3. booleans', '4. numbers'],
        answer: '1. alerts',
    },

    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['1. quotes', '2. curly brackets', '3. parentheses', '4. square brackets'],
        answer: '3. parentheses',
    },

    {
        title: 'Which of the following is not a primitive data set?',
        choices: ['1. boolean', '2. object', '3. number', '4. string'],
        answer: '2. object',
    },

    {
        title: 'Which of the following is used when invoking a function?',
        choices: ['1. quotes', '2. curly brackets', '3. square brackets', '4. parentheses'],
        answer: '4. parentheses',
    },

    {
        title: 'Complex data types include:',
        choices: ['1. arrays', '2. strings', '3. booleans', '4. numbers'],
        answer: '1. arrays',
    },
];
// Declares a variable called index 
var index = 0
function checkQuestion(event){
    console.log(event.target);
    var currentQuestion = questions[index]
    
        if(event.target.textContent === currentQuestion.answer){
            resultsEl.textContent = "Correct!";
        }
        if(event.target.textContent !== currentQuestion.answer){
            resultsEl.textContent = "Wrong!";
            timer = timer - 10;
            timerEl.textContent = "Time Left: " + timer;
        }
    
    index++;
    nextQuestion();
}
// Displays new quetion when a button is clicked
function nextQuestion() {
    questionEl.textContent = questions[index].title;
    var previousButtons = document.querySelectorAll(".option")
    if (previousButtons) {
        for (var i = 0; i < previousButtons.length; i++) {
            previousButtons[i].style = "display: none";
        }
    }
    buttonEl.innerHTML = '';
    // Displays new buttons with possible answers when a button is clicked
    for (var i = 0; i < questions[index].choices.length; i++) {
        var newButtonEl = document.createElement('button');
        var choice = questions[index].choices[i];
        newButtonEl.textContent = choice;
        newButtonEl.classList.add("option")
        buttonEl.appendChild(newButtonEl)
        newButtonEl.addEventListener("click", checkQuestion)
    }

}

function startQuiz() {
    timerEl.textContent = "Time Left: " + timer;
    nextQuestion();
    startQuizEl.setAttribute("style", "display: none");
    instrucionsEl.setAttribute("style", "display: none");

    var timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = "Time Left: " + timer;

        if (timer <= 0) {
            clearInterval(timerInterval);

            //Handles time's up scenario
            timerEl.textContent = "";
            quizEl.setAttribute("style", "display: none");
            headingEl.textContent = "All done!";
            var initialsEl = document.createElement("p");
            initialsEl.textContent = "Enter your initials";
            headingEl.appendChild(initialsEl);
            var inputEl = document.createElement("input");
            headingEl.appendChild(inputEl);
        }
    }, 1000);
}







