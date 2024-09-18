let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let signupSubmit = document.querySelector(".signup-submit");
let loginSubmit = document.querySelector(".login-submit");

// sign up

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
signupSubmit.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
})



// login
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});




document.addEventListener("DOMContentLoaded", function () {
    // Validation function for both forms
    function validateForm(inputs) {
        let isValid = true;
        inputs.forEach((input) => {
            if (input.value.trim() === "") {
                isValid = false;
                input.style.border = "2px solid red"; // Indicate error visually
            } else {
                input.style.border = ""; // Reset the border if filled
            }
        });
        return isValid;
    }

    // Handling the login form submission
    const loginForm = document.querySelector(".login-box");
    const loginBtn = loginForm.querySelector(".login-submit");

    loginBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission
        const loginInputs = loginForm.querySelectorAll(".ele");

        if (validateForm(loginInputs)) {
            window.location.href = "homepage.html"; // Redirect if valid
        } else {
            alert("Please fill in all fields for login.");
        }
    });

    // Handling the signup form submission
    const signupForm = document.querySelector(".signup-box");
    const signupBtn = signupForm.querySelector(".signup-submit");

    signupBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission
        const signupInputs = signupForm.querySelectorAll(".ele");

        if (validateForm(signupInputs)) {
            alert("Signup successful!");
        } else {
            alert("Please fill in all fields for signup.");
        }
    });
});
