
const logInForm = createLogInForm({
    className: "logInForm"
});

document.body.appendChild(logInForm);

function createInput(props) {
    const input = document.createElement("input");
    const type = props.type || "";
    const placeholder = props.placeholder || "";
    const className = props.className || "";
    input.placeholder = placeholder;
    input.className = className;
    input.type = type;

    return input
}

function createButton(props) {
    const button = document.createElement("button");
    const text = props.text || "";
    button.innerText = text;
    const className = props.className || "";
    button.className = className;
    const disabled = props.disabled || false;
    button.disabled = disabled

    return button
}

function createLogInForm(props) {
    const logInForm = document.createElement("div");
    const className = props.className || "";
    logInForm.className = className;

    const inputLogin = createInput({
        className: "input",
        placeholder: "E-mail",
        type: "text"
    })


    const inputPassword = createInput({
        className: "input",
        placeholder: "Password",
        type: "password"
    })

    const okButton = createButton({
        text: "Send",
        disabled: true,
        className: "button"
    })

    logInForm.addEventListener("input", () => {

        const userData = {};
        userData["e-mail"] = inputLogin.value;
        const arrayEmail = Array.from(userData["e-mail"]);


        userData["password"] = inputPassword.value;
        const arrayPassword = Array.from(userData["password"]);

        let isNumeral = arrayPassword.some((item) => {
            if (!Number.isNaN(item)) {
                return true
            }
        })

        let isAt = arrayEmail.some((item) => {
            if (item === "@")
                return true
        })

        let isPoint = arrayEmail.some((item) => {
            if (item === ".")
                return true
        })

        if (/* isAt === true &&
            isPoint === true &&
            (arrayEmail.indexOf(".") - arrayEmail.indexOf("@") > 1) === true &&
            (arrayEmail.length - arrayEmail.indexOf(".") > 1) === true &&
            (inputLogin.value !== "" && inputPassword.value !== "") === true && */
            (arrayPassword.length > 8) === true && isNumeral !== false) { okButton.disabled = false }


    /*    
        userData["password"] = inputPassword.value;
 */







    /*  if (inputLogin.value !== "" && inputPassword.value !== "") {
         okButton.disabled = false
     } else okButton.disabled = true */
});




okButton.addEventListener("click", () => {
    inputLogin.value = "";
    inputPassword.value = "";
    okButton.disabled = true;

})

logInForm.appendChild(inputLogin);
logInForm.appendChild(inputPassword);
logInForm.appendChild(okButton);

return logInForm
}