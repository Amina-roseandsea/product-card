const statusText = document.getElementById('status-text');
const usersList = document.getElementById('users-list');
const loadAllBtn = document.getElementById('load-all');
const deleteAllBtn = document.getElementById('delete-all');

const STORAGE_KEY = 'usersData';
let usersArray = [];

// Функция имитации задержки загрузки (Promise + setTimeout)
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Сохранение текущего списка в localStorage
function syncStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usersArray));
}

// Запрос данных из JSON-файла
async function fetchUsersFromFile() {
  const response = await fetch('users.json');

  if (!response.ok) {
    throw new Error('Ошибка при загрузке данных');
  }

  const data = await response.json();
  return data.users;
}

// Отрисовка карточек пользователей на странице
function renderCards() {
  usersList.innerHTML = '';

  if (usersArray.length === 0) {
    usersList.innerHTML = '<p>Карточек пользователей нет.</p>';
    return;
  }

  usersArray.forEach((user) => {
    const card = document.createElement('div');
    card.className = 'user-card';

    card.innerHTML = `
      <h3>${user.name} ${user.surname}</h3>
      <p><b>ID:</b> ${user.id}</p>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>Возраст:</b> ${user.age}</p>
      <p><b>Город:</b> ${user.city}</p>
      <button class="remove-card-btn" data-id="${user.id}">Удалить</button>
    `;

    usersList.appendChild(card);
  });
}

// Запуск при открытии страницы
async function startApp() {
  const cachedData = localStorage.getItem(STORAGE_KEY);

  // Если данные уже есть в localStorage — берем их без запроса
  if (cachedData !== null) {
    usersArray = JSON.parse(cachedData);
    statusText.textContent = '';
    renderCards();
    return;
  }

  // Если данных нет — показываем статус и делаем запрос с задержкой
  statusText.textContent = 'Данные загружаются';

  try {
    await wait(1500);
    usersArray = await fetchUsersFromFile();
    syncStorage();
    statusText.textContent = '';
    renderCards();
  } catch (error) {
    console.error(error);
    statusText.textContent = 'Ошибка при загрузке данных';
  }
}

// Удаление одной карточки через метод .filter()
usersList.addEventListener('click', (event) => {
  if (!event.target.classList.contains('remove-card-btn')) return;

  const idToRemove = Number(event.target.dataset.id);
  usersArray = usersArray.filter((user) => user.id !== idToRemove);

  syncStorage();
  renderCards();
});

// Кнопка "Удалить все карточки"
deleteAllBtn.addEventListener('click', () => {
  if (usersArray.length === 0) {
    statusText.textContent = 'Все карточки уже удалены.';
    return;
  }

  usersArray = [];
  syncStorage();
  statusText.textContent = 'Все карточки удалены.';
  renderCards();
});

// Кнопка "Получить все карточки"
loadAllBtn.addEventListener('click', async () => {
  statusText.textContent = 'Данные загружаются';

  try {
    await wait(800);
    const fullUsers = await fetchUsersFromFile();

    // Если все пользователи уже отображены на экране
    if (usersArray.length === fullUsers.length) {
      statusText.textContent = 'У вас уже отображены все пользователи!';
      return;
    }

    usersArray = fullUsers;
    syncStorage();
    statusText.textContent = '';
    renderCards();
  } catch (error) {
    console.error(error);
    statusText.textContent = 'Ошибка при загрузке данных';
  }
});

startApp();
