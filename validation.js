// validation.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const errorMsg = document.getElementById("error");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from submitting

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    // Reset error message
    errorMsg.textContent = "";
    errorMsg.classList.remove("text-green-400");
    errorMsg.classList.add("text-red-400");

    if (name === "") {
      errorMsg.textContent = "Name is required.";
      return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
      errorMsg.textContent = "Please enter a valid email.";
      return;
    }

    if (password.length < 6) {
      errorMsg.textContent = "Password must be at least 6 characters.";
      return;
    }

    // Success
    errorMsg.classList.remove("text-red-400");
    errorMsg.classList.add("text-green-400");
    errorMsg.textContent = "Form submitted successfully 🎉";
  });
});
