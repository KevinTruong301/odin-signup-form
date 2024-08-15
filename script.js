const allInputs = document.querySelectorAll("input");

allInputs.forEach(input =>
    input.addEventListener("click", markClicked));

function markClicked() {
    this.classList.add('clicked');
}

const input_pwd = document.querySelector("input#pwd");
const input_cfm_pwd = document.querySelector("input#cfm-pwd");
const guide_cfm_pwd = document.querySelector("input#cfm-pwd + .input-guide");

input_cfm_pwd.addEventListener("input", e => comparePasswords(input_pwd, input_cfm_pwd));

function comparePasswords(input_1, input_2) {
    const pwd = input_1.value;
    const cfm_pwd = input_2.value;
    console.log(`Input 1: ${pwd}, Input 2: ${cfm_pwd}`);
    if(pwd == cfm_pwd) {
        input_2.classList.remove("notMatched");
        input_2.classList.add("matched");
        
        guide_cfm_pwd.textContent = "Please re-enter password";

    } else {
        input_2.classList.remove("matched");
        input_2.classList.add("notMatched");

        guide_cfm_pwd.textContent = "* Passwords do NOT match";
    }
}