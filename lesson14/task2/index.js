const createMessenger = () => {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(text) {
    sender = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};

export default createMessenger;

const messenger1 = createMessenger();

messenger1.sendMessage('Bob');

const messenger2 = createMessenger();

messenger2.sendMessage('Tom');

messenger1.setSender('Ivan');
