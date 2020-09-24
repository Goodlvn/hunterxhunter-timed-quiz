
var quizQuestions = [
    {
        question: "What is Gon's last name?",
        options: ["Shoh", "Freecs", "Zoldyk", "Paradinight"],
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
//quiz page ^ and quiz elements below 
var questionDisplay = document.getElementById("questionDisplay");
var aOneBtn = document.getElementById("aOneDisplay");
var aTwoBtn = document.getElementById("aTwoDisplay");
var aThreeBtn = document.getElementById("aThreeDisplay");
var aFourBtn = document.getElementById("aFourDisplay");

//start screen and button
var startQuiz = document.getElementById("startQuiz");
var startBtn = document.getElementById("startBtn");
var viewPS = document.getElementById("viewPS");

//current score page and save score button
var displayScore = document.getElementById("displayScore");
var submitScoreBtn = document.getElementById("submitScore");

//high scores and try again button
var playerScores = document.getElementById("playerScores");
var tryAgainBtn = document.getElementById("tryAgain");
var clearPS = document.getElementById("clearPS");

var score = 0;
var timer = 180;
var gameTime;
var i = 0;

var newPlayerScore;
var playerName;
var storedNames= [];
var storedScores= [];

var clearableScores = document.getElementsByClassName("clearable");

//// Variables ^

loadPS();

function startTimer(){

    gameTime = setInterval(function(){

        timer--;

        document.getElementById("gameTime").textContent = "Time: " + timer;

        if(timer <= 0){
            clearInterval(gameTime);

            stopGame();
        }

    }, 1000);   
};

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

    if (i === quizQuestions.length) {

        stopGame();

        nextQuestion();

    } else {

        nextQuestion();

    }
};

function stopGame(){

    newPlayerScore = (score * 10) + timer;
     
    var showScore = document.getElementById("displayCurrentScore");

    showScore.textContent = "Congrats you got " + newPlayerScore + " points!";

    clearInterval(gameTime);

    //shows the current score screen and takes awat quiz screen
    quiz.classList.add("d-none");
 
    displayScore.classList.remove("d-none");

    //preps the app for another run through of the quiz
    i = 0;
};

function saveScore(){

    playerName = document.getElementById("playerName").value;

    createNappend();

    storedNames.push(playerName);
    storedScores.push(newPlayerScore);

    localStorage.setItem("name", JSON.stringify(storedNames));
    localStorage.setItem("score", JSON.stringify(storedScores));
};

function loadPS(){
    var displayStoredNames = JSON.parse(localStorage.getItem("name"));
    var displayStoredScores = JSON.parse(localStorage.getItem("score"));

    var i = 0;

    if(displayStoredScores !== null && displayStoredNames !== null){
        for(i = 0; i < displayStoredNames.length; i++){

            storedNames.push(displayStoredNames[i]);
            storedScores.push(displayStoredScores[i]);
    
            playerName = displayStoredNames[i];
            newPlayerScore = displayStoredScores[i];
    
            createNappend();
    
        };
    }
};

function createNappend(){
    var newRow = document.createElement("div");
    newRow.setAttribute("id", "wrapper-row"); 
    newRow.setAttribute("class", "row bg-light clearable"); 
    document.getElementById("playerScores").insertBefore(newRow, document.getElementById("playerScores").children[2]);

    var newColOne = document.createElement("div");
    newColOne.setAttribute("id", "name"); 
    newColOne.setAttribute("class", "col-6");
    newRow.append(newColOne);

    var newColTwo = document.createElement("div");
    newColTwo.setAttribute("id", "score"); 
    newColTwo.setAttribute("class", "col-6");
    newRow.append(newColTwo);

    var newName = document.createElement("h3");
    newName.setAttribute("class", "text-center p-2");
    newName.textContent = playerName;
    newColOne.append(newName);

    var newScore = document.createElement("h3");
    newScore.setAttribute("class", "text-center p-2");
    newScore.textContent = newPlayerScore;
    newColTwo.append(newScore);
};

//event listeners for buttons and functions
startBtn.addEventListener("click", function(){
    startQuiz.classList.add("d-none");
    quiz.classList.remove("d-none");

    startTimer();
});


tryAgainBtn.addEventListener("click", function(){
    playerScores.classList.add("d-none");
    quiz.classList.remove("d-none");

    i = 0;
    score = 0;
    timer = 180;
    startTimer();
});

clearPS.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();

    var i = 0;

    while(i < clearableScores.length || i === 0){
        clearableScores[0].remove();
    }
});

submitScoreBtn.addEventListener("click", saveScore);
submitScoreBtn.addEventListener("click", function(){

    displayScore.classList.add("d-none");
    playerScores.classList.remove("d-none");

    document.getElementById("playerName").value = "";
    document.getElementById("gameTime").textContent = "Time: 180";
});

viewPS.addEventListener("click", function(){

    startQuiz.classList.add("d-none");
    quiz.classList.add("d-none");
    displayScore.classList.add("d-none");
    playerScores.classList.remove("d-none");

    clearInterval(gameTime);
    i = 0;
    score = 0;
    document.getElementById("gameTime").textContent = "Time: 180";
    nextQuestion();
    
});

//event listeners that check for correct answer
aOneBtn.addEventListener("click", checkAnswer);
aTwoBtn.addEventListener("click", checkAnswer);
aThreeBtn.addEventListener("click", checkAnswer);
aFourBtn.addEventListener("click", checkAnswer);

nextQuestion();