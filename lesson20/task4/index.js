'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  constructor(price, city, type) {}

  checkPrice() {
    if (price > 1000) {
      return true;
    }

    return false;
  }

  confirmOrder() {}

  isValidType() {}
}
