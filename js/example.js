// фунция для решения примера
const math = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// вызов функции
math(1, 2);


// фунция для вычитания

const deduct = function (firstNumber, secondNumber) {
  return secondNumber - firstNumber;
}

// вызов фунции вычитания
deduct(1, 2);


// Функция может вернуть результат, который будет передан в вызвавший её код.

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3



const user = {    // объект
  name: "John",   // под ключом "name" хранится значение "John"
  age: 30,        // под ключом "age" хранится значение 30
};

const name = "Vasya";
const name1 = name;
const age = 32;
const people  = { name: "Vasya", age: 32 };
const male = true;

const user = {
  name: "John"
};

user.name = "Pete"; // (изменение )

alert(user.name); // Pete

// объект myCar и свойства make, model, и year

const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;


// Получить доступ к свойству объекта можно следующим образом:

person.age // имяОбъекта.свойство

person["age"] // имяОбъекта["свойство"]

// Можно указывать параметры по умолчанию через равенство =, например:

function showMenu(title = "Без заголовка", width = 100, height = 200) {
  alert(title + ' ' + width + ' ' + height);
}

showMenu("Меню"); // Меню 100 200


// Параметры по умолчанию могут быть не только значениями, но и выражениями.

function sayHi(who = getCurrentUser().toUpperCase()) {
  alert('Привет, ' + who);
}

function getCurrentUser() {
  return 'Вася';
}

sayHi(); // Привет, ВАСЯ


//  template strings шаблонные строки

const name = "Tom";
const hello = `Hello ${name}`;
console.log(hello);     // Hello Tom

// Подобным образом в строку можно вставлять сразу несколько значений:

const name = "Tom";
let age = 37;
const userInfo = `${name} is ${age} years old`;
console.log(userInfo);      // Tom is 37 years old

// Также вместо скалярных значений могут добавляться свойства сложных объектов:

const tom ={
    name: "Tom",
    age: 22
}
const tomInfo = `${tom.name} is ${tom.age} years old`;
console.log(tomInfo);       // Tom is 22 years old

// Любо можно вставлять более сложные вычисляемые выражения:

function sum(x, y){
    return x + y;
}
let a = 5;
let b = 4;

const result = `${a} + ${b} = ${sum(a, b)}`;
console.log(result);    // 5 + 4 = 9


let expression = `${a} * ${b} = ${ a * b}`;
console.log(expression);    // 5 * 4 = 20
