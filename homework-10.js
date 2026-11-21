import { products } from './productsData.js';

// ПУНКТ 4: Используя метод .reduce(), получаем объект { Название: Описание }
const productDescriptions = products.reduce((acc, product) => {
  acc[product.title] = product.text;
  return acc;
}, {});

console.log("Объект с описаниями товаров через .reduce():", productDescriptions);


// ПУНКТ 3: Функция создания HTML-шаблона для ОДНОЙ карточки
function createCardTemplate(product) {
  // Генерируем элементы списка внутри состава товара
  const compoundItems = product.compound.map(item => `<li>${item}</li>`).join('');

  // Возвращаем готовую HTML строчку по твоей верстке
  return `
    <li class="product-card">
      <img src="${product.imgSrc}" alt="${product.alt}" />
      <span class="tag">${product.tag}</span>
      <h2>${product.title}</h2>
      <p class="main-text">${product.text}</p>
      <span class="main-text compound">Состав:</span>
      <ul>
        ${compoundItems}
      </ul>
      <div class="price-container">
        <b class="price">Цена:</b>
        <span class="sum">${product.price}</span>
      </div>
    </li>
  `;
}


// ПУНКТ 5*: Функция Рендеринга карточек на страницу
function renderLimitedCards(cardsArray) {
  const productsList = document.querySelector('.product-list');
  
  if (!productsList) return;

  // Собираем все шаблоны карточек в одну большую HTML-строку
  const cardsHTML = cardsArray.map(product => createCardTemplate(product)).join('');
  
  // Вставляем на страницу
  productsList.innerHTML = cardsHTML;
}


// ПУНКТ 5*: Функция запроса количества через prompt с валидацией (защитой от дурака)
function getCardsCount() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = parseInt(userInput, 10);

  // Проверка: если введено не число, или меньше 1, или больше 5
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Некорректный ввод! Пожалуйста, введите число от 1 до 5.");
    return getCardsCount(); // Запускаем заново, если ввели фигню
  }

  return count;
}


// ЗАПУСК ЛОГИКИ ПРИ СТАРТЕ СТРАНИЦЫ
const countToDisplay = getCardsCount(); // 1. Получаем проверенное число
const filteredProducts = products.slice(0, countToDisplay); // 2. Обрезаем массив данных до нужного количества
renderLimitedCards(filteredProducts); // 3. Выводим карточки на экран
