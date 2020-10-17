
const wrapper = document.querySelector(".wrapper");
wrapper.style.width = "200px";
wrapper.style.height = "100px";
wrapper.style.border = "1px solid blue";
const span = document.createElement("span");
wrapper.appendChild(span);

function watchesHMS() {
    const date = new Date();
    const currentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    span.innerText = currentTime;
}
watchesHMS();
setInterval(watchesHMS, 1000);

function watchesHM() {
    const date = new Date();
    const currentTime = date.getHours() + ":" + date.getMinutes();
    span.innerText = currentTime;
}


const select = document.createElement("select");
const option1 = document.createElement("option");
const option2 = document.createElement("option");
select.appendChild(option1);
select.appendChild(option2);
wrapper.appendChild(select);
option1.innerText = "HH:MM:SS";
option2.innerText = "HH:MM";