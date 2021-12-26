let message = 'Just learn it';

const sendMessage = name => {
  const sender = 'Gromcode';

  console.log(`${name}, ${message}! Your ${sender}`);
};

const setMessage = text => {
  message = text;
};

sendMessage('Mike');

setMessage('Welcome');

sendMessage('Mike');
