const input = document.querySelector("#input");
const buttonSend = document.querySelector("#buttonSend");
const messagesField = document.querySelector("#messagesField");

const url = "https://jsonplaceholder.typicode.com/comments";

const usersMessages = [];
let botSadBye = false;

buttonSend.addEventListener("click", () => {
    usersMessages.push(input.value);
    if (input.value === "secret code") {
        createUsersMessage();
        setTimeout(createBotsMessage, 2000);
    } else if (botSadBye) {
        createUsersMessage();
    } else if (usersMessages.some(item => item === "ok")) {
        createUsersMessage();
        setTimeout(() => createBotsMessage("bye"), 2000);
        botSadBye = true;
    } else {
        createUsersMessage();
        setTimeout(createBotsMessage, 2000);
    }
})

function createUsersMessage() {
    const p = document.createElement("p");
    p.innerText = input.value;
    p.style.marginLeft = "200px";
    messagesField.appendChild(p);
    input.value = "";
}

function createBotsMessage(msg) {
    fetch(url)
        .then(responce => responce.json())
        .then((data) => {
            const randomValue = Math.ceil(Math.random() * 500);
            const p = document.createElement("p");
            p.innerText = msg || data[randomValue].name;
            messagesField.appendChild(p);
            input.value = "";
        })
        .catch(err => console.error(err));
}
