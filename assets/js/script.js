const quiz = $('#quiz');
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

function showQuiz(){
    hideScores();
    if($(window).width() < 767){
        desktop.addClass('hidden');
        mobile.removeClass('hidden');
    } else {
        mobile.addClass('hidden');
        desktop.removeClass('hidden');
    };
    quiz.removeClass('hidden');
}

function showScores(){
    hideQuiz();
    scores.removeClass('hidden');
}

function hideQuiz(){
    quiz.addClass('hidden');
}

function hideScores(){
    scores.addClass('hidden');
}

showQuiz();