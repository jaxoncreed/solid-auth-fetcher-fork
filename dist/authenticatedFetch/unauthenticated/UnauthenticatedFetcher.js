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
const HeadersUtils_1 = require("../headers/HeadersUtils");
let DpopAuthenticatedFetcher = class DpopAuthenticatedFetcher {
  constructor(fetcher, urlRepresentationConverter, storageUtility) {
    this.fetcher = fetcher;
    this.urlRepresentationConverter = urlRepresentationConverter;
    this.storageUtility = storageUtility;
  }
  async canHandle(requestCredentials, url, requestInit) {
    return true;
  }
  async handle(requestCredentials, url, requestInit) {
    var _a;
    return this.fetcher.fetch(url, {
      ...requestInit,
      method:
        (_a =
          requestInit === null || requestInit === void 0
            ? void 0
            : requestInit.method) !== null && _a !== void 0
          ? _a
          : "GET",
      headers: HeadersUtils_1.flattenHeaders(
        requestInit === null || requestInit === void 0
          ? void 0
          : requestInit.headers
      )
    });
  }
};
DpopAuthenticatedFetcher = __decorate(
  [
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("fetcher")),
    __param(1, tsyringe_1.inject("urlRepresentationConverter")),
    __param(2, tsyringe_1.inject("storageUtility")),
    __metadata("design:paramtypes", [Object, Object, Object])
  ],
  DpopAuthenticatedFetcher
);
exports.default = DpopAuthenticatedFetcher;
//# sourceMappingURL=UnauthenticatedFetcher.js.map
