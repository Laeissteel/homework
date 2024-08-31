(function () {

// Элементы управления
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const submitButton = document.getElementById('submit');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');

// Вопросы и ответы
const quizQuestions = [
  {
    question: "Какой тип укладки Вас интересует?",
    answers: {
      a: "img/example/example11.jpg",
      b: "img/example/example21.jpg",
      c: "img/example/example31.jpg",
      d: "img/example/example25.jpg"
    }
  },
  {
    question: "Какой тип укладки Вас интересует?",
    answers: {
      a: "img/example/example11.jpg",
      b: "img/example/example21.jpg",
      c: "img/example/example31.jpg",
      d: "img/example/example25.jpg"
    }
  },
  {
    question: "Какой тип укладки Вас интересует?",
    answers: {
      a: "img/example/example11.jpg",
      b: "img/example/example21.jpg",
      c: "img/example/example31.jpg",
      d: "img/example/example25.jpg"
    }
  },
  
];

let currentQuestionIndex = 0;
const userAnswers = [];

// Функция для обновления прогресса
function updateProgressBar() {
  const progress = (currentQuestionIndex / (quizQuestions.length - 1)) * 100;
  progressBar.style.width = `${progress}%`;
  progressPercent.textContent = `${Math.round(progress)}%`;
}

// Функция для отображения вопроса
function showQuestion(questionIndex) {
  const currentQuestion = quizQuestions[questionIndex];
  const answers = [];

  // Генерация HTML для изображений ответов
  for (let letter in currentQuestion.answers) {
    answers.push(
      `<div class="quiz-slide swiper-slide">
                    <img src="${currentQuestion.answers[letter]}" data-value="${letter}" class="${userAnswers[questionIndex] === letter ? 'selected' : ''}">
                 </div>`
    );
  }

  // Отображение вопроса и ответов
  quizContainer.innerHTML = `
            <div class="question">${currentQuestion.question}</div>
            <div class="quiz swiper">
                <div class="quiz-wrapper swiper-wrapper">
                    ${answers.join('')}
                </div>
                <div class="quiz-pagination"></div>
                <div class="quiz-button-next"></div>
                <div class="quiz-button-prev"></div>
            </div>
        `;
  updateButtons();
  updateProgressBar();

  // Инициализация Swiper
  const swiper = new Swiper('.quiz', {
    pagination: {
      el: '.quiz-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.gallery-nav__next',
      prevEl: '.gallery-nav__prev',
    },
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: false,

    breakpoints: {
      451: {
        slidesPerView: 2,
      },
      651: {
        slidesPerView: 3,
      },
    }

  });

  

  // Обработка выбора ответа
  document.querySelectorAll('.quiz-slide img').forEach(img => {
    img.addEventListener('click', () => {
      document.querySelectorAll('.quiz-slide img').forEach(img => img.classList.remove('selected'));
      img.classList.add('selected');
      userAnswers[questionIndex] = img.getAttribute('data-value');
    });
  });
}

// Функция для обновления кнопок
function updateButtons() {
  prevButton.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
  nextButton.style.display = currentQuestionIndex === quizQuestions.length - 1 ? 'none' : 'inline-block';
  submitButton.style.display = currentQuestionIndex === quizQuestions.length - 1 ? 'inline-block' : 'none';
}

// Переход к следующему вопросу
function showNextQuestion() {
  if (userAnswers[currentQuestionIndex]) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  } else {
    alert('Пожалуйста, выберите ответ перед тем, как продолжить.');
  }
}

// Переход к предыдущему вопросу
function showPrevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
}

// Отображение результатов
function showResults() {
  const results = quizQuestions.map((question, index) =>
    `Вопрос ${index + 1}: ${question.answers[userAnswers[index]] || 'Ответ не выбран'}`);

  resultsContainer.innerHTML = `<h2>Результаты опроса</h2><ul><li>${results.join('</li><li>')}</li></ul>`;
}

// Привязка событий к кнопкам
nextButton.addEventListener('click', showNextQuestion);
prevButton.addEventListener('click', showPrevQuestion);
submitButton.addEventListener('click', showResults);

// Показ первого вопроса при загрузке
showQuestion(currentQuestionIndex);

})()