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

//3 Сделать список. По клику на любой из элементов он выделяется красным цветом.
// Если один уже выделен, а кликнули по другому, то выделение с прошлого снимается,
// и ставится на тот, по которому кликнули.



let list = createList({ className: "list" });
let listItem = createListItem({ text: "Test", className: "li" });
let listItem1 = createListItem({ text: "Test1", className: "li" });
let listItem2 = createListItem({ text: "Test2", className: "li" });


document.body.appendChild(list);
list.appendChild(listItem);
list.appendChild(listItem1);
list.appendChild(listItem2);

list.addEventListener("click", (element) => {

    const selectedElement = document.querySelector(".selected");
    if (selectedElement !== null) {
        selectedElement.classList.remove("selected")
    }
    element.target.classList.add("selected");
})

function createList(props) {
    const className = props.className;
    const ul = document.createElement("ul");
    ul.className = className
    return ul
}

function createListItem(props) {
    const text = props.text || "";
    const className = props.className || "";
    const li = document.createElement("li");
    li.innerText = text;
    li.className = className;
    return li
}