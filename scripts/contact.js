const nameValue = document.getElementById("name");
const emailValue = document.getElementById("emailaddress");
const companyValue = document.getElementById("company");
const titleValue = document.getElementById("title");
const messageValue = document.getElementById("message");
const form = document.getElementById("form");
const inputs = document.getElementsByTagName("input");

let nameError = document.getElementById("name_error");
let companyError = document.getElementById("company_error");
let titleError = document.getElementById("title_error");
let messageError = document.getElementById("message_error");
let emailError = document.getElementById("email_error");
let error = document.querySelectorAll(".error");

const hamburgerBtn = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

hamburgerBtn.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

form.addEventListener("submit", (e) => {
  if (nameValue.value === "" || nameValue.value == null) {
    nameError.innerText = "Please add your name!";
    inputs[1].classList.add("invalid");
  } else {
    nameError.innerText = `Thank you ${nameValue.value}!`;
    error[0].classList.add("valid");
  }
  if (companyValue.value === "" || companyValue.value == null) {
    companyError.innerText = "Please add your companys name!";
    inputs[2].classList.add("invalid");
  } else {
    companyError.innerText = "Thank you!";
    error[2].classList.add("valid");
  }
  if (titleValue.value === "" || titleValue.value == null) {
    titleError.innerText = "Please add your title!";
    inputs[3].classList.add("invalid");
  } else {
    titleError.innerText = `${titleValue.value}, that's amazing!`;
    error[3].classList.add("valid");
  }
  if (messageValue.value === "" || messageValue.value == null) {
    messageError.innerText = "Please leave a message!";
    inputs[4].classList.add("invalid");
  } else {
    messageError.innerText = "Thanks for the message!";
    error[4].classList.add("valid");
  }
  if (emailValue.value === "" || emailValue == null) {
    emailError.innerText = "Please add your email!";
    inputs[5].classList.add("invalid");
  } else {
    emailError.innerText = "You entered a valid email!";
  }
  e.preventDefault();
});

function emailValidation() {
  const email = document.getElementById("emailaddress").value;
  const emailError = document.getElementById("email_error");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let message = document.getElementsByClassName("error")[1];

  if (email.match(pattern)) {
    message.classList.add("valid");
    emailError.innerText = "You entered a valid email!";
  } else {
    message.classList.remove("valid");
    emailError.innerText = "You entered an incorrect email!";
  }
}
