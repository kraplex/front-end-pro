console.info("Задание 1 Вывести на страницу в одну строку через запятую числа от 10 до 20")
let x = "";
let i
for (i = 10; i <= 20; i++) {
    x += i + ","
} console.log(x)


console.info("Задание 2 Вывести квадраты чисел от 10 до 20")
for (i = 10; i >= 10 && i <= 20; i++) {
    console.log(Math.pow(i, 2))
}


console.info("Задание 3 Вывести таблицу умножения на 7")
let a = 7;
let b = 1;
while (b <= 10) {
    console.log(`${a}*${b}=${a * b}`)
    b++
}


console.info("Задание 4 Найти сумму всех целых чисел от 1 до 15")
let sum = 0;
for (numb = 1; numb <= 15; numb++) {
    sum += numb;
}
console.log(sum)


console.info("Задание 5 Найти произведение всех целых чисел от 15 до 35")
let multi = 15;
for (c = 16; c <= 35; c++) {
    multi *= c;
}
console.log(multi)


console.info("Задание 6 Найти среднее арифметическое всех целых чисел от 1 до 500")
let mid = 0;
for (d = 1; d <= 500; d++) {
    mid += d;
}
console.log(mid / 500)


console.info("Задание 7 Вывести на страницу сумму только четных чисел в диапазоне от 30 до 80")
let sumEven = 0;
for (even = 30; even <= 80; even++) {
    if (even % 2 === 0) {
        sumEven += even
    }
}
console.log(sumEven)


console.info("Задание 8 Вывести на страницу все числа в диапазоне от 100 до 200 кратные 3")
for (everThree = 100; everThree <= 200; everThree++) {
    if (everThree % 3 === 0) {
        console.log(everThree)
    }
}


console.info("Задание 9 Дано натуральное число 20. Найти и вывести на страницу все его делители")
let natur = 20;
let count = 0;
let sumDel = 0;
for (del = 1; del <= 20; del++) {
    if (natur % del === 0) {
        console.log(del)//вывести на страницу все его делители
        count++
    }
}
console.info("Определить количество его четных делителей = количество раз выполнения условия if")
console.log(count)

for (del = 1; del <= 20; del++) {
    if (natur % del === 0 && del % 2 === 0) {
        sumDel += del
    }
}
console.info("Найти сумму его четных делителей")
console.log(sumDel)


console.info("Задание 10 Напечатать полную таблицу умножения от 1 до 10")
for (m = 1; m <= 10; m++) {
    for (n = 1; n <= 10; n++) {
        console.log(`${m}*${n}=${m * n}`)
    }
    console.log("")
}


console.info("Задание 11 Игра “Угадай число”. Сгенерировать случайное число в диапазоне от 0 до 10. Пользователь должен угадать число.")
const secret = (Math.random() * 10);
while (true) {
    let z = prompt("Введи задуманное машиной число от 1 до 10")
    if (z === null || +z === Math.ceil(secret)) {
        break
    }
}
