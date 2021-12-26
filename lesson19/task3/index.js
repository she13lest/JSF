export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
  this.age = newAge;
  if (newAge >= 25) {
    this.requestNewPhoto();
  } else if (newAge < 0) {
    return false;
  }
  return newAge;
};

const user1 = new User('Olga', 16);
user1.sayHi();
console.log(user1.setAge(26));
