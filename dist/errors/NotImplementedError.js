"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotImplementedError extends Error {
  constructor(methodName) {
    super(`[${methodName}] is not implemented`);
  }
}
exports.default = NotImplementedError;
//# sourceMappingURL=NotImplementedError.js.map
