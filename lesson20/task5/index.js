/* eslint-disable max-classes-per-file */

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    const arr = [];
    this._users.forEach(el => {
      arr.push(el._name);
    });
    return arr;
  }

  getUserIds() {
    const arr = [];
    this._users.forEach(el => {
      arr.push(el._id);
    });
    return arr;
  }

  getUserNameById(nameById) {
    let name = '';
    this._users.forEach(el => {
      if (el._id === nameById) {
        name = el._name;
      }
    });
    return name;
  }
}

const user1 = new User('1', 'Tom', 'session-id');
const user2 = new User('2', 'Nina', 'session-id');
const user3 = new User('3', 'Kim', 'session-id');
const user4 = new User('4', 'Luis', 'session-id');

// получить свойства можем
console.log(user1.id); // ===> '1'
console.log(user1.name); // ===> 'Tom'
console.log(user1.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

const repository1 = new UserRepository([user1, user2, user3, user4]);
console.log(repository1.getUserNames());
console.log(repository1.getUserIds);
console.log(repository1.getUserNameById('4'));
