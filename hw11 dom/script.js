const wrapper = document.querySelector("#wrapper");
if (wrapper) {

  const formForCreateUser = createFormForCreateUser();
  wrapper.appendChild(formForCreateUser)

  function createInput(props) {
    const input = document.createElement("input");
    const placeholder = props.placeholder || "";
    const className = props.className || ""
    input.placeholder = placeholder;
    input.className = className;
    return input
  }

  function createOkButton(props) {
    const button = document.createElement("button");
    const buttonText = props.buttonText || "";
    const className = props.className || "";
    button.innerText = buttonText;
    button.className = className;
    return button
  }

  function createFormForCreateUser() {
    const welcomeText = document.createElement("span");
    welcomeText.innerText = "Enter User Name";

    const FormForCreateUser = document.createElement("div");
    FormForCreateUser.className = "FormForCreateUser";

    const inputCreateUser = createInput({
      placeholder: "Enter User Name",
      className: "inputcreateuser"
    })

    const okButton = createOkButton({
      buttonText: "Ok",
      className: "buttoncreateuser"
    })

    FormForCreateUser.appendChild(welcomeText)
    FormForCreateUser.appendChild(inputCreateUser)
    FormForCreateUser.appendChild(okButton)

    return FormForCreateUser
  }
}