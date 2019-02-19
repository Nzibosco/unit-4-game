$(document).ready(function () {

    // initialize game global vars 
    var win = 0;
    var lose = 0;
    var score = 0;

    // set the variables to their corresponding html ids
    $("#win-text").text("Wins: " + win);
    $("#lose-text").text("losses: " + lose);
    $("#score-info").text(score);

    // set target numbers to be chosen from for each game round
    // (i.e when the game is reset in case the player wins or lose).

    function numberGuess() {
        randomNumber = (Math.floor(Math.random() * 102) + 19);
        $(".target-number").text("Number to guess: " + randomNumber);
    }
    numberGuess();

    // creating 4 crystals and assigning them with values.  
    function setGame() {
        for (var i = 0; i < 4; i++) {
            var random = (Math.floor(Math.random() * 11) + 1);
            var crystals = $("<img>");
            crystals.addClass("crystalvalue");
            crystals.attr("src", "assets/images/crystal.jpg");
            crystals.attr("data-value", random);
            $("#crystals").append(crystals);
        }
    }
    setGame();

    //setting function to play the game. 
    function play() {
        $(".crystalvalue").on("click", function () {
            var value = ($(this).attr("data-value"));
            value = parseInt(value); //convert values to numbers. 
            score += value;
            $("#score-info").text(score);

            if (score === randomNumber) {
                win++;
                $("#win-lose-text").text("Wohoooh, You Won!!");
                $("#win-text").text("Wins: " + win);
                alert("Wohoooh, You Won!! click ok to continue playing");
                $("#crystals").empty(); // empty crystals id and call the setGame function to assign crystals with new values.
                numberGuess();
                setGame();
                score = 0;
                play();
            } else if (score > randomNumber) {
                lose++;
                $("#win-lose-text").text("Whooops, You Lost!!");
                $("#lose-text").text("Losses: " + lose);
                alert("Whooops, You Lost!! click ok to continue playing");
                $("#crystals").empty();
                numberGuess();
                setGame();
                score = 0;
                play();
            }
        });
    }
    play();
});
