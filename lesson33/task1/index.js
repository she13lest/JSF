const userAvatarEl = document.querySelector(".user__avatar");
const userNameEl = document.querySelector(".user__name");
const userLocationEl = document.querySelector(".user__location");

const defaultAvatar = "https://avatars.githubusercontent.com/u/87811056?v=4";
userAvatarEl.src = defaultAvatar;

const fetchUserData = (userName) =>
  fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );

const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;
  userAvatarEl.src = avatar_url;
  userNameEl.textContent = name;
  userLocationEl.textContent = location ? `from ${location}` : ``;
};

const userNameInputEl = document.querySelector(".name-form__input");
const userNameBtnEl = document.querySelector(".name-form__btn");

const onSearchUser = () => {
  const userName = userNameInputEl.value;
  fetchUserData(userName).then((userData) => renderUserData(userData));
};

userNameBtnEl.addEventListener("click", onSearchUser);
