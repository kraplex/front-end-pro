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
const amountOftagsWithNumber = isNumber(wrapper)
const amountOftagsWithString = isString(wrapper)

function isString(parent) {
    let sum = 0;
    for (let i = 0; i < parent.children.length; i++) {
        let element = +(wrapper.children[i].innerText);
        if (Number.isNaN(element)) {
            sum = sum + 1
        }
    } return sum
}

function isNumber(parent) {
    let sum = 0;
    for (let i = 0; i < parent.children.length; i++) {
        let element = +(wrapper.children[i].innerText);
        if (!Number.isNaN(element)) {
            sum = sum + 1
        }
    } return sum
}

if (knopka) {
    knopka.onclick = function () {
        result.innerText = `
        Общее кол-во всех тегов разных типов внутри wrapper: ${amountOfWrappersChildren};
        Кол-во тегов типа p внутри wrapper: ${amountOfTagsP};
        Кол-во тегов типа span внутри wrapper: ${amountOfTagsSpan};
        Кол-во тегов, в которых содержимое - число:  ${amountOftagsWithNumber};
        Кол-во тегов, в которых содержимое - строка: ${amountOftagsWithString}`
    }
}
