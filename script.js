// Counter
let counter = 0;
let totalClicks = 0;

const counterDisplay = document.getElementById("counterDisplay");
const clickCount = document.getElementById("clickCount");
document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  totalClicks++;
  updateCounter();
});
document.getElementById("decrementBtn").addEventListener("click", () => {
  counter--;
  totalClicks++;
  updateCounter();
});
document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  updateCounter();
});
function updateCounter() {
  counterDisplay.textContent = counter;
  clickCount.textContent = totalClicks;
}

// Tabs
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.dataset.tab;

    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});

// FAQ
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    const answer = item.querySelector(".faq-answer");
    answer.classList.toggle("show");
  });
});

// Form Validation
const form = document.getElementById("registrationForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // First name
  if (firstName.value.trim() === "") {
    valid = false;
    document.getElementById("firstNameError").textContent =
      "First name is required";
  } else {
    document.getElementById("firstNameError").textContent = "";
  }

  // Last name
  if (lastName.value.trim() === "") {
    valid = false;
    document.getElementById("lastNameError").textContent =
      "Last name is required";
  } else {
    document.getElementById("lastNameError").textContent = "";
  }

  // Email
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailRegex.test(email.value)) {
    valid = false;
    document.getElementById("emailError").textContent = "Invalid email address";
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password.value)) {
    valid = false;
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long, include uppercase, lowercase, and a number";
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Confirm password
  if (confirmPassword.value !== password.value) {
    valid = false;
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";
  } else {
    document.getElementById("confirmPasswordError").textContent = "";
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
