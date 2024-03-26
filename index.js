const userPassword = document.getElementById("user_password");
const confirmUserPassword = document.getElementById("confirm_user_password");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const userEmail = document.getElementById("user_email");
const userPhone = document.getElementById("user_phone");
const btnCreateAccount = document.querySelector(".button--create-account");
const invalidPasswordMessage = document.querySelector(".invalid-password");
const formData = {};

btnCreateAccount.addEventListener("click", () => {
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    userEmail.value === "" ||
    userPhone.value === "" ||
    userPassword.value === ""
  )
    return;
  formData.first_name = firstName.value;
  formData.last_name = lastName.value;
  formData.user_email = userEmail.value;
  formData.user_phone = userPhone.value;
  formData.user_password = userPassword.value;
  console.log(formData);
});

function handleCheckForSamePassword() {
  if (confirmUserPassword.value !== userPassword.value) {
    invalidPasswordMessage.classList.remove("hidden");
  }
  if (confirmUserPassword.value === userPassword.value)
    invalidPasswordMessage.classList.add("hidden");
}

confirmUserPassword.addEventListener("blur", handleCheckForSamePassword);

function handleAddDashToPhoneNumber() {
  let inputValue = userPhone.value;
  inputValue = inputValue.replace(/\D/g, "");
  if (inputValue.length > 3) {
    inputValue = inputValue.slice(0, 3) + "-" + inputValue.slice(3);

    console.log(`Fired length 3`);
  }
  if (inputValue.length > 7) {
    inputValue = inputValue.slice(0, 7) + "-" + inputValue.slice(7);
  }
  return (userPhone.value = inputValue);
}
userPhone.addEventListener("input", handleAddDashToPhoneNumber);
