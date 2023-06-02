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
var highScoreEl = document.getElementById("highscore");



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
    if (index === questions.length - 1) {
        //stop increment HOW??????
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
        newButtonEl.classList.add("option")
        buttonEl.appendChild(newButtonEl)
        newButtonEl.addEventListener("click", checkQuestion)
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
    var timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = "Time Left: " + timer;
        if (timer <= 0) {
            endQuiz;
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
    var initialsEl = document.createElement("p");
    initialsEl.textContent = "Enter your initials";
    headingEl.appendChild(initialsEl);
    var inputEl = document.createElement("input");
    headingEl.appendChild(inputEl);
    highScoreEl.setAttribute("style", "display: block");
}




