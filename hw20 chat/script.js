const input = document.querySelector("#input");
const buttonSend = document.querySelector("#buttonSend");
const messagesField = document.querySelector("#messagesField");

const url = "https://jsonplaceholder.typicode.com/comments";

const usersMessages = [];

let botSadBye = false;

buttonSend.addEventListener("click", createDialog);

input.addEventListener('keydown', (event) => {
    if (event.key === "Enter" && input.value !== "")
    createDialog();
});

input.addEventListener("input", (event) => {
    buttonSend.disabled = event.target.value === "";
})

function createUsersMessage() {
    const p = document.createElement("p");
    p.className = "usersMessage";
    p.innerText = input.value;
    messagesField.appendChild(p);
    input.value = "";
    scrollingDown();
    buttonSend.disabled = true;
}

async function asyncCreateBotsMessage(msg) {
    try {
        let responce = await fetch(url);
        let data = await responce.json();
        const randomValue = getRandomInt(500);
        const p = document.createElement("p");
        p.className = "botsMessage";
        p.innerText = msg || data[randomValue].name;
        messagesField.appendChild(p);
        scrollingDown();
    } catch {
        console.error("function asyncCreateBotsMessage() did not work")
    }
};

function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}

function scrollingDown() {
    return messagesField.lastChild.scrollIntoView({ block: "center", behavior: "smooth" });
}

function createDialog() {
    let randomIntMaxThree = getRandomInt(3) * 1000;
    usersMessages.push(input.value);
    if (botSadBye) {
        createUsersMessage();
    } else if (usersMessages.some(item => item === "Ой все")) {
        createUsersMessage();
        setTimeout(() => asyncCreateBotsMessage("bye"), randomIntMaxThree);
        botSadBye = true;
    } else {
        createUsersMessage();
        setTimeout(asyncCreateBotsMessage, randomIntMaxThree);
    }
}
