const quizBox = document.getElementById('quizBox');
const scores = document.getElementById('scores');
const quizNav = document.getElementById('quizNav');
const scoresNav = document.getElementById('scoresNav');
const desktop = document.getElementById('desktop');
const mobile = document.getElementById('mobile');

quizNav.onclick = function(){
    showQuiz();
};

scoresNav.onclick = function(){
    showScores();
};

let quizActive = true;

// Uses the window width to determine which #quiz child-id to show
function showQuiz(){
    hideScores();
    if(window.innerWidth < 767){
        desktop.classList.add('hidden');
        mobile.classList.remove('hidden');
    } else {
        mobile.classList.add('hidden');
        desktop.classList.remove('hidden');
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



// Makes #quiz the homepage
showQuiz();

window.onresize = function() {
    if(quizActive){
        showQuiz();
    }
};