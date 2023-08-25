// Iteration 8: Making scoreboard functional
document.getElementById('score-board').innerText = localStorage.getItem('score');
document.getElementById('play-again-button').addEventListener('click',() => {
    localStorage.setItem('score',0)
    window.location.href='game.html'
})

