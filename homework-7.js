// Задание 3: Функция вывода погоды
function showWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

// Проверка задания 3
showWeather("Астана", 18);


// Задание 4: Сравнение со скоростью света
const LIGHT_SPEED = 300000; // скорость света в км/с

function checkSpeed(speed) {
    if (speed > LIGHT_SPEED) {
        console.log("Сверхсветовая скорость");
    } else if (speed < LIGHT_SPEED) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

// Проверка задания 4
checkSpeed(350000); // Выведет: Сверхсветовая скорость
checkSpeed(150000); // Выведет: Субсветовая скорость
checkSpeed(300000); // Выведет: Скорость света


// Задание 5: Симуляция покупки товара
const product = "Увлажняющий мусс";
const price = 2750; // цена товара из задания сестры

function buyProduct(budget) {
    if (budget >= price) {
        console.log(`${product} приобретён. Спасибо за покупку!`);
    } else {
        let diff = price - budget;
        console.log(`Вам не хватает ${diff}₸, пополните баланс`);
    }
}

// Проверка задания 5
buyProduct(3000); // Денег хватает
buyProduct(2000); // Денег не хватает


// Задания 6 и 7: Дополнительная практика (переменные и функция)
const userAge = 25;
const userName = "Алия";
const isStudent = true;

function sayHello() {
    console.log("Практическая функция успешно выполнена!");
}
