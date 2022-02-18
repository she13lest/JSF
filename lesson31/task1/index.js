'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
          reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId: 'userId777',
          email: `${userId}@gromcode.com`,
        });
      }, 1000);
    }
  });

  return request;
};

// requestUserData('someNum44')
// .then(data => console.log(data));
// .catch (error => console.log(error));
// .finally(() => console.log('finally'));