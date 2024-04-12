const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

//Array to store high score from the localStorage or show as empty array
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5; //Number of scores to be shown.

// Event listener for username input.
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

// Function to save the high score
saveHighScore = (e) => {
    e.preventDefault();

    // Creates an object to store the current score and users.
    const scoreLocal = {
        score: mostRecentScore, // Score
        name: username.value, // Username entered.
    };
    
    // Adds score to the highscores array
    highScores.push(scoreLocal);
    //Sorts the highscores array in a descending order based on the highest score.
    highScores.sort( (a,b) => b.score - a.score);
    // Will only keep the top 5 scores.
    highScores.splice(5);

    //Stores HighScores array in LocalStorage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html') //Sends user to index.html page.
};
