const wrapper = document.querySelector("#wrapper");
if (wrapper) {

    const input = document.createElement("input");

    const buttonAdd = document.createElement("button");
    buttonAdd.className = "button";
    buttonAdd.innerText = "Add";

    const list = document.createElement("ul");


    wrapper.appendChild(input);
    wrapper.appendChild(buttonAdd);
    wrapper.appendChild(list);


    if (localStorage.test) {

        const arrayOfData = JSON.parse(localStorage.test);

        for (let i=0; i<arrayOfData.length; i++) {
            
            const listItem = document.createElement("li");
            const span = document.createElement("span");
            const buttonDelete = document.createElement("button");
            buttonDelete.innerHTML = "delete";
            listItem.appendChild(span);
            listItem.appendChild(buttonDelete);
            span.innerHTML = arrayOfData[i];
            list.appendChild(listItem);
            
            buttonDelete.addEventListener("click", (e) => {
                e.target.parentNode.remove();
                
                const items = document.querySelectorAll("ul li span");
                const arr = [];
                for (let index of items) {
                    arr.push(index.innerHTML)
                }
                const json = JSON.stringify(arr);
                localStorage.setItem("test", json)
            });
                
        } 
    }


    buttonAdd.addEventListener("click", () => {
        if (input.value) {
            
            const listItem = document.createElement("li");
            const span = document.createElement("span");
            const buttonDelete = document.createElement("button");
            buttonDelete.innerHTML = "delete";
            listItem.appendChild(span);
            listItem.appendChild(buttonDelete);
            span.innerHTML = input.value
            list.appendChild(listItem)
            
            input.value = "";
            
            localStorage.clear();
            const items = document.querySelectorAll("ul li span");
            const arr = [];
            for (let index of items) {
                arr.push(index.innerHTML)
            }
            const json = JSON.stringify(arr);
            localStorage.setItem("test", json)
            
            
            buttonDelete.addEventListener("click", (e) => {
                e.target.parentNode.remove();
                
                const items = document.querySelectorAll("ul li span");
                const arr = [];
                for (let index of items) {
                    arr.push(index.innerHTML)
                }
                const json = JSON.stringify(arr);
                localStorage.setItem("test", json)
            });
        }
    })







}







