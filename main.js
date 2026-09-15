// Находим заголовок по ID
const mainTitle = document.getElementById('main-title');

// Пункт 6: При наведении мыши на заголовок выводим его текст в консоль
mainTitle.addEventListener('mouseover', () => {
    console.log(mainTitle.innerText);
});

// Находим кнопку и элемент body для переключения темы
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const pageBody = document.body;

// Пункт 7: При клике на кнопку переключаем класс dark-theme
themeToggleBtn.addEventListener('click', () => {
    pageBody.classList.toggle('dark-theme');
});
