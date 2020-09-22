const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Does he not want anyone to know you talk / are seeing each other?',
    answers: [
      { text: 'No', correct: true },
      { text: 'Yes', correct: false }
    ]
  },
  {
    question: 'Does he only  message you late at night?',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: true },
      { text: 'Sometimes', correct: true }
    ]
  },
  {
    question: 'Does he ignore you on nights out?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: false },
      { text: 'No', correct: true }
    ]
  },
  {
    question: 'When you confront him, does he act like your crazy?',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: true }
    ]
  },
    {
    question: 'Does he reply to your instagram stories, but never actually comments?',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: true }
    ]
  },
      {
    question: 'Do his message notifications hide what the message says?',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: true }
    ]
  },
        {
    question: 'Does he let you use his phone?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false }
    ]
  },
          {
    question: 'Does he say "Im not a fuckboy" or "Your the only girl Im talking to"?',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: true }
    ]
  },
    {
    question: 'Does he guilt you into sending risque pics at night?',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: true }
    ]
  }
]