const userAvatarEl = document.querySelector(".user__avatar");
const userNameEl = document.querySelector(".user__name");
const userLocationEl = document.querySelector(".user__location");

// http://api.github.com/users/USERNAME

const defaultAvatar = "https://avatars.githubusercontent.com/u/87811056?v=4";
userAvatarEl.src = defaultAvatar;

const userNameInputEl = document.querySelector(".name-form__input");
const userNameBtnEl = document.querySelector(".name-form__btn");

const fetchUserData = (userName) => {
  fetch(`http://api.github.com/users/${userName}`).then((responce) =>
    responce.json()
  );
};

const renderUserData = (userData) => {
  const { avater_url, name, location } = userData;
  userAvatarEl.src = avater_url;
  userNameEl.textContent = name;
  userLocationEl.textContent = location ? `from ${location}` : ``;
};

const onSearchUser = () => {
  const userName = userNameInputEl.value;
  fetchUserData(userName).then((userData) => renderUserData(userData));
};

userNameBtnEl.addEventListener("click", onSearchUser);
