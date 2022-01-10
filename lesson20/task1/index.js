class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    this.age = newAge;
    if (newAge >= 25) {
      this.requestNewPhoto();
    } else if (newAge < 0) {
      return false;
    }
    return newAge;
  }
}

const user1 = new User('Olga', 16);
user1.sayHi();
console.log(user1.setAge(26));
