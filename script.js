const pwd = document.getElementById("pwd");
const confirmPwd = document.getElementById("confirm-pwd");
const error = document.querySelector(".show-error");
const pwdNotMatch = "Password don't match";

confirmPwd.addEventListener("keyup", () => {
    if (confirmPwd.value === pwd.value) {
        error.innerText = "";
    }
    error.innerText = pwdNotMatch;
});
