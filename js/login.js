//***************************************Login********************************************//
let email = document.querySelector(".email");
let pass = document.querySelector(".password");
let loginBtn = document.querySelector(".registerBtn");
let error = document.querySelector(".error");

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    const userFound = users.some((user) => {
        return user.email === email.value.trim() && user.password === pass.value;
    });
    
    if (userFound) {
        window.location.href = "index.html";
    } else {
        error.classList.remove("hidden");
        error.classList.add("block");
    }
});
