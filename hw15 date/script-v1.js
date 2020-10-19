const wrapper = document.querySelector(".wrapper");
wrapper.style.width = "200px";
wrapper.style.height = "100px";
wrapper.style.border = "1px solid blue";

const select = document.createElement("select");

const option1 = document.createElement("option");
const option2 = document.createElement("option");

select.appendChild(option1);
select.appendChild(option2);
wrapper.appendChild(select);

option1.innerText = "hh:mm:ss";
option2.innerText = "hh:mm:ss a.m./p.m.";

option1.value = "one";
option2.value = "two";


const div = document.createElement("div");
wrapper.appendChild(div);

renderWatches(dateFormatSimple());

let intervalIds = [];
let intervalId = setInterval(() => { renderWatches(dateFormatSimple()) }, 1000);
intervalIds.push(intervalId);

function dateFormatSimple() {
    const date = new Date();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    const currentTime = date.getHours() + ":" + minutes + ":" + seconds;
    return currentTime;
}

function dateFormatAmPm() {
    const date = new Date();
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    const ampm = date.getHours() >= 12 ? "p.m." : "a.m."
    const currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    return currentTime;
}

function renderWatches(string) {
    const arr = Array.from(string);

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    for (let i = 0; i < arr.length; i++) {
        const span = document.createElement("span");
        div.appendChild(span);
        span.innerHTML = arr[i];
    }
}

select.addEventListener("change", (event) => {

    intervalIds.forEach(clearInterval);
    intervalIds.splice(0, intervalIds.length);

    if (event.target.value === "one") {
        renderWatches(dateFormatSimple());
        let intervalId = setInterval(() => { renderWatches(dateFormatSimple()) }, 1000);
        intervalIds.push(intervalId);


    } else {
        renderWatches(dateFormatAmPm());
        let intervalId = setInterval(() => { renderWatches(dateFormatAmPm()) }, 1000);
        intervalIds.push(intervalId);
    }
})