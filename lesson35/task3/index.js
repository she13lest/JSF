import { fetchUserData, fetchRepositories } from "./gateways.js";
import { renderUserData } from "./user.js";
import { cleanReposList, renderRepos } from "./repos.js";
import { showSpin, hideSpin } from "./spin.js";

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: "",
};

renderUserData(defaultUser);

const userNameInputEl = document.querySelector(".name-form__input");
const userNameBtnEl = document.querySelector(".name-form__btn");

const onSearchUser = () => {
  showSpin();
  cleanReposList();
  const userName = userNameInputEl.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => {
      renderRepos(reposList);
    })
    .catch((err) => {
      alert(err.message);
    })
    .finally(() => {
      hideSpin();
    });
};

userNameBtnEl.addEventListener("click", onSearchUser);
