// Snippet #1 for future Use 

// Convert the Check button to play again and reload the page
document.querySelector('.check').textContent = 'Again!';

// Event lsitener to reset the game without refreshing it
document.querySelector('.check').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secreteNumber = Math.trunc(Math.random() * (20 - 10)) + 10;
    console.log(secreteNumber);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').textContent = 'Check!';
    return;
});