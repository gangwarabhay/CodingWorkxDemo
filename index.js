let buttons = document.querySelectorAll("button");
let scores = document.querySelectorAll(".score");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Generate random number between 1 and 6
        let randomNumber = Math.floor(Math.random() * 6) + 1;

        let player = button.dataset.player;

        let currentScore = Number(scores[player].innerText);

        // Add random number to the score
        scores[player].innerText = currentScore + randomNumber;

        // Show the dice number
        alert("You got: " + randomNumber);

    });
console.log(buttons);
});