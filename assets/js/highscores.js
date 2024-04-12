const highScoresList = document.getElementById("highScoresList");

//Gets high scores from the localStorage or will set up as an empty array
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

/* Populate the highScoresList with high scores by creating HTML list items for 
each high score entry and setting them as innerHTML of highScoresList */
highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");