"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryStorage {
  constructor() {
    this.map = {};
  }
  async get(key) {
    return this.map[key] || undefined;
  }
  async set(key, value) {
    this.map[key] = value;
  }
  async delete(key) {
    delete this.map[key];
  }
}
exports.default = InMemoryStorage;
//# sourceMappingURL=InMemoryStorage.js.map
