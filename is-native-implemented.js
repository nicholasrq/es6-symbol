// Exports true if environment provides native `Symbol` implementation

'use strict';

module.exports = typeof Symbol === 'function' && Object.prototype.toString.call(Symbol.prototype) === '[object Symbol]';
