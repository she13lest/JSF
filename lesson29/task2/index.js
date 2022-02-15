'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
export const pinger = (count, period) => {
    let i = count;
    console.log('Ping');
    const interval = setInterval(() => {
        if (--i > 0) {
          console.log('Ping');
        } else {
            clearInterval(interval);
      }
    
  }, period);
};


// pinger(5, 100);
pinger(7, 150);
