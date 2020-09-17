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

    const inputEmail = createInput({
        className: "input",
        placeholder: "E-mail",
        type: "text"
    })

    const inputPassword = createInput({
        className: "input",
        placeholder: "Password",
        type: "text"
    })

    const okButton = createButton({
        text: "Send",
        disabled: true,
        className: "button"
    })

    const userData = {};

    logInForm.addEventListener("input", () => {

        userData["e-mail"] = inputEmail.value;
        const arrayEmail = Array.from(userData["e-mail"]);

        userData["password"] = inputPassword.value;
        const arrayPassword = Array.from(userData["password"]);

        let isAtInEmail = arrayEmail.some((item) => {
            if (item === "@")
                return true
        })

        let isPointInEmail = arrayEmail.some((item) => {
            if (item === ".")
                return true
        })

        let isNumeralInPassword = arrayPassword.some((item) => {
            if (!Number.isNaN(+item)) {
                return true
            }
        })


        //------ ХОЧУ ДОБАВИТЬ ПРОВЕРКУ НА ПУСТОЙ СИМВОЛ------

        /* let noEmptyInEmail = arrayEmail.some((item) => {
            if (item === "") { return false }
            else return true   
        }) */

        /* let noEmptyInPassword = arrayPassword.some((item) => {
            if (item === "") { return false }
            else return true   
        }) */


        let isSymbolInPassword = arrayPassword.some((item) => {
            if (item === "@" ||
                item === "$" ||
                item === "#" ||
                item === "!" ||
                item === "?" ||
                item === "&") {
                return true
            }
        })

        if (isAtInEmail === true &&
            isPointInEmail === true &&
            //noEmptyInEmail === true &&
            (arrayEmail.indexOf(".") - arrayEmail.indexOf("@") > 1) === true &&
            (arrayEmail.length - arrayEmail.indexOf(".") > 1) === true &&
            (inputEmail.value !== "")) {
            inputEmail.style.outlineColor = ""
        } else inputEmail.style.outlineColor = "red"

        if (isNumeralInPassword === true &&
            isSymbolInPassword === true &&
            //noEmptyInPassword === true
            (inputPassword.value !== "") &&
            (arrayPassword.length > 7)) {
            inputPassword.style.outlineColor = ""
        } else inputPassword.style.outlineColor = "red"

        if (isAtInEmail === true &&
            isPointInEmail === true &&
            //noEmptyInEmail === true &&
            (arrayEmail.indexOf(".") - arrayEmail.indexOf("@") > 1) === true &&
            (arrayEmail.length - arrayEmail.indexOf(".") > 1) === true &&
            (inputEmail.value !== "" && inputPassword.value !== "") === true &&
            (arrayPassword.length > 7) === true && isNumeralInPassword !== false &&
            //noEmptyInPassword === true
            isSymbolInPassword === true) {
            okButton.disabled = false;
        } else okButton.disabled = true
    });

    okButton.addEventListener("click", () => {
        inputEmail.value = "";
        inputPassword.value = "";
        okButton.disabled = true;
        console.log(userData)
    })

    logInForm.appendChild(inputEmail);
    logInForm.appendChild(inputPassword);
    logInForm.appendChild(okButton);

    return logInForm
}