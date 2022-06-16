const baseUrl = "https://62a863cfa89585c17713652f.mockapi.io/api/v1/usersForm";

const formElem = document.querySelector(".login-form");
const buttonElem = document.querySelector(".submit-button");

const sendUserData = (userData) => {
  return fetch(baseUrl, {
    methid: "POST",
    headers: {
      "content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
};

const onCreateNewUser = () => {
  const newUserObj = Object.fromEntries(new FormData(inputElem));

  return sendUserData(newUserObj)
    .then((response) => response.json())
    .then((data) => {
      alert(JSON.stringify(data));
      formElem.reset();
    });
};

const onChange = () => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    buttonElem.removeAttribute("disabled");
  } else {
    buttonElem.setAttribute("disabled", true);
  }
};

formElem.addEventListener("input", onChange);
buttonElem.addEventListener("click", onCreateNewUser);
