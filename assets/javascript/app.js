// You'll create a trivia form with multiple choice or true/false options (your choice).
// i need a list of questions and answers
// make a var to set up questions/answers/correct answer
// make an array of objects
// objects- {q: a:[] correct answer: }
// i need buttons 
// start and a done button and radio buttons for the answer otions
// start button is clicked and it brings up the question/answer page
// create .onclick function and another function to display questions once its clicked
//radio buttons are for answer options and they store the users choice
//done button takes user to last screen that tells the user how many they got correct and incorrect


// The player will have a limited amount of time to finish the quiz. 
// 

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.


// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.



var gameinfo = [
    {
        q: "1. Who turned Victor Stone into Cyborg?",
        a: [" his mother", " his father", " his boss", " Superman"],
        correctAnswer: " his father"
    },
    {
        q: "2. Which character came back to life?",
        a: [" Wonder Woman", " Cyborg", " Superman", " Batman"],
        correctAnswer: " Superman"
    },
    {
        q: "3. Who is the only female character within the group?",
        a: [" Batman", " Aquaman", " Flash", " Wonder Woman"],
        correctAnswer: " Wonder Woman"
    },
    {
        q: "4. Who got the group together?",
        a: [" Cyborg", " Flash", " Batman", " Wonder Woman"],
        correctAnswer: " Batman"
    },
    {
        q: "5. Which character lives on both land and water?",
        a: [" Aquaman", " WonderWoman", " Flash", " Cyborg"],
        correctAnswer: " Aquaman"
    }
];

var correct = 0;
var incorrect = 0;
var seconds = 31;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    seconds--
    $("#timeRemaining").html("Time remaining: " + seconds)

    if (seconds === 0) [
        stop()
    ]
}

function stop() {
    clearInterval(intervalId);
}




// Start Game
$('#startButton').on('click', function () {
    startGame()
    $("#startButton").hide()
    $("section").show()
    run();
    decrement()
});

$("#doneButton").on("click", function () {
    $("#doneButton").hide()
    $("section").hide()
    $("#lastSection").show()
    checkAnswer()
});


function startGame() {


    for (var i = 0; i < gameinfo.length; i++) {
        $("#questions").append(gameinfo[i].q + "<br>")
        // console.log(gameinfo[i].q)

        for (var j = 0; j < gameinfo[i].a.length; j++) {
            // <input type="radio" name="answer1" value="his mother">his mother</input>
            $("#questions").append("<input value='" + gameinfo[i].a[j] + "' name='answer" + i + "' type='radio'>" + gameinfo[i].a[j] + "<br>")
            // console.log(gameinfo[j].a)
        }
    };
};

function checkAnswer() {
    for (var c = 0; c < gameinfo.length; c++) {
        var input = $("input[name='answer" + [c] + "']:checked")
        console.log(gameinfo[c].correctAnswer)
        if ($(input)) {
            console.log($(input).val())
            if ($(input).val() === gameinfo[c].correctAnswer) {
                console.log("correct")
                correct++;
                $("#display").html("correct")
            } else {
                incorrect++;
                $("#display").text("incorrect")
            }
        }
    }
};


// when the use hits the done button, it should check the user's answers against the right answer  

// if it is the right answer then 1 point gets added to correct
// if they guess the wrong answer then one gets added to incorrect
