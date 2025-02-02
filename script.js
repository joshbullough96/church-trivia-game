const quizData = [
    {
        question: "Who was the prophet chosen to restore the Church of Jesus Christ?",
        options: ["Brigham Young", "Joseph Smith", "John the Baptist", "Moroni"],
        answer: "Joseph Smith"
    },
    {
        question: "What event led to Joseph Smith's First Vision?",
        options: ["Searching for gold plates", "Visited by an angel in a dream", "Prayed to know which church to join", "Found a hidden scroll in a cave"],
        answer: "Prayed to know which church to join"
    },
    {
        question: "In what year did Joseph Smith experience the First Vision?",
        options: ["1805", "1820", "1836", "1844"],
        answer: "1820"
    },
    {
        question: "Who appeared to Joseph Smith in the First Vision?",
        options: ["Jesus Christ alone", "God the Father and Jesus Christ", "An angel", "John the Baptist"],
        answer: "God the Father and Jesus Christ"
    },
    {
        question: "What ancient record did Joseph Smith translate by the power of God?",
        options: ["The Apocrypha", "The Pearl of Great Price", "The Book of Mormon", "The Lost Scrolls"],
        answer: "The Book of Mormon"
    },
    {
        question: "What was the name of the angel who visited Joseph Smith and led him to the gold plates?",
        options: ["Gabriel", "Moroni", "Nephi", "Michael"],
        answer: "Moroni"
    },
    {
        question: "Where were the gold plates buried?",
        options: ["Nauvoo, Illinois", "Hill Cumorah, New York", "Salt Lake City, Utah", "Palmyra, Pennsylvania"],
        answer: "Hill Cumorah, New York"
    },
    {
        question: "When was the Church officially organized?",
        options: ["April 6, 1820", "April 6, 1830", "April 6, 1844", "April 6, 1850"],
        answer: "April 6, 1830"
    },
    {
        question: "Who were the first and second elders of the restored Church?",
        options: ["Joseph Smith and Oliver Cowdery", "Joseph Smith and Sidney Rigdon", "Brigham Young and Parley P. Pratt", "Hyrum Smith and Joseph Smith"],
        answer: "Joseph Smith and Oliver Cowdery"
    },
    {
        question: "What is the name of the priesthood restored by John the Baptist?",
        options: ["Aaronic Priesthood", "Melchizedek Priesthood", "Levitical Priesthood", "Nephite Priesthood"],
        answer: "Aaronic Priesthood"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("next");
const progressEl = document.getElementById("progress");
const quizDiv = document.getElementById("quiz");
const scoreScreen = document.getElementById("scoreScreen");
const finalScoreEl = document.getElementById("finalScore");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    progressEl.textContent = `Question ${currentQuestionIndex + 1} / ${quizData.length}`;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(button, option);
        optionsEl.appendChild(button);
    });

    feedbackEl.textContent = "";
    nextButton.classList.add("hide");
}

function checkAnswer(button, selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    const buttons = document.querySelectorAll(".options button");

    // Disable all buttons after selection
    buttons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === correctAnswer) {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
        score++;
    } else {
        feedbackEl.textContent = `Wrong! The correct answer was: ${correctAnswer}`;
        feedbackEl.style.color = "red";
    }

    nextButton.classList.remove("hide");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    quizDiv.classList.add("hide");
    scoreScreen.classList.remove("hide");
    finalScoreEl.textContent = `You scored ${score} out of ${quizData.length}!`;
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    quizDiv.classList.remove("hide");
    scoreScreen.classList.add("hide");
    loadQuestion();
}

nextButton.onclick = nextQuestion;
loadQuestion();
