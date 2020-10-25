const wrapper = document.querySelector("#wrapper");

const input = document.createElement("input");

const list = document.querySelector("#list");



const buttonAdd = document.createElement("button");
buttonAdd.className = "button";
buttonAdd.innerText = "Add";

wrapper.appendChild(input);
wrapper.appendChild(buttonAdd);

console.log(typeof localStorage.getItem("text"));

buttonAdd.addEventListener("click", () => {

    if (input.value){
    localStorage.setItem("text", input.value)




    /* const listItem = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = input.value;
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "delete";
    listItem.appendChild(span);
    listItem.appendChild(buttonDelete);
    list.appendChild(listItem); */
    }   
})
