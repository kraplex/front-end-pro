//1 Дано 5 квадратов, внутри каждого из которых изначально вписана цифра 0. При клике на любой квадрат цифра в нем увеличивается на один.

const elementsWithCounter = document.querySelectorAll(".wrapper div");

for (let item of elementsWithCounter) {
    item.addEventListener("click", () => {
        item.innerText = (+item.innerText + 1);
    })
}

//2 Дано 5 квадратов. Каждый по клику меняет цвет (синий -> зеленый -> желтый)

const elementsWithColors = document.querySelectorAll(".wrapper div");

let itemsClassList = ["blue", "green", "yellow", "orange"]

for (const item of elementsWithColors) {
    item.addEventListener("click", () => {
        let a = itemsClassList.indexOf(item.className);
        a == itemsClassList.length - 1 ? item.className = itemsClassList[0] : item.className = itemsClassList[(a + 1)];
    })
}

