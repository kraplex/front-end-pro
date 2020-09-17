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
    const logInForm = document.createElement("form");
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
        type: "password"
    })

    const okButton = createButton({
        text: "Send",
        disabled: true,
        className: "button"
    })

    const userData = {};
    userData.email = inputEmail.value;
    const arrayEmail = Array.from(userData.email);
    userData.password = inputPassword.value;
    const arrayPassword = Array.from(userData.password);

    logInForm.addEventListener("input", () => {
        let emailValid = isEmailValid(arrayEmail)
        function isEmailValid(arrayEmail) {
            let isAtInEmail = arrayEmail.some((item) => {
                if (item === "@")
                    return true
            })

            let isPointInEmail = arrayEmail.some((item) => {
                if (item === ".")
                    return true
            })

            if (isAtInEmail === true &&
                isPointInEmail === true &&
                (arrayEmail.indexOf("@") > 0) === true &&
                (arrayEmail.indexOf(".") - arrayEmail.indexOf("@") > 1) === true &&
                (arrayEmail.length - arrayEmail.indexOf(".") > 1) === true &&
                (inputEmail.value !== "")) {
                return true
            } else return false
        }

        let passwordValid = isPasswordValid(arrayPassword);
        function isPasswordValid(arrayPassword) {
            let isNumeralInPassword = arrayPassword.some((item) => {
                if (!Number.isNaN(+item)) {
                    return true
                }
            })

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

            if (isNumeralInPassword === true &&
                isSymbolInPassword === true &&
                (inputPassword.value !== "") &&
                (arrayPassword.length > 7)) {
                return true
            } else return false
        }

        if (emailValid === true) {
            inputEmail.style.outlineColor = ""
        } else inputEmail.style.outlineColor = "red"

        if (passwordValid === true) {
            inputPassword.style.outlineColor = ""
        } else inputPassword.style.outlineColor = "red"

        if (emailValid === true && passwordValid === true) {
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