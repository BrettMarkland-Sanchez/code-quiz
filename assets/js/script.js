const quizBox = $('#quizBox');
const scores = $('#scores');
const quizNav = $('#quizNav');
const scoresNav = $('#scoresNav');
const desktop = $('#desktop');
const mobile = $('#mobile');

quizNav.on('click', function(){
    showQuiz();
});

scoresNav.on('click', function(){
    showScores();
});

let quizActive = true;

// Uses the window width to determine which #quiz child-id to show
function showQuiz(){
    hideScores();
    if($(window).width() < 767){
        desktop.addClass('hidden');
        mobile.removeClass('hidden');
    } else {
        mobile.addClass('hidden');
        desktop.removeClass('hidden');
    };
    quizBox.removeClass('hidden');
    quizActive = true;
}

function showScores(){
    hideQuiz();
    scores.removeClass('hidden');
}

function hideQuiz(){
    quizBox.addClass('hidden');
    quizActive = false;
}

function hideScores(){
    scores.addClass('hidden');
}



// Makes #quiz the homepage
showQuiz();

window.onresize = function() {
    if(quizActive){
        showQuiz();
    }
};