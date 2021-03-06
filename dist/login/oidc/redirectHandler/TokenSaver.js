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
let TokenSaver = class TokenSaver {
  constructor(sessionCreator, joseUtility, storageUtility) {
    this.sessionCreator = sessionCreator;
    this.joseUtility = joseUtility;
    this.storageUtility = storageUtility;
  }
  async saveTokenAndGetSession(
    localUserId,
    idToken,
    accessToken,
    refreshToken
  ) {
    throw new Error("Not Implemented");
  }
};
TokenSaver = __decorate(
  [
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("sessionInfoManager")),
    __param(1, tsyringe_1.inject("joseUtility")),
    __param(2, tsyringe_1.inject("storageUtility")),
    __metadata("design:paramtypes", [Object, Object, Object])
  ],
  TokenSaver
);
exports.default = TokenSaver;
//# sourceMappingURL=TokenSaver.js.map
