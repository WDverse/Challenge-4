var mainEl = document.getElementById("main");
var startQuizEl = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");
var timer = 75;
var finalScore = 0;
var finalScoreEl = document.getElementById("final-score");
var buttonEl = document.getElementById("buttons");
var questionEl = document.querySelector("#question");
var instrucionsEl = document.querySelector("#instructions");
var headingEl = document.querySelector("#heading");
var quizEl = document.querySelector("#quiz-screen");
var resultsEl = document.querySelector("#results");
var highScoreEl = document.getElementById("highscore");
var timerInterval;
var inputEl;
var submitButtonEl;


//Adds a click event listener to the "Start Quiz" button
startQuizEl.addEventListener("click", startQuiz)


// Sets an object with properties containing questions, choices, and the answers
var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['A. alerts', 'B. strings', 'C. booleans', 'D. numbers'],
        answer: 'A. alerts',
    },

    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['A. quotes', 'B. curly brackets', 'C. parentheses', 'D. square brackets'],
        answer: 'C. parentheses',
    },

    {
        title: 'Which of the following is not a primitive data set?',
        choices: ['A. boolean', 'B. object', 'C. number', 'D. string'],
        answer: 'B. object',
    },

    {
        title: 'Which of the following is used when invoking a function?',
        choices: ['A. quotes', 'B. curly brackets', 'C. square brackets', 'D. parentheses'],
        answer: 'D. parentheses',
    },

    {
        title: 'Complex data types include:',
        choices: ['A. arrays', 'B. strings', 'C. booleans', 'D. numbers'],
        answer: 'A. arrays',
    },
];

//Declares a variable which will select the objects in the "questions" array starting with the first object
var index = 0

//Prints answer results and deducts 10 seconds when answer is wrong
function checkQuestion(event) {
    console.log(event.target);
    var currentQuestion = questions[index]

    //Handles scenario when answer is correct
    if (event.target.textContent === currentQuestion.answer) {
        resultsEl.textContent = "Correct!";
        finalScore += 5;
    }
    //Handles scenario when answer is wrong
    if (event.target.textContent !== currentQuestion.answer) {
        resultsEl.textContent = "Wrong!";
        timer = timer - 10;
        timerEl.textContent = "Time Left: " + timer;
    }
    index++;
    if (index === questions.length) {
        endQuiz();
    }
    nextQuestion();
    resultsTimer();
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
        newButtonEl.classList.add("option");
        buttonEl.appendChild(newButtonEl);
        newButtonEl.addEventListener("click", checkQuestion);
    }

}


//Removes "Start Quiz" button and instuctions when "Start Quiz" is clicked
function startQuiz() {
    timerEl.textContent = "Time Left: " + timer;
    nextQuestion();
    headingEl.textContent = " ";
    startQuizEl.setAttribute("style", "display: none");
    instrucionsEl.setAttribute("style", "display: none");
    highScoreEl.setAttribute("style", "display: none");
    //Starts timer 
    timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = "Time Left: " + timer;
        if (timer <= 0) {
            endQuiz();
        }
    }, 1000);

}


// Displays results for one second when a choice is clicked
function resultsTimer() {
    var resultsTimerInterval = setInterval(function () {
        var displayResultsTimer = 1;
        displayResultsTimer--;
        if (displayResultsTimer <= 0) {
            clearInterval(resultsTimerInterval);
            resultsEl.textContent = " ";
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);

    //Handles scenario when quiz ends
    timerEl.textContent = " ";
    quizEl.setAttribute("style", "display: none");
    headingEl.textContent = "All done!";
    finalScoreEl.textContent = "Your final score is: " + finalScore;
    var saveInitialsDiv = document.createElement("div");
    saveInitialsDiv.classList.add("card");
    var formEl = document.createElement("form");
    var initialsListEl = document.createElement("ul");
    var listEl = document.createElement("li");
    var inputLabel = document.createElement("label");
    inputEl = document.createElement("input");
    submitButtonEl = document.createElement("button");
    submitButtonEl.textContent = "Submit";
    listEl.appendChild(inputLabel);
    listEl.appendChild(inputEl);
    initialsListEl.appendChild(listEl);
    inputLabel.textContent = "Enter your initials";
    formEl.appendChild(initialsListEl);
    formEl.appendChild(submitButtonEl);
    saveInitialsDiv.appendChild(formEl);
    mainEl.appendChild(saveInitialsDiv);
    highScoreEl.setAttribute("style", "display: block");
}

submitButtonEl.classList.add("submit");

var submitButton = document.querySelector(".submit");
inputEl.classList.add("initials");
var initialsInput = document.querySelector(".initials");

var userInitials = {
    initials : initialsInput.value.trim(),
}
localStorage.setItem("userInitials", JSON.stringify(userInitials));

