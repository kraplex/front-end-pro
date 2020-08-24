function makeCounter() {
    let count = 0;

    return function () {
        return count++; // есть доступ к внешней переменной "count"
    };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2



//Написать функцию, которая принимает один параметр. 
//При первом вызове, она его запоминает, при втором - суммирует переданный параметр с тем, что передали первый раз и так далее.

/* sum(3) = 3
sum(5) = 8
sum(20) = 28 */

function createCounter() {
    let sum = 0;
    function count(number) {
        return sum += number
    } return count
}

console.log(createCounter(3));
console.log(createCounter(5));
