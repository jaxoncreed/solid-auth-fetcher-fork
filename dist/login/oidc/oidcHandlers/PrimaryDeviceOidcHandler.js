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
class PrimaryDeviceOidcHandler {
  async canHandle(oidcLoginOptions) {
    return false;
  }
  async handle(oidcLoginOptions) {
    throw new NotImplementedError_1.default("PrimaryDeviceOidcHandler handle");
  }
}
exports.default = PrimaryDeviceOidcHandler;
//# sourceMappingURL=PrimaryDeviceOidcHandler.js.map
