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
let Redirector = class Redirector {
  constructor(environmentDetector) {
    this.environmentDetector = environmentDetector;
  }
  redirect(redirectUrl, options) {
    if (options && options.handleRedirect) {
      options.handleRedirect(redirectUrl);
    } else if (this.environmentDetector.detect() === "browser") {
      if (options && options.redirectByReplacingState) {
        window.history.replaceState({}, "", redirectUrl);
      } else {
        window.location.href = redirectUrl;
      }
    } else {
      throw new Error(
        "A redirectHandler must be provided in any environment other than the web browser"
      );
    }
  }
};
Redirector = __decorate(
  [
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("environmentDetector")),
    __metadata("design:paramtypes", [Object])
  ],
  Redirector
);
exports.default = Redirector;
//# sourceMappingURL=Redirector.js.map
