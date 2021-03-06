"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const NotImplementedError_1 = __importDefault(
  require("../../errors/NotImplementedError")
);
class BearerAuthenticatedFetcher {
  async canHandle(requestCredentials, url, requestInit) {
    return requestCredentials.type === "bearer";
  }
  async handle(requestCredentials, url, requestInit) {
    "";
    throw new NotImplementedError_1.default("BearerAuthenticatedFetcher");
  }
}
exports.default = BearerAuthenticatedFetcher;
//# sourceMappingURL=BearerAuthenticatedFetcher.js.map
