
const quizData = [
    
    {
        question: "Who is the current president of the INDIA?",
        choices: ["Droupadi Murmu", "Donald Trump", "Narendra Modi ", "George Bush"],
        correct: 0
    },
    {
        question: "Which is the smallest bird in the world ?",
        choices: ["Kiwi", "pigeon","Sparrow","Humming bird"],
        correct: 3
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Giraffe", "Blue Whale", "Polar Bear"],
        correct: 2
    },
   
    {
        question: "Who wrote the play 'Durgasthamana'?",
        choices: [ "Tarasu", "Kuvempu", "Jane Austen", "Krishna Shastri"],
        correct: 0
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Gold", "Iron", "Diamond", "Platinum"],
        correct: 2
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        choices: ["Australia", "Brazil", "South Africa", "Mexico"],
        correct: 0
    },
    {
        question: "Who was the first person to walk on the moon?",
        choices: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        correct: 1
    },
   
    {
        question: "Which is the smallest country in the world by area?",
        choices: ["Challakere", " Liechtenstein", "Vatican City", "Monaco"],
        correct: 2
    },
    {
        question: "Which element has the chemical symbol 'Au'?",
        choices: ["Oxygen", "Arsenic", "Silver", "Gold"],
        correct: 3
    },
    {
        question: "What is the capital of South Korea?",
        choices: ["Daegu", "Busan", "Seoul", "Mississippi"],
        correct: 2
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    
    const choices = document.querySelectorAll(".choice-btn");
    choices.forEach((button, index) => {
        button.innerText = currentQuestion.choices[index];
    });
}

function selectAnswer(index) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (index === currentQuestion.correct) {
        score++;
    }
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        document.getElementById("next-btn").style.display = "none";
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");
    document.getElementById("score").innerText = `${score}/${quizData.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("results").classList.add("hidden");
    loadQuestion();
    document.getElementById("next-btn").style.display = "none";
}

window.onload = function () {
    loadQuestion();
};