"use strict";

/**
 * @param {string[]} users
 * @return {promise}
 */
const fetchUser = async (userId) => {
  try {
    const onUser = await fetch(`https://api.github.com/users/${userId}`);
    if (onUser.ok) {
      return await onUser.json();
    }
    throw new Error("Failed to get user");
  } catch (err) {
    return err.message;
  }
};

export const getUsersBlogs = (users) => {
  const usersPromise = users.map((item) => {
    const result = fetchUser(item).then((res) => res.blog);
    return result;
  });
  const res = Promise.all(usersPromise);
  return res;
};

// examples
getUsersBlogs(["google", "facebook", "reactjs"]).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(["microsoft"]).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
