// task 1

function minNumber(a, b) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
minNumber(8, 6);
minNumber(2, 20);
minNumber(6, 6);

// task 2

function number() {
    let num = prompt("Введите цифру");

    if (num % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
}
number();

// task 3.1

function num(digit) {
    console.log(digit**2);
}
num(3);

// task 3.2

function num(digit) {
    return digit**2;
}
let result = num(2);
console.log(result);

// task 4

function checkAge(question, answer) {

    let userQuestion = prompt(question);
    let userAnswer = answer;
    if (userAnswer > 0 && userAnswer <= 12) {
      console.log("Привет, друг!");
    } else {
      console.log("Добро пожаловать!");
    }
  }
  checkAge ("Сколько тебе лет?", 5);
  checkAge ("Сколько тебе лет?", 15);

// task 5

function ifNumber(a, b) {
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        return "Одно или оба значения не являются числом";
    } else {
        return a * b;
    }
}
 console.log(ifNumber('apple', 3));
 console.log(ifNumber('dog', 'cat'));
 console.log(ifNumber(5, 10));

// task 6

function checkNumber(question, num) {
  let userQuestion = prompt(question);
  if (typeof num == "number") {
    return num ** 3;
  } else {
    return "Переданный параметр не является числом";
  }
}

console.log(checkNumber("Введите любое значение", 2));
console.log(checkNumber("Введите любое значение", 5));
console.log(checkNumber("Введите любое значение", "string"));
console.log(checkNumber("Введите любое значение", "number"));

  
