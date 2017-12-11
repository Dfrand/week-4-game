// Global variable
//--------------------------------------------


// Crystal Variables

var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var win
winCount = 0;
lossCount = 0;


// Functions
//--------------------------------------------


// get random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// starts and restarts
var startGame = function() {
    // reset the CurrentScore
    currentScore = 0;

    //set a new TargetScore
    targetScore = getRandom(19, 120);

    // set values to crystals
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    // change html to show changes
    $('#yourScore').html('<h3>' + currentScore);
    $('#targetScore').html('<h3>' + targetScore);


    console.log("------------------------")
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Red: " + crystal.red.value + " | Green: " + crystal.green.value + " | Yellow: " + crystal.yellow.value);
    console.log("---------------------")

}


// crystal clicks
var addValues = function(crystal) {

    // change currentscore
    currentScore = currentScore + crystal.value;

    // change html
    $('#yourScore').html('<h3>' + currentScore);

    // call checkWin
    checkWin();

    console.log('yourScore: ' + currentScore);
}

// check is user has won
var checkWin = function() {

    // Check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
        alert('Sorry. You lost!');
        console.log('You lost');

        // add to loss counter
        lossCount++;

        // change loss html
        $("#lossCount").html('<h3>' + lossCount);

        // restart game
        startGame();
    } else if (currentScore == targetScore) {
        alert('Congratulations! You Won')
        console.log('You Win')

        // add to win counter
        winCount++;

        // change win html
        $("#winCount").html('<h3>' + winCount)

        // restart game
        startGame();
    }
}


// Main Process
//--------------------------------------------

// Starts the game the first time
startGame();

$('#blue').click(function() {
    addValues(crystal.blue);
});

$('#red').click(function() {
    addValues(crystal.red);
});

$('#green').click(function() {
    addValues(crystal.green);
});

$('#yellow').click(function() {
    addValues(crystal.yellow);
});