let intervalIds = [];
let intervalOne = setInterval(() => { console.log("hello") }, 1000);
intervalIds.push(intervalOne);
console.log(intervalIds);

let intervalTwo = setInterval(() => { console.log("world") }, 1000);
intervalIds.push(intervalTwo);
console.log(intervalIds);

setTimeout(() => { intervalIds.forEach(clearInterval) }, 5000);