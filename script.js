
var quizQuestions = [
    {
        question: "What is Gon's last name?",
        options: ["shoh", "Freecs", "Zoldyk", "Paradinight"],
        answer: "Freecs",
    },

    {
        question: "What is the first phase of the Hunter Exam?",
        options: ["A long run", "A fight to the death", "A treasure hunt", "A cooking competition"],
        answer: "A long run",
    },

    {
        question: "What is Nen?",
        options: ["A soup like food", "A technique that allows a living being to manipulate their life energy", "A period of time in which all hunters loose their special abilities", "The currency in Hunter X Hunter"],
        answer: "A technique that allows a living being to manipulate their life energy",
    },

    {
        question: "What is the Zoldyk family proffession?",
        options: ["Hunters", "Private Security Force", "Assasins", "Investigators"],
        answer: "Assasins",
    },

    {
        question: "Which member of the Phantom Troupe does Kuripika kill?",
        options: ["Phinks", "Shizuku", "Nobunaga", "Uvogin"],
        answer: "Uvogin",
    },

    {
        question: "Which is not a Nen type?",
        options: ["Enhancement", "Transmutation", "Proliferation", "Emmission"],
        answer: "Proliferation",
    },

    {
        question: "Who is the Bomber in Greed Island?",
        options: ["Busuit", "Genthru", "Binolt", "Razor"],
        answer: "Genthru",
    },

    {
        question: "What is the name of the board game Meruem plays with Komugi?",
        options: ["Chess", "Gwent", "Gungi", "Pai Sho"],
        answer: "Gungi",
    },

    {
        question: "Who is the most recent Chairman of the hunter association?",
        options: ["Cheadle", "Pariston", "Leorio", "Gin"],
        answer: "Cheadle",
    },

    {
        question: "What is Hisoka's Nen ability called?",
        options: ["Bungy Gum", "Shadow Lurker", "Heaven's Rains", "Laughter Parade"],
        answer: "Bungy Gum",
    },

];

var quiz = document.getElementById("quiz");

var displayScore = document.getElementById("displayScore");
var submitScoreBtn = document.getElementById("submitScore");

var startQuiz = document.getElementById("startQuiz");
var startBtn = document.getElementById("startBtn");

var playerScores = document.getElementById("playerScores");
var tryAgainBtn = document.getElementById("tryAgain");

var questionDisplay = document.getElementById("questionDisplay");
var aOneBtn = document.getElementById("aOneDisplay");
var aTwoBtn = document.getElementById("aTwoDisplay");
var aThreeBtn = document.getElementById("aThreeDisplay");
var aFourBtn = document.getElementById("aFourDisplay");

var score = 0;
var timer = 180;
var i = 0;

function nextQuestion() {
    var currentQuestion = quizQuestions[i];

    questionDisplay.textContent = currentQuestion.question;

    //can include event delegation to clean up code//

    //displays and sets value of question 1
    aOneBtn.textContent = currentQuestion.options[0];
    aOneBtn.value = currentQuestion.options[0];

    //displays and sets value of question 2
    aTwoBtn.textContent = currentQuestion.options[1];
    aTwoBtn.value = currentQuestion.options[1];

    //displays and sets value of question 3
    aThreeBtn.textContent = currentQuestion.options[2];
    aThreeBtn.value = currentQuestion.options[2];

    //displays and sets value of question 4
    aFourBtn.textContent = currentQuestion.options[3];
    aFourBtn.value = currentQuestion.options[3];
};

function checkAnswer() {

    if(this.value === quizQuestions[i].answer) {

        score++;
    } else {

        timer = timer - 10;
    }

    i++;

    console.log(score);

    if (i === quizQuestions.length) {
        quiz.classList.add("d-none");
        displayScore.classList.remove("d-none");

        i = 0;
        
        nextQuestion();
        saveScore();
    } else {

        nextQuestion();
    }
};



function scoreBoard(){
    alert("GAME OVER");

    // // clearTimer

    // display Score Board
};

function saveScore(){

    // // player name from input field 

    // var playerScore = {
    //     name: playerName,
    //     score: score,
    // }

    // localStorage.setItem("playerScoreList", JSON.stringify(playerScores));
    // /// JSON.parse 
};


startBtn.addEventListener("click", function(){
    startBtn.classList.add("d-none");
    quiz.classList.remove("d-none");

});

tryAgainBtn.addEventListener("click", function(){
    playerScores.classList.add("d-none");
    quiz.classList.remove("d-none");

});

submitScoreBtn.addEventListener("click", function(){
    displayScore.classList.add("d-none");
    playerScores.classList.remove("d-none");

});

aOneBtn.addEventListener("click", checkAnswer);
aTwoBtn.addEventListener("click", checkAnswer);
aThreeBtn.addEventListener("click", checkAnswer);
aFourBtn.addEventListener("click", checkAnswer);
// document.getElementById("submitBtn").onclick = saveScore;


nextQuestion();


