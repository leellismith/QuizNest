// jshint esversion: 6
/*jshint sub:true*/

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


// Fetching API Questions
fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
.then( res => {
    return res.json();
})
.then(loadedQuestions => {
    questions = loadedQuestions.results.map( loadedQuestion => {
        const formattedQuestion = {
            question: he.decode(loadedQuestion.question) //he.decode decodes HTML entities.
        };
        //
        const answerChoices = [...loadedQuestion.incorrect_answers.map(he.decode)];
        formattedQuestion.answer = Math.floor(Math.random() * 3) + 1; //randomised correct answer.
        answerChoices.splice(formattedQuestion.answer -1, 0,
        he.decode(loadedQuestion.correct_answer));

        answerChoices.forEach((choice, index) => {
            formattedQuestion["choice" + (index + 1)] = choice;
        });
        
        return formattedQuestion;
    });

    startGame(); //Starts the game when all questions have loaded.
})
.catch( err => {
    console.error(err);
});



// Constants

const CORRECT_BONUS = 1; //Amount of points received for correct answer.
const MAX_QUESTIONS = 10; //Amount of questions in the quiz.

//Function to start the game
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; //Brings questions from question to the availableQuestions array.
    getNewQuestion(); //Will display the first question.
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

//Function to get a new question
getNewQuestion = () => {
    // Checking if maximun number of questions have been reach or if there are no more questions.
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score); //Score local storage save.
        //go to the end page.
        return window.location.assign("end.html");
    }

    questionCounter++;

    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //updating the progress bar.
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    //Picks a random question from availableQuestion.
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    //Shows the answers to choose from.
    choices.forEach((choice) => {
        const number = choice.dataset['number']; //get choices from the custom attributes
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1); // Corrected line
    acceptingAnswers = true;
};

//Event Listeners for answer selection.
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        //Checks if selected answer if correct.
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        const correctChoice = document.querySelector(`[data-number="${currentQuestion.answer}"]`);           

        //If the answer is correct CORRECT_BONUS increases.
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        } else {
            correctChoice.parentElement.classList.add('correct'); //Shows correct answer in incorrect chosen.
        }
    
        //Adds the CSS style to selected answer.
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            correctChoice.parentElement.classList.remove('correct'); //Removes the correct answer highlight.
            getNewQuestion();
        }, 1000);
        
    });
});

//Function to increase score.
const incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

