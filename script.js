// JavaScript code for the clicker game

// Initial score
let score = 0;

// Initial time
let timeLeft = 10;

// Function to update the score
function updateScore() {
    document.getElementById('score').textContent = 'Score: ' + score;
}

// Function to update the countdown timer
function updateTimer() {
    document.getElementById('timer').textContent = 'Time left: ' + timeLeft + 's';
}

// Function to display countdown before starting the game
function showCountdown() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.style.display = 'block';
    countdownElement.textContent = 'Ready?';
    setTimeout(() => {
        countdownElement.textContent = '3';
        setTimeout(() => {
            countdownElement.textContent = '2';
            setTimeout(() => {
                countdownElement.textContent = '1';
                setTimeout(() => {
                    countdownElement.textContent = 'Go!';
                    setTimeout(() => {
                        countdownElement.style.display = 'none';
                        // Enable the click button
                        document.getElementById('clickButton').disabled = false;
                        startGame();
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// Function to start the game
function startGame() {
    // Update timer every second
    const countdownInterval = setInterval(() => {
        // Update the timer
        updateTimer();
        
        // If time is up, end the game
        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            endGame();
        } else {
            // Decrease time left
            timeLeft--;
        }
    }, 1000);
}

// Function to end the game
function endGame() {
    // Disable the click button
    document.getElementById('clickButton').disabled = true;
    // Display a message
    document.getElementById('message').textContent = 'Game over! Your final score is: ' + score;
}

// Event listener for the click button
document.getElementById('clickButton').addEventListener('click', function() {
    // Increment the score by 10 when the button is clicked
    score += 10;
    updateScore();
});

// Initially disable the click button
document.getElementById('clickButton').disabled = true;

// Show countdown before starting the game
showCountdown();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("clickButton").addEventListener("click", function() {
        createParticle();
    });
});

function createParticle() {
    var particle = document.createElement("div");
    particle.classList.add("snowflake");
    particle.style.left = Math.random() * 40 + "%";
    document.querySelector(".snowflakes").appendChild(particle);

    setTimeout(function() {
        particle.remove();
    }, 5000);
}

// Function to end the game
function endGame() {
    // Disable the click button
    document.getElementById('clickButton').disabled = true;
    // Display a message
    document.getElementById('message').textContent = 'Game over! Your final score is: ' + score;
    
    // Show the modal with the final score and Malaysia time
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var finalScoreElement = document.getElementById("finalScore");
    finalScoreElement.textContent = 'Your final score is: ' + score;

    // Display Malaysia time in the modal
    var malaysiaTimeModal = document.getElementById("malaysiaTimeModal");
    const options = { timeZone: 'Asia/Kuala_Lumpur', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const malaysiaTime = new Date().toLocaleString('en-US', options);
    malaysiaTimeModal.textContent = 'Malaysia Time: ' + malaysiaTime;

    // Show the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}