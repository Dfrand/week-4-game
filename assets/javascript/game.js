// Declare global variables.
var goalNumber = "";
var gemNumber = "";
var addedScore = "";
var scoring;

$(document).ready(function() {

    // Function for goalNumber.
    var minNumber = 40;
    var maxNumber = 120;

    var randomNumber = randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    $(".goal").append("<div></div>" + randomNumber);

    console.log(goalNumber);
    console.log(randomNumber);


    // Function for gem1.    
    var minNumber = 1;
    var maxNumber = 12;

    var randomNumber = randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    $(".gem1").append("<span></span>" + randomNumber);
    console.log(randomNumber);

    $(".number").on("click", function() {
        $("#addedScore").text($(this).text());
        console.log(addedScore);
    });


    // Function for gem2.
    var minNumber = 1;
    var maxNumber = 12;

    var randomNumber = randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    $(".gem2").append("<span></span>" + randomNumber);
    console.log(randomNumber);


    // Function for gem3.
    var minNumber = 1;
    var maxNumber = 12;

    var randomNumber = randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    $(".gem3").append("<span></span>" + randomNumber);
    console.log(randomNumber);


    // Function for gem4.
    var minNumber = 1;
    var maxNumber = 12;

    var randomNumber = randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    $(".gem4").append("<span></span>" + randomNumber);
    console.log(randomNumber);


    // Function for addedScore.
    // Function for scoring.





});