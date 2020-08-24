/* При нажатии на кнопку в тег с айдишником result нужно вывести:

Общее кол-во всех тегов разных типов внутри wrapper
Кол-во тегов типа p внутри wrapper
Кол-во тегов типа span внутри wrapper
Кол-во тегов, в которых содержимое - число
Кол-во тегов, в которых содержимое - строка */


const knopka = document.querySelector(".button")
const result = document.querySelector("#result")
const wrapper = document.getElementById("wrapper")
const amountOfWrappersChildren = wrapper.children.length
const amountOfTagsP = document.querySelectorAll('#wrapper p').length
const amountOfTagsSpan = document.querySelectorAll('#wrapper span').length

/*function amountOfTags(tag, parent) {
    const amount = 0
    for (i = 0; i < parent.length; i++) {
        if (parent[i] === "tag") {
            amount++
        }
    } return amount
}*/


console.log()



 function isString(parent) {
    let sum = 0;
    for (i = 0; i < parent.children.length; i++) {        
        if (typeof (Number(parent.children[i].innerText)) !== "number") {
            sum = sum + 1
        }
    } return sum
}

const strings = isString(wrapper)
console.log(strings) 

const y = Number(wrapper.children[3].innerText)
console.log(typeof y)



if (knopka) {
    knopka.onclick = function () {
        result.innerText = `
        Общее кол-во всех тегов разных типов внутри wrapper: ${amountOfWrappersChildren};
        Кол-во тегов типа p внутри wrapper: ${amountOfTagsP};
        Кол-во тегов типа span внутри wrapper: ${amountOfTagsSpan};`
    }
}
