export const parseUser = (string) => {
  try {
    const user = JSON.parse(string);
    return user;
  } catch {
    return null;
  }
};

const user1 = parseUser("{'name': 'Vika'}");
console.log(user1);
