// ==========================================
// Пункт 1: Инициализация базовых переменных
// ==========================================
const courseName = "Frontend Development";
let currentLesson = 6;
console.log(`Курс: ${courseName}, Занятие №${currentLesson}`);

// ==========================================
// Пункт 2: Простые арифметические операции
// ==========================================
const firstNumber = 10;
const secondNumber = 5;
const sumResult = firstNumber + secondNumber;
console.log(`Результат сложения пунктов 1-3: ${sumResult}`);

// ==========================================
// Пункт 3: Базовая проверка условий
// ==========================================
if (sumResult > 0) {
    console.log("Базовая инициализация скрипта прошла успешно.");
}

// ==========================================
// Пункт 4: Открытие Google при клике на кнопку
// ==========================================
// Находим кнопку в HTML по её ID
const googleBtn = document.getElementById('google-btn');

// Оборачиваем window.open в обработчик клика, чтобы сайт не открывался сам по себе
googleBtn.addEventListener('click', () => {
    window.open('https://google.com', '_blank');
});

// ==========================================
// Пункт 5: Вывод консоль лога и alert
// ==========================================
console.log('Скрипт main.js успешно запущен, задачи 4 и 5 выполнены!');
alert('Добро пожаловать! Задачи с выводом выполнены.');

// ==========================================
// Пункт 6: При наведении мыши на заголовок выводим его текст в консоль
// ==========================================
const mainTitle = document.getElementById('main-title');

mainTitle.addEventListener('mouseover', () => {
    console.log(mainTitle.innerText);
});

// ==========================================
// Пункт 7: При клике на кнопку переключаем класс dark-theme у body
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const pageBody = document.body;

themeToggleBtn.addEventListener('click', () => {
    pageBody.classList.toggle('dark-theme');
});
