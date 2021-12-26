export const createLogger = () => {
  const memory = [];

  function warn(mess) {
    memory.push({
      message: mess,
      dateTime: new Date(),
      type: 'warn',
    });
  }

  function log(mess) {
    memory.push({
      message: mess,
      dateTime: new Date(),
      type: 'log',
    });
  }

  function error(mess) {
    memory.push({
      message: mess,
      dateTime: new Date(),
      type: 'error',
    });
  }

  function getRecords(str) {
    switch (str) {
      case 'warn':
        return [...memory]
          .filter(el => el.type === 'warn')
          .sort((a, b) => b.dateTime - a.dateTime);

      case 'log':
        return [...memory]
          .filter(el => el.type === 'log')
          .sort((a, b) => b.dateTime - a.dateTime);

      case 'error':
        return [...memory]
          .filter(el => el.type === 'error')
          .sort((a, b) => b.dateTime - a.dateTime);

      default:
        return [...memory].sort((a, b) => b.dateTime - a.dateTime);
    }
  }

  return {
    warn,
    log,
    error,
    getRecords,
    memory,
  };
};

const logger = createLogger();

logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');

logger.getRecords();
logger.getRecords('log');
logger.getRecords('error');
logger.getRecords('warn');
