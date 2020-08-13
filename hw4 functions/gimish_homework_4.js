console.info("Задание 1. Написать функцию, которая вычисляет площадь круга")
function getCirclesArea(radius) {
    return Math.PI * Math.pow(radius, 2)
}
let a = getCirclesArea(2);
console.log(a)


console.info("Задание 2 Написать функцию, которая вычисляет длину окружности")
function getCircleslenght(radius) {
    return 2 * Math.PI * radius
}
let b = getCircleslenght(3)
console.log(b)


console.info("Задание 3 Написать функцию, которая вычисляет среднее арифметическое двух чисел.")
function getAverage(m, n) {
    return (m + n) / 2
}
let i = getAverage(5, 7)
console.log(i)


console.info("Задание 4 Написать функцию calc(x, y, action), которая получает 3 аргумента: числа x и y, а также строку action. В переменной action может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной action.")
function calc(a, b, action) {
    let result;
    switch (action) {
        case "+": result = a + b
            break;

        case "-": result = a - b
            break;

        case "*": result = a * b
            break;

        case "/": result = a / b
            break;

        case "%": result = a % b
            break;

        case "^": result = Math.pow(a, b)
            break;

        default:
            console.log("Wrong symbol")
    }
    return result
}

let howMuch = calc(11, 2, "?");
console.log(howMuch)
