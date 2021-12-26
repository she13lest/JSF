export const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 18, email: 'example@server.com' },
    { name: 'Mike', age: 17, email: 'mexampl@server.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ email, name }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());
