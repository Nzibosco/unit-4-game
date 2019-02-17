// set target numbers to be chosen from for each game round
// (i.e when the game is reset in case the player wins or lose). 
var guessNumber; 

// initialize game vars to 0 
var win = 0;
var lose = 0;
var score = 0;

$("#win-text").text("Wins: " + win);
$("#lose-text").text("losses: " + lose);
$("#score-info").text(score);

// an array for numbers to be assigned to the crystals. 
var crystalNumber = [3, 10, 11, 5];

// creating 4 crystals and assigning them with numbers in the array.  
    for (var i = 0; i < crystalNumber.length; i++) {
        var crystals = $("<img>");
        crystals.addClass("crystalvalue");
        crystals.attr("src", "assets/images/crystal.jpg");
        crystals.attr("data-value", crystalNumber[i]);
        $("#crystals").append(crystals);
    }

//setting function to play the game. 
    $(".crystalvalue").on("click", function () {
        guessNumber = (Math.floor(Math.random() * 102) + 19);
        $(".target-number").text("Number to guess: " + guessNumber);
        var value = ($(this).attr("data-value"));
        value = parseInt(value);
        score += value;
        $("#score-info").text(score);

        if (score === guessNumber) {
            win++;
            $("#win-lose-text").text("Wohoooh, You Won!!");
            $("#win-text").text("Wins: " + win);
            score = 0;
        } else if (score > guessNumber) {
            lose++;
            $("#win-lose-text").text("Whooops, You Lost!!");
            $("#lose-text").text("Losses: " + lose);
            score = 0;
            

        }
    });