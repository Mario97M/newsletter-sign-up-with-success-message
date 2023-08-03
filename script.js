let emailInput = document.getElementById("emailInput");
const stayUpdatedMain = document.getElementById("stayUpdatedMain");
const thankYouMessage = document.getElementById("thankYouMessage");
const subBtn = document.getElementById("subBtn");
const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const dismissBtn = document.getElementById("dismissBtn");
const emailConfirmation = document.getElementById("emailConfirmation");

function emailSubmission() {
  let emailValue = emailInput.value;

  if (emailValue && emailRegex.test(emailValue)) {
    stayUpdatedMain.classList.add("hidden");
    thankYouMessage.classList.remove("hidden");

    emailInput.value = "";
    emailConfirmation.textContent = emailValue;
  } else {
    alert("Please enter a valid email");
  }
}

function dismissMessage() {
  thankYouMessage.classList.add("hidden");
  stayUpdatedMain.classList.remove("hidden");
}

subBtn.addEventListener("click", emailSubmission);
dismissBtn.addEventListener("click", dismissMessage);
