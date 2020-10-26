const wrapper = document.querySelector("#wrapper");
if (wrapper) {

    const container = createContainer();
    const input = container.firstChild;
    const list = createList();

    list.style.display = "none";
    
    const listItem = createListItem(input.value);

    const buttonAdd = container.lastChild;
    wrapper.appendChild(container);
    wrapper.appendChild(list);



    buttonAdd.addEventListener("click", () => {
        list.style.display = "block"

        if (input.value) {
            const listItem = createListItem(input.value)
            list.appendChild(listItem);
        }
    })




    function createContainer() {
        const container = document.createElement("div")
        const input = document.createElement("input");
        const buttonAdd = document.createElement("button");
        buttonAdd.dataset = "buttonAdd";
        buttonAdd.style.borderRadius = "5px";
        buttonAdd.style.border = "1px solid blue"
        buttonAdd.innerText = "Add";

        container.appendChild(input);
        container.appendChild(buttonAdd);

        return container
    }


    function createListItem(value) {
        const listItem = document.createElement("li");

        const span = document.createElement("span");
        span.innerHTML = value;

        const buttonDelete = document.createElement("button");
        buttonDelete.innerText = "delete";

        listItem.appendChild(span);
        listItem.appendChild(buttonDelete);

        return listItem
    }

    function createList() {
        return document.createElement("ul");
    }

}
