const wrapper = document.querySelector("#wrapper");
if (wrapper) {
  const list = createList({ className: "list" });
  const form = createForm((value) => {
    const li = createListItem({ text: value });
    list.appendChild(li);
  });

  wrapper.appendChild(form);
  wrapper.appendChild(list);


  const usersList = ["first", "second", "third"];

  for (let i = 0; i < usersList.length; i++) {
    let user = createListItem({ text: usersList[i] })
    list.appendChild(user)
  }


  function createInput(props) {
    const input = document.createElement("input");
    input.style.margin = "20px";
    const placeholder = props.placeholder || "";
    const className = props.className || ""
    input.placeholder = placeholder;
    input.className = className;

    return input
  }

  function createButton(props) {
    const button = document.createElement("button");
    const disabled = props.disabled || false;
    button.disabled = disabled;
    const buttonText = props.buttonText || "";
    const className = props.className || "";
    button.innerText = buttonText;
    button.className = className;
    button.type = "button";

    return button
  }

  function createList(props) {
    const list = document.createElement("ul");
    className = props.className || "";
    list.className = className;

    return list
  }

  function createListItem(props) {
    let userName = document.createElement("span");
    let text = props.text || "";
    userName.innerText = text;

    const listItem = document.createElement("li");
    listItem.style.border = "1px solid grey";
    listItem.style.borderRadius = "3px";
    listItem.style.margin = "10px";
    const edit = document.createElement("button")
    edit.innerText = "Edit";
    edit.style.margin = "10px"
    edit.addEventListener("click", () => {
      const newUserName = prompt("New name?");
      userName.innerText = newUserName === null ?
        userName.innerText = userName.innerText : userName.innerText = newUserName
    })

    const del = document.createElement("button")
    del.innerText = "Delete";
    del.style.margin = "10px";
    del.addEventListener("click", () => {
      const removeListItem = confirm("Delete user?");
      if (removeListItem === true) {
        listItem.remove()
      }
    })

    listItem.appendChild(userName);
    listItem.appendChild(edit);
    listItem.appendChild(del);

    return listItem
  }

  function createForm(addUser) {
    const welcomeText = document.createElement("span");
    welcomeText.innerText = "Enter User Name";
    welcomeText.style.margin = "10px";

    const okButton = createButton({
      buttonText: "Ok",
      className: "buttoncreateuser",
      disabled: true
    })

    const inputCreateUser = createInput({
      placeholder: "Enter User Name",
      className: "inputcreateuser"
    })

    okButton.addEventListener("click", () => {
      if (typeof addUser === "function") {
        addUser(inputCreateUser.value);
        inputCreateUser.value = "";
        okButton.disabled = true;
        inputCreateUser.focus();
      }
    });

    inputCreateUser.addEventListener("input", (event) => {
      const value = event.target.value;
      okButton.disabled = value === "";
    });

    const FormForCreateUser = document.createElement("div");
    FormForCreateUser.className = "FormForCreateUser";

    FormForCreateUser.appendChild(welcomeText)
    FormForCreateUser.appendChild(inputCreateUser)
    FormForCreateUser.appendChild(okButton)

    return FormForCreateUser
  }
}