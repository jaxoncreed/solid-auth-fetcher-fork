"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebidLoginHandler {
  async canHandle(loginOptions) {
    return false;
  }
  async handle(loginOptions) {
    throw new Error("Not Implemented");
  }
}
exports.default = WebidLoginHandler;
//# sourceMappingURL=WebidLoginHandler.js.map
