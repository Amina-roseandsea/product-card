import { Modal } from './Modal.js';
import { Form } from './Form.js';

// --- 1. Логика для формы подписки в футере ---
const subscribeForm = new Form('#subscribeForm');
const subscribeFormElement = document.getElementById('subscribeForm');

if (subscribeFormElement) {
  subscribeFormElement.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!subscribeForm.isValid()) {
      alert('Пожалуйста, введите корректный email!');
      return;
    }

    const formData = subscribeForm.getData();
    console.log(formData);

    subscribeForm.reset();
    alert('Спасибо за подписку!');
  });
}

// --- 2. Логика для модального окна и регистрации ---
let user = null;

// Создаём экземпляры классов Modal и Form
const myModal = new Modal('#modal', '#overlay');
const regForm = new Form('#registrationForm');

const openModalBtn = document.getElementById('openModalBtn');
const overlay = document.getElementById('overlay');
const registrationForm = document.getElementById('registrationForm');

// Открытие модалки
if (openModalBtn) {
  openModalBtn.addEventListener('click', () => {
    myModal.open();
  });
}

// Закрытие при клике на тёмный фон (overlay)
if (overlay) {
  overlay.addEventListener('click', () => {
    myModal.close();
  });
}

// Отправка формы регистрации
if (registrationForm) {
  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // 1. Проверка валидности через метод класса Form
    if (!regForm.isValid()) {
      alert('Регистрация отклонена: заполните все обязательные поля корректно!');
      return;
    }

    // 2. Проверка совпадения паролей
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert('Регистрация отклонена: введенные пароли не совпадают!');
      return;
    }

    // 3. Собираем данные через метод regForm.getData()
    const userData = regForm.getData();
    delete userData.confirmPassword;
    userData.createdOn = new Date();

    user = userData;
    console.log('Успешная регистрация, объект пользователя:', user);
    alert('Регистрация прошла успешно!');

    // 4. Очищаем форму и закрываем модалку через методы классов
    regForm.reset();
    myModal.close();
  });
}
