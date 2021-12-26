export const user = {
  firstName: 'John',
  secondName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.secondName}`;
  },
};

user.getFullName();
