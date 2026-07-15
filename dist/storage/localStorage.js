"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToLocalStorage = saveToLocalStorage;
exports.getFromLocalStorage = getFromLocalStorage;
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
//# sourceMappingURL=localStorage.js.map