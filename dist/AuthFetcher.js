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
const tsyringe_1 = require("tsyringe");
const url_parse_1 = __importDefault(require("url-parse"));
let AuthFetcher = class AuthFetcher {
  constructor(
    loginHandler,
    redirectHandler,
    logoutHandler,
    sessionInfoManager,
    authenticatedFetcher,
    environmentDetector
  ) {
    this.loginHandler = loginHandler;
    this.redirectHandler = redirectHandler;
    this.logoutHandler = logoutHandler;
    this.sessionInfoManager = sessionInfoManager;
    this.authenticatedFetcher = authenticatedFetcher;
    this.environmentDetector = environmentDetector;
  }
  urlOptionToUrl(url) {
    if (url) {
      if (typeof url !== "string") {
        return url;
      }
      return new url_parse_1.default(url);
    }
    return undefined;
  }
  async login(sessionId, options) {
    return this.loginHandler.handle({
      sessionId,
      oidcIssuer: this.urlOptionToUrl(options.oidcIssuer),
      redirectUrl: this.urlOptionToUrl(options.redirectUrl),
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      clientName: options.clientId,
      popUp: options.popUp || false,
      handleRedirect: options.handleRedirect
    });
  }
  async fetch(sessionId, url, init) {
    const credentials = {
      localUserId: sessionId,
      type: "dpop"
    };
    return this.authenticatedFetcher.handle(credentials, url, init);
  }
  async logout(sessionId) {
    this.logoutHandler.handle(sessionId);
  }
  async getSessionInfo(sessionId) {
    return this.sessionInfoManager.get(sessionId);
  }
  async getAllSessionInfo() {
    return this.sessionInfoManager.getAll();
  }
  async handleIncomingRedirect(url) {
    return this.redirectHandler.handle(url);
  }
};
AuthFetcher = __decorate(
  [
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("loginHandler")),
    __param(1, tsyringe_1.inject("redirectHandler")),
    __param(2, tsyringe_1.inject("logoutHandler")),
    __param(3, tsyringe_1.inject("sessionInfoManager")),
    __param(4, tsyringe_1.inject("authenticatedFetcher")),
    __param(5, tsyringe_1.inject("environmentDetector")),
    __metadata("design:paramtypes", [
      Object,
      Object,
      Object,
      Object,
      Object,
      Object
    ])
  ],
  AuthFetcher
);
exports.default = AuthFetcher;
//# sourceMappingURL=AuthFetcher.js.map
