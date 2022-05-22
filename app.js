//first we are going to extract the elements that we want from the page:
const form = document.getElementById("form");
const alertMessagePlaceholder = document.querySelector(".alert-message");
const email = document.getElementById("email");

// console.log(alertMessagePlaceholder);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inputValidation();
});

//this is the function that will check the validation of the email:==>
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

//this function will determine what would happe if the tests are faild:==>
function setError(element, message) {
  const inputControl = element.parentElement;
  alertMessagePlaceholder.innerText = message;
  element.classList.add("alert");
  alertMessagePlaceholder.classList.remove("success-message");
  element.classList.remove("success-input");
  alertMessagePlaceholder.classList.add("error");
}

function setSuccess(element, message) {
  alertMessagePlaceholder.innerText = "";
  alertMessagePlaceholder.innerText = message;
  element.classList.remove("alert");
  element.classList.add("success-input");
  alertMessagePlaceholder.classList.add("success-message");
}

//this function will use all the data and variables above to validate the input and the rsult will send back to the eventlistener
function inputValidation() {
  //it turn out that if i try to reach out to email value outside of this function it wont work. it was interesting!
  const emailValue = email.value.trim();

  if (emailValue === "") {
    return setError(
      email,
      "Whoops! It looks like you forgot to add your email"
    );
  } else if (!isValidEmail(emailValue)) {
    return setError(email, "Please provide a valid email address");
  } else {
    setSuccess(
      email,
      "Thank You for signing Up. we will inform you as soon as possible"
    );
  }
}
