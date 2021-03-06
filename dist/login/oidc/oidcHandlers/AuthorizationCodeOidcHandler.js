"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const NotImplementedError_1 = __importDefault(
  require("../../../errors/NotImplementedError")
);
class AuthorizationCodeOidcHandler {
  async canHandle(oidcLoginOptions) {
    return false;
  }
  async handle(oidcLoginOptions) {
    throw new NotImplementedError_1.default(
      "AuthorizationCodeOidcHandler handle"
    );
  }
}
exports.default = AuthorizationCodeOidcHandler;
//# sourceMappingURL=AuthorizationCodeOidcHandler.js.map
