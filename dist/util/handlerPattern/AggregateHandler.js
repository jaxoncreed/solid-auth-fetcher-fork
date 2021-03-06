"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const HandlerNotFoundError_1 = __importDefault(
  require("../../errors/HandlerNotFoundError")
);
class AggregateHandler {
  constructor(handleables) {
    this.handleables = handleables;
  }
  async getProperHandler(params) {
    let rightOne = null;
    for (let i = 0; i < this.handleables.length; i++) {
      const canHandle = await this.handleables[i].canHandle(...params);
      if (canHandle) {
        rightOne = this.handleables[i];
        break;
      }
    }
    return rightOne;
  }
  async canHandle(...params) {
    return (await this.getProperHandler(params)) !== null;
  }
  async handle(...params) {
    const handler = await this.getProperHandler(params);
    if (handler) {
      return handler.handle(...params);
    } else {
      throw new HandlerNotFoundError_1.default(this.constructor.name, params);
    }
  }
}
exports.default = AggregateHandler;
//# sourceMappingURL=AggregateHandler.js.map
