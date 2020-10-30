const list = document.querySelector("#list");

if (localStorage.test  && localStorage.test.length > 2 ) {
    const arrayOfData = JSON.parse(localStorage.test);

    for (let i = 0; i < arrayOfData.length; i++) {
        const listItem = createListItem(arrayOfData[i]);
        list.appendChild(listItem);
    }
    list.style.display = "block";
}


const buttonAdd = document.querySelector("#buttonAdd");
buttonAdd.addEventListener("click", () => {
    if (input.value) {
        const input = document.querySelector("#input");

        list.style.display = "block";

        const listItem = createListItem(input.value);
        list.appendChild(listItem);

        input.value = "";
        hadlingLocalStorage();
    }
})

function hadlingLocalStorage() {
    localStorage.clear();
    const items = document.querySelectorAll("#list li span");
    const arr = [];
    for (let index of items) {
        arr.push(index.innerHTML)
    }
    const json = JSON.stringify(arr);
    localStorage.setItem("test", json);
}

function createListItem(value) {
    const listItem = document.createElement("li");

    const span = document.createElement("span");
    span.innerHTML = value;

    const buttonDelete = document.createElement("button");
    buttonDelete.id = "buttonDelete";
    buttonDelete.innerText = "delete";
    buttonDelete.addEventListener("click", (e) => {
        e.target.parentNode.remove();
        hadlingLocalStorage();
        if (localStorage.test.length < 3) {
            list.style.display = "none"
        }
    });

    listItem.appendChild(span);
    listItem.appendChild(buttonDelete);

    return listItem
}
