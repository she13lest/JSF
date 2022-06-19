const userNameEl = document.querySelector(".user__name");
const userLocationEl = document.querySelector(".user__location");
const userAvatarEl = document.querySelector(".user__avatar");

export const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;
  userAvatarEl.src = avatar_url;
  userNameEl.textContent = name;
  userLocationEl.textContent = location ? `from ${location}` : ``;
};
