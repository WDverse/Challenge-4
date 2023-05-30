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

        {
          title: 'Which of the following are used when invoking a function?',
          choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
          answer: 'parentheses',
        },

        {  
          title: 'Complex data types include:',
          choices: ['strings', 'booleans', 'objects', 'numbers'],
          answer: 'objects',
        },
    ];
    
    for (var i = 0; i < questions[0].choices.length; i++) {
        var newButtonEl =  document.createElement('button');
        var choice = questions[0].choices[i];
        newButtonEl.textContent = choice;
        buttonEl.appendChild(newButtonEl);
    } 
    for (var i = 0; i < questions[1].choices.length; i++) {
        var newButtonEl =  document.createElement('button');
        var choice = questions[1].choices[i];
        newButtonEl.textContent = choice;
        buttonEl.appendChild(newButtonEl);
    } 
    for (var i = 0; i < questions[2].choices.length; i++) {
        var newButtonEl =  document.createElement('button');
        var choice = questions[2].choices[i];
        newButtonEl.textContent = choice;
        buttonEl.appendChild(newButtonEl);
    } 
    for (var i = 0; i < questions[3].choices.length; i++) {
        var newButtonEl =  document.createElement('button');
        var choice = questions[3].choices[i];
        newButtonEl.textContent = choice;
        buttonEl.appendChild(newButtonEl);
    } 
    for (var i = 0; i < questions[4].choices.length; i++) {
        var newButtonEl =  document.createElement('button');
        var choice = questions[4].choices[i];
        newButtonEl.textContent = choice;
        buttonEl.appendChild(newButtonEl);
    } 

    for (var i = 0; i < questions[0].title; i++) {
      questionEl.textContent = questions[0].title;
    }
        
    
});
    


