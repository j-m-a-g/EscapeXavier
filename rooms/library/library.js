 const quizData = [
  { question: "True or False: A robot is always a physical machine with moving parts.", answer: "False" },
  { question: "Computers use 1's and 0's to represent data which are called...", answer: "Binary" },
  { question: "What type of sensor is best to use to detect an impact/press?", answer: "Touch sensor" },
  { question: "True or False: Continued use of robots could impact job avalibility.", answer: "True" },
  { question: "True or False: Autonomous robots require human assistance.", answer: "False" }
];

let currentQuestionIndex = 0;

const quizModal = document.getElementById("quizModal");
const quizOverlay = document.getElementById("quizOverlay");
const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const submitButton = document.getElementById("submitAnswer");
const feedbackElement = document.getElementById("feedback");

// Function to start the quiz when the book image is clicked
function startQuiz() {
  document.querySelector('.imageButtons').style.display = 'none';
  quizModal.style.display = 'block';
  quizOverlay.style.display = 'block';
  loadQuestion();
}

// Function to load the current question and also clear previous user input and feedback
function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;
  answerInput.value = '';
  feedbackElement.innerHTML = '';
}

//check the user's answer
submitButton.addEventListener("click", function() {
  const userAnswer = answerInput.value.trim(); //Removes any extra spaces for accuracy
  const correctAnswer = quizData[currentQuestionIndex].answer;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    feedbackElement.textContent = "Correct!";
    feedbackElement.className = 'correct';

    // Proceed to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
      setTimeout(loadQuestion, 1000);
    } else {
      setTimeout(function() {
        feedbackElement.textContent = 'Are you a robot or something?! TmluZQ==';
        feedbackElement.className = 'correct';
      }, 1000);

      sessionStorage.setItem("libraryDigit", "TmluZQ==");
    }
  } else {
    feedbackElement.innerHTML = "Incorrect! Try again.";
    feedbackElement.className = 'incorrect';
  }
});

function showInstructions () {
  document.getElementById("book").style.display="none";
  document.getElementById("instructions").style.display="block";
}

function startMaze () {
  window.location.href= "virtualRealityRoom.html";
}

function leaveQuiz () {
  document.querySelector('.imageButtons').style.display = 'block';
  quizModal.style.display = 'none';
  quizOverlay.style.display = 'none';
}
