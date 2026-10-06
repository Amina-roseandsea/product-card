// Задание 3: Создание объекта профиля пользователя
const userProfile = {
    firstName: "Amina",
    email: "amina-roseandsea@gmail.com",
    age: 17,
    country: "Turkey",
    status: "active",
    hobbies: ["drawing",]
};

console.log("Задание 3 - Профиль пользователя:", userProfile);


// Задание 4: Создание объекта автомобиля и привязка владельца
const car = {
    make: "Porsche",
    model: "Macan",
    year: 2024,
    color: "Burgundy",
    boxType: "Automatic"
};

// Добавление свойства отдельной строкой, где значением выступает целый объект
car.owner = userProfile;

console.log("Задание 4 - Данные автомобиля с владельцем:", car);


// Задание 5: Функция для проверки и добавления максимальной скорости
function checkAndAddMaxSpeed(carObj) {
    if ("maxSpeed" in carObj) {
        return; // Если свойство уже есть, функция просто прерывает работу
    } else {
        carObj.maxSpeed = 260; // Если свойства нет, создаем его со значением
    }
}

// Проверка работы функции
checkAndAddMaxSpeed(car);
console.log("Задание 5 - Автомобиль после проверки скорости:", car);


// Задание 6: Функция для динамического вывода свойства объекта по ключу
function getPropertyByKey(obj, propertyName) {
    console.log(`Значение свойства "${propertyName}":`, obj[propertyName]);
}

// Проверка вывода разных свойств
getPropertyByKey(car, "model");
getPropertyByKey(userProfile, "email");


// Задание 7: Массив с названиями товаров из каталога (простые строки)
const productNames = [
    "Увлажняющий мусс",
    "Увлажняющая маска",
    "Гель для умывания",
    "Подарочный набор №1"
];

console.log("Задание 7 - Список товаров:", productNames);


// Задание 8: Массив объектов на основе реальных карточек из index.html
const shopProducts = [
    { title: "Увлажняющий мусс", tag: "для нормальной кожи", price: 2750, isAvailable: true },
    { title: "Увлажняющая маска", tag: "для нормальной кожи", price: 3500, isAvailable: true },
    { title: "Гель для умывания", tag: "для нормальной кожи", price: 1650, isAvailable: false }
];

// Используем метод push для добавления новой карточки товара в конец массива
shopProducts.push({ title: "Подарочный набор №5", tag: "для нормальной кожи", price: 7520, isAvailable: true });

console.log("Задание 8 - Обновленный массив товаров:", shopProducts);


// Задание 9: Создание второго массива товаров и их объединение через spread-оператор
const premiumProducts = [
    { title: "Тоник для лица", tag: "для сухой кожи", price: 2100, isAvailable: true },
    { title: "Сыворотка с витаминами", tag: "для всех типов", price: 4300, isAvailable: true }
];

// Объединяем два массива в один общий каталог
const fullCatalog = [...shopProducts, ...premiumProducts];

console.log("Задание 9 - Полный объединенный каталог:", fullCatalog);


// Задание 10: Использование метода map для маркировки дорогих/эксклюзивных товаров
function markExclusiveProducts(productsArray) {
    return productsArray.map(item => {
        // Создаем копию объекта товара, чтобы не менять исходный массив напрямую
        const itemCopy = { ...item };
        
        // Логика: если товар стоит больше 3000 рублей/тенге, помечаем его как редкий/эксклюзивный
        if (itemCopy.price > 3000) {
            itemCopy.isRare = true;
        } else {
            itemCopy.isRare = false;
        }
        
        return itemCopy;
    });
}

// Проверяем работу метода map
const finalCatalogWithTags = markExclusiveProducts(fullCatalog);
console.log("Задание 10 - Итоговый каталог с метками эксклюзивности:", finalCatalogWithTags);
