
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
option1.value = "format1";
option2.value = "format2";


setInterval(() => { renderWatches(dateFormatSimple()) }, 1000);

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
    const div = document.createElement("div");

    for (let i = 0; i < arr.length; i++) {
        if (div) { div.remove() }
        wrapper.appendChild(div);
        const span = document.createElement("span");
        div.appendChild(span);
        span.innerHTML = arr[i];
    }
}


/* select.addEventListener("change", (event) => {
    if (event.target.value === "format1") {
        setInterval(renderWatches(dateFormatSimple()), 1000)



    }else (event.target.value === "format2")
    setInterval(renderWatches(dateFormatAmPm()), 1000)
}) */