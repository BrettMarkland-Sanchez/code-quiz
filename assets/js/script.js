// Variables!
const quizBox = document.getElementById('quizBox');
const scores = document.getElementById('scores');
const quizNav = document.getElementById('quizNav');
const scoresNav = document.getElementById('scoresNav');
const game = document.getElementById('game');
const mobile = document.getElementById('mobile');
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const timer = document.getElementById('timer');
const clock = document.getElementById('clock');
let highscore = document.getElementById('highscore');
let topPlayer = document.getElementById('top');
let score = document.getElementById('score');
let question = document.getElementById('question');
let answers = document.getElementById('answers');
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');

// Question Bank!
let q1 = {
    question: "1) The behaviour of the instances present of a class inside a method is defined by __________.",
    a:"Method",
    b:"Classes",
    c:"Interfaces",
    d:"Classes and Interfaces",
    key: "b",
    explanation: "Objects of the class are also known as instances of the class. The behaviour of the instance of a class is defined by the class and is shared by all instances."
}
let q2 = {
    question: "2) The keyword or the property that you use to refer to an object through which they were invoked is _________.",
    a:"from",
    b:"to",
    c:"this",
    d:"object",
    key: "c",
    explanation: "‘This’ keyword is used to refer to the object through which the properties or methods were invoked. The use of ‘this’ is a fundamental characteristic of the methods of any class."
}
let q3 = {
    question: "3) The basic difference between JavaScript and Java is _________.",
    a:"There is no difference",
    b:"Functions are considered as fields",
    c:"Variables are specific",
    d:"Functions are values",
    key: "d",
    explanation: "Java is an OOP programming language while JavaScript is an OOP scripting language. The basic difference between JavaScript and Java is that the functions are values, and there is no hard distinction between methods and fields."
}
let q4 = {
    question: "4) The meaning for Augmenting classes is that ___________.",
    a:"objects inherit prototype properties even in a dynamic state",
    b:"objects inherit prototype properties only in a dynamic state",
    c:"objects inherit prototype properties in the static state",
    d:"object doesn’t inherit prototype properties in the static state",
    key: "a",
    explanation: "JavaScript’s prototype-based inheritance mechanism is dynamic an object inherits properties from its prototype, even if the prototype changes after the object is created. This means that we can augment JavaScript classes simply by adding new methods to their prototype objects."
}

let quizArr = [];

quizArr[0] = q1;
quizArr[1] = q2;
quizArr[2] = q3;
quizArr[3] = q4;

start.onclick = function(){
    startQuiz();
}

quizNav.onclick = function(){
    showQuiz();
};

scoresNav.onclick = function(){
    showScores();
};

let quizActive = true;

// Uses the window width to determine how to size and stack the boxes
function showQuiz(){
    hideScores();
    if(window.innerWidth < 767){
        game.style.flexDirection = 'column';
    }else{
        game.style.flexDirection = 'row';
    };
    quizBox.classList.remove('hidden');
    quizActive = true;
}

function showScores(){
    hideQuiz();
    scores.classList.remove('hidden');
}

function hideQuiz(){
    quizBox.classList.add('hidden');
    quizActive = false;
}

function hideScores(){
    scores.classList.add('hidden');
}

let count = 0;
let answer = undefined;

function startQuiz(){
    start.classList.add('hidden');
    question.classList.remove('hidden');
    answers.classList.remove('hidden');
    nextQuestion();
    setTimer();
}

a.onclick = function(){
    if(count == quizArr.length-1){
        gameOver(points);
        return;
    };
    if(quizArr[count].key == 'a'){
        points++;
        updateScore();
    }else incorrect();
    count++;
    nextQuestion();
}

b.onclick = function(){
    if(count == quizArr.length-1){
        gameOver(points);
        return;
    };
    if(quizArr[count].key == 'b'){
        points++;
        updateScore();
    }else incorrect();
    count++;
    nextQuestion();
}

c.onclick = function(){
    if(count == quizArr.length-1){
        gameOver(points);
        return;
    };
    if(quizArr[count].key == 'c'){
        points++;
        updateScore();
    }else incorrect();
    count++;
    nextQuestion();
}

d.onclick = function(){
    if(count == quizArr.length-1){
        gameOver(points);
        return;
    };
    if(quizArr[count].key == 'd'){
        points++;
        updateScore();
    }else incorrect();
    count++;
    nextQuestion();
}

function incorrect() {
    timer.style.color = 'red';
    timeLeft -=30;
    setTimeout(function(){ timer.style.color = '#000'; }, 1000);
}

function nextQuestion(){
    question.innerHTML = (quizArr[count].question);
    a.innerHTML = (quizArr[count].a);
    b.innerHTML = (quizArr[count].b);
    c.innerHTML = (quizArr[count].c);
    d.innerHTML = (quizArr[count].d);
}

// Allots 10 minutes for the quiz, sets points and displays time
let timeLeft = 600;
let points = 0;
let minutes = Math.floor((timeLeft % (60 * 60)) / (60));
let seconds = Math.floor(timeLeft % (60));
let x;

function setTimer(){
    score.classList.remove('hidden');
    clock.style.fontSize = '4em';
    clock.style.flexDirection = 'column';
    updateScore();
    timer.innerHTML = minutes + "m " + seconds + "s ";
    x = setInterval(function(){
        minutes = Math.floor((timeLeft % (60 * 60)) / (60));
        seconds = Math.floor(timeLeft % (60));
        timer.innerHTML = minutes + "m " + seconds + "s ";
        if (timeLeft < 1) {
            clearInterval(x);
            quiz.innerHTML = '<h2>Game Over<h2>'
          }
        timeLeft--;
    }, 1000);
}

function updateScore(){
    score.innerHTML = 'Score: ' + points;
}

let initials;

function gameOver(points){
    clearInterval(x);
    quiz.innerHTML = "Game Over <p>Refresh to play again!</p>";
    quiz.classList.add('gameOver');
    do{
        initials = window.prompt("Save your score!", "ZZZ");
    }while(initials.length != 3);
    localStorage.setItem(initials, points);
    topPlayer.innerHTML = 'Top Player: ' + initials;
    highscore.innerHTML = 'Highscore: ' + points;
}

let scoresArr = [];

for (var i = 0; i < localStorage.length; i++){
    scoresArr.push(" "+localStorage.key(i)+" "+localStorage.getItem(localStorage.key(i)));
}

scores.innerHTML = scoresArr;

// Makes #quiz the homepage
showQuiz();

window.onresize = function() {
    if(quizActive){
        showQuiz();
    }
};