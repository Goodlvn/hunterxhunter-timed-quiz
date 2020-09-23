
var quizQuestions = [
    {
        question: "What is Gon's last name?",
        options: ["shoh", "Freecs", "Zoldyk", "Paradinight"],
        answer: "Freecs",
    },

    {
        question: "What is the first phase of the Hunter Exam?",
        options: ["A long run ", "A fight to the death", "A treasure hunt", "A cooking competition"],
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

var score = 0;

var timer = 180;

var index = 0;

var aOneBtn = document.getElementById("aOneDisplay");
var aTwoBtn = document.getElementById("aTwoDisplay");
var aThreeBtn = document.getElementById("aThreeDisplay");
var aFourBtn = document.getElementById("aFourDisplay");

function nextQuestion() {
    var currentQuestion = quizQuestions[index];

    document.getElementById("questionDisplay").textContent = currentQuestion.question;

    aOneBtn.textContent = currentQuestion.options[0];
    aOneBtn.value = currentQuestion.options[0];

    aTwoBtn.textContent = currentQuestion.options[1];
    aTwoBtn.value = currentQuestion.options[1];

    aThreeBtn.textContent = currentQuestion.options[2];
    aThreeBtn.value = currentQuestion.options[2];

    aFourBtn.textContent = currentQuestion.options[3];
    aFourBtn.value = currentQuestion.options[3];

};

function checkAnswer() {
    console.log("button click " + this.value);

    if(this.value === quizQuestions[index].answer) {

        score++;
    } else {

        timer = timer - 10;
    }

    index++;

    if (index === quizQuestions.length) {

        scoreBoard();

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



aOneBtn.addEventListener("click", checkAnswer);
aTwoBtn.addEventListener("click", checkAnswer);
aThreeBtn.addEventListener("click", checkAnswer);
aFourBtn.addEventListener("click", checkAnswer);
// document.getElementById("submitBtn").onclick = saveScore;


nextQuestion();


