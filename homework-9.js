import { socialComments } from './comments.js';

console.log("Исходный массив комментариев:", socialComments);

// ==================== УРОВЕНЬ 1 ====================

// Задание 2: Создание массива чисел от 1 до 10 и его фильтрация
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);

console.log("Исходный массив чисел:", numbers);
console.log("Отфильтрованный массив (>= 5):", filteredNumbers);


// Задание 3: Создание массива строк с мебелью и проверка наличия определенной сущности
const furniture = ["Диван", "Кресло", "Стол", "Шкаф", "Стул"];
const targetFurniture = "Стол";
const hasFurniture = furniture.includes(targetFurniture);

console.log("Список мебели:", furniture);
console.log(`Есть ли "${targetFurniture}" в массиве мебели?:`, hasFurniture);


// Задание 4: Написать функцию, которая аргументом принимает массив и переворачивает его
function reverseArray(arr) {
    return [...arr].reverse(); // Используем spread-оператор, чтобы не мутировать оригинал
}

console.log("--- Разбор применения функции для массива чисел ---");
console.log("Перевернутые числа:", reverseArray(filteredNumbers));

console.log("--- Разбор применения функции для массива мебели ---");
console.log("Перевернутая мебель:", reverseArray(furniture));


// ==================== УРОВЕНЬ 2 ====================

// Задание 7: Вывести в консоль массив тех комментариев, почта которых содержит ".com"
console.log("--- Задание 7: Комментарии с почтой .com ---");
const comComments = socialComments.filter(comment => comment.email.includes(".com"));
console.log(comComments);


// Задание 8: Перебрать массив, чтобы у id <= 5 был postId: 2, а у id > 5 был postId: 1
console.log("--- Задание 8: Изменение postId в зависимости от id ---");
const updatedComments = socialComments.map(comment => {
    return {
        ...comment,
        postId: comment.id <= 5 ? 2 : 1
    };
});
console.log(updatedComments);


// Задание 9: Перебрать массив, чтобы объекты состояли только из id и name
console.log("--- Задание 9: Объекты только с id и name ---");
const shortComments = socialComments.map(comment => {
    return {
        id: comment.id,
        name: comment.name
    };
});
console.log(shortComments);


// Задание 10: Добавление свойства isInvalid в зависимости от длины body (> 180)
console.log("--- Задание 10: Комментарии с проверкой длины body (isInvalid) ---");
const validatedComments = socialComments.map(comment => {
    return {
        ...comment,
        isInvalid: comment.body.length > 180
    };
});
console.log(validatedComments);


// ==================== УРОВЕНЬ 3 ====================

// Задание 11: Получить массив почт через метод .reduce()
console.log("--- Задание 11 (.reduce) ---");
const emailsViaReduce = socialComments.reduce((accumulator, comment) => {
    accumulator.push(comment.email);
    return accumulator;
}, []);
console.log(emailsViaReduce);


// Задание 11 (часть 2): Провернуть то же самое с помощью метода .map()
console.log("--- Задание 11 (.map) ---");
const emailsViaMap = socialComments.map(comment => comment.email);
console.log(emailsViaMap);


// Задание 12: Приведение массива почт к строке с помощью .toString()
console.log("--- Задание 12 (.toString) ---");
const emailsStringDefault = emailsViaMap.toString();
console.log(emailsStringDefault);


// Задание 12 (часть 2): Приведение к строке с помощью .join() с пробелом и запятой
console.log("--- Задание 12 (.join) ---");
const emailsStringCustom = emailsViaMap.join(", ");
console.log(emailsStringCustom);
