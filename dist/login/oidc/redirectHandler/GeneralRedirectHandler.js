"use strict";
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const url_parse_1 = __importDefault(require("url-parse"));
const ConfigurationError_1 = __importDefault(
  require("../../..//errors/ConfigurationError")
);
const tsyringe_1 = require("tsyringe");
let GeneralRedirectHandler = class GeneralRedirectHandler {
  constructor(tokenSaver) {
    this.tokenSaver = tokenSaver;
  }
  async canHandle(redirectUrl) {
    const url = new url_parse_1.default(redirectUrl, true);
    return !!(
      url.query &&
      url.query.id_token &&
      url.query.access_token &&
      url.query.state
    );
  }
  async handle(redirectUrl) {
    if (!(await this.canHandle(redirectUrl))) {
      throw new ConfigurationError_1.default(
        `Cannot handle redirect url [${redirectUrl}]`
      );
    }
    const url = new url_parse_1.default(redirectUrl, true);
    return this.tokenSaver.saveTokenAndGetSession(
      url.query.state,
      url.query.id_token,
      url.query.access_token
    );
  }
};
GeneralRedirectHandler = __decorate(
  [
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("tokenSaver")),
    __metadata("design:paramtypes", [Object])
  ],
  GeneralRedirectHandler
);
exports.default = GeneralRedirectHandler;
//# sourceMappingURL=GeneralRedirectHandler.js.map
