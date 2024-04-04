const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const scoreLocal = {
        score: mostRecentScore,
        name: username.value
    };
    console.log(scoreLocal)
    

    highScores.push(scoreLocal);
    highScores.sort( (a,b) => b.score - a.score)
    highScores.splice(5);

    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/index.html')
};