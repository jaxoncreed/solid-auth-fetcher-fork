"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BrowserStorage {
  async get(key) {
    return window.localStorage.getItem(key) || undefined;
  }
  async set(key, value) {
    window.localStorage.setItem(key, value);
  }
  async delete(key) {
    window.localStorage.removeItem(key);
  }
}
exports.default = BrowserStorage;
//# sourceMappingURL=BrowserStorage.js.map
