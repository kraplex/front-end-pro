/* function makeCounter() {
    let count = 0;

    return function () {
        return count++; // есть доступ к внешней переменной "count"
    };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
 */


//Написать функцию, которая принимает один параметр. 
//При первом вызове, она его запоминает, при втором - суммирует переданный параметр с тем, что передали первый раз и так далее.

/* sum(3) = 3
sum(5) = 8
sum(20) = 28 */

function sum(n) {
    return function(r){
        return n + r
    }
}
 
const t = sum(3)
const res = t(0)
console.log(res)