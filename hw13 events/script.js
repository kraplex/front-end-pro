//1 Дано 5 квадратов, внутри каждого из которых изначально вписана цифра 0. При клике на любой квадрат цифра в нем увеличивается на один.
//    * сделать чтоб внутри квадратов были кнопки +/- 

const elementsWithCounter = document.querySelectorAll(".wrapper div");

for (let item of elementsWithCounter) {
    item.addEventListener("click", () => {
        item.innerText = (+item.innerText + 1);
    })
}

//2 Дано 5 квадратов. Каждый по клику меняет цвет (синий -> зеленый -> желтый)

const elementsWithColors = document.querySelectorAll(".wrapper div");

let itemsClassList = ["blue", "green", "yellow"]

for (const item of elementsWithColors) {
    item.addEventListener("click", () => {
        for (let i = 0; i < itemsClassList.length; i++) {
            if (item.className == itemsClassList[i]) {
                item.className = itemsClassList[(i + 1)]
            } else if (item.className == itemsClassList[(itemsClassList.length - 1)]) {
                item.className = itemsClassList[0]
            } else {
                item.className = itemsClassList[(i + 2)]
            }
            return item.className
        }
    })
}