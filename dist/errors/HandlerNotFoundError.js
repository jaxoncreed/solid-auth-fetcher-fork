"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HandlerNotFoundError extends Error {
  constructor(handlerName, params) {
    super(
      `[${handlerName}] cannot find a suitable handler for: ${params
        .map(e => {
          try {
            return JSON.stringify(e);
          } catch (err) {
            return e.toString();
          }
        })
        .join(", ")}`
    );
    this.params = params;
  }
}
exports.default = HandlerNotFoundError;
//# sourceMappingURL=HandlerNotFoundError.js.map
