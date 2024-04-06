const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
.then( res => {
    return res.json();
})
.then(loadedQuestions => {
    questions = loadedQuestions.results.map( loadedQuestion => {
        const formattedQuestion = {
            question: loadedQuestion.question.replace(/&quot;/g, '"')
            .replace(/&amp;/g, '&')
            .replace(/&#039;/g, "'")
            .replace(/&ldquo;/g, '"')
            .replace(/&rdquo;/g, '"')
            .replace(/&rsquo;/g, "'")
            .replace(/&hellip;/g, '...')
            .replace(/&aacute;/g, 'á')
            .replace(/A flavor of Ben and Jerry&#039;s ice-cream/g, "A flavor of Ben and Jerry's ice-cream")
            .replace(/Medell&iacute;n/g, "Medellín")
            .replace(/Bogot&aacute;/g, "Bogotá")
            .replace(/McDonald&#039;s/g, "McDonald's")
            .replace(/Noah&#039;s Ark/g, "Noah's Ark")
            .replace(/"Llanfair&shy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch"/g, "Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch")
            .replace(/&Eacute;charpe/g, "Écharpe")
            .replace(/&aacute;/g, 'á')
            .replace(/Wendy&#039;s/g, "Wendy's")
            .replace(/M&amp;M&#039;s/g, "M&M's")
            .replace(/&lrm;/g, '')
        };

        const answerChoices = [...loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
        answerChoices.splice(formattedQuestion.answer -1, 0,
        loadedQuestion.correct_answer.replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&ldquo;/g, '"')
        .replace(/&rdquo;/g, '"')
        .replace(/&rsquo;/g, "'")
        .replace(/&hellip;/g, '...')
        .replace(/&oacute;/g, 'ó')
        .replace(/&#039;/g, "'")
        .replace(/&aacute;/g, 'á')
        .replace(/A flavor of Ben and Jerry&#039;s ice-cream/g, "A flavor of Ben and Jerry's ice-cream")
        .replace(/Medell&iacute;n/g, "Medellín")
        .replace(/Bogot&aacute;/g, "Bogotá")
        .replace(/McDonald&#039;s/g, "McDonald's")
        .replace(/Noah&#039;s/g, "Noah's Ark")
        .replace(/Llanfair&shy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch/g, "Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch")
        .replace(/&Eacute;charpe/g, "Écharpe")
        .replace(/&aacute;/g, 'á')
        .replace(/Wendy&#039;s/g, "Wendy's")
        .replace(/M&amp;M&#039;s/g, "M&M's")
        .replace(/&lrm;/g, ''));

        answerChoices.forEach((choice, index) => {
            formattedQuestion["choice" + (index + 1)] = choice;
        });
        
        return formattedQuestion;
    });

    startGame();
})
.catch( err => {
    console.error(err);
});



// Constants

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign("/end.html");
    }

    questionCounter++;

    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //updating the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number']; //get choices from the custom attributes
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1); // Corrected line
    acceptingAnswers = true;
};


choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        const correctChoice = document.querySelector(`[data-number="${currentQuestion.answer}"]`);           

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        } else {
            correctChoice.parentElement.classList.add('correct');
        }
    

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            correctChoice.parentElement.classList.remove('correct');
            getNewQuestion();
        }, 1000);
        
    });
});

const incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

