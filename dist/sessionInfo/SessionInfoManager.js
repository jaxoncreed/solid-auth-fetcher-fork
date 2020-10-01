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
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
let SessionInfoManager = class SessionInfoManager {
  constructor(storageUtility) {
    this.storageUtility = storageUtility;
  }
  update(sessionId, options) {
    throw new Error("Not Implemented");
  }
  async get(sessionId) {
    const webId = await this.storageUtility.getForUser(sessionId, "webId", {
      secure: true
    });
    const isLoggedIn = await this.storageUtility.getForUser(
      sessionId,
      "isLoggedIn",
      {
        secure: true
      }
    );
    if (isLoggedIn !== undefined) {
      return {
        sessionId,
        webId: webId,
        isLoggedIn: isLoggedIn === "true"
      };
    }
    return undefined;
  }
  async getAll() {
    throw new Error("Not implemented");
  }
};
SessionInfoManager = __decorate(
  [
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("storageUtility")),
    __metadata("design:paramtypes", [Object])
  ],
  SessionInfoManager
);
exports.default = SessionInfoManager;
//# sourceMappingURL=SessionInfoManager.js.map
