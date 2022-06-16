const baseUrl = "https://62aafc0ea62365888bd1753c.mockapi.io/api/v2/usersObj";

const formElem = document.querySelector(".login-form");
const buttonElem = document.querySelector(".submit-button");

const sendUserData = (userData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
};

const onCreateNewUser = () => {
  const newUserObj = Object.fromEntries(new FormData(formElem));

  return sendUserData(newUserObj)
    .then((response) => response.json())
    .then((data) => {
      alert(JSON.stringify(data));
      formElem.reset();
    });
};
console.log(onCreateNewUser());

const onChange = () => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    buttonElem.removeAttribute("disabled");
    buttonElem.setAttribute("enabled");
  } else {
    buttonElem.setAttribute("disabled", true);
  }
};

formElem.addEventListener("input", onChange);
buttonElem.addEventListener("click", onCreateNewUser);
