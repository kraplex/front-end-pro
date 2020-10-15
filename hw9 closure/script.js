//Написать функцию, которая принимает один параметр. 
//При первом вызове, она его запоминает, при втором - суммирует переданный параметр с тем, что передали первый раз и так далее.

/* sum(3) = 3
sum(5) = 8
sum(20) = 28 */

function add() {
    let num = 0;

    return function (param) {
        num += param
        console.log(num)
    }
   
}

let sum = add();

sum(3);
sum(5);
sum(20);



