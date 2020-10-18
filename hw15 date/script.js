
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
option1.innerText = "HH:MM:SS";
option2.innerText = "HH:MM:SS a.m./p.m.";

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
    const currentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return currentTime;
}

function dateFormatAmPm() {
    const date = new Date();
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const ampm = date.getHours() >= 12 ? "p.m." : "a.m."
    const currentTime = hours + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + ampm;
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
    if (event.target.value === "one") {
        console.log("one")
    } else (event.target.value === "two") 
        console.log("two")    
})




/* intervalIds.forEach(clearInterval);
        renderWatches(dateFormatSimple());
        let intervalId = setInterval(() => { renderWatches(dateFormatSimple()) }, 1000);
        intervalIds.push(intervalId); */
        
        /* intervalIds.forEach(clearInterval);
    renderWatches(dateFormatAmPm());
    let intervalId = setInterval(() => { renderWatches(dateFormatAmPm()) }, 1000);
    
    intervalIds.push(intervalId); */