"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.isTheSameAddress = exports.enumKeys = void 0;
function enumKeys(obj) {
    return Object.keys(obj).filter(function (k) { return Number.isNaN(+k); });
}
exports.enumKeys = enumKeys;
function isTheSameAddress(address1, address2) {
    return address1.toLowerCase() === address2.toLowerCase();
}
exports.isTheSameAddress = isTheSameAddress;
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.sleep = sleep;
