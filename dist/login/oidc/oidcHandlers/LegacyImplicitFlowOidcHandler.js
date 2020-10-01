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
const tsyringe_1 = require("tsyringe");
let LegacyImplicitFlowOidcHandler = class LegacyImplicitFlowOidcHandler {
  constructor(fetcher, sessionInfoManager, redirector, dpopHeaderCreator) {
    this.fetcher = fetcher;
    this.sessionInfoManager = sessionInfoManager;
    this.redirector = redirector;
    this.dpopHeaderCreator = dpopHeaderCreator;
  }
  async canHandle(oidcLoginOptions) {
    return !!(
      oidcLoginOptions.issuerConfiguration.grantTypesSupported &&
      oidcLoginOptions.issuerConfiguration.grantTypesSupported.indexOf(
        "implicit"
      ) > -1
    );
  }
  async handle(oidcLoginOptions) {
    const requestUrl = new url_parse_1.default(
      oidcLoginOptions.issuerConfiguration.authorizationEndpoint.toString()
    );
    const query = {
      client_id: oidcLoginOptions.client.clientId,
      response_type: "id_token token",
      redirect_url: oidcLoginOptions.redirectUrl.toString(),
      scope: "openid webid offline_access",
      state: oidcLoginOptions.sessionId
    };
    if (oidcLoginOptions.dpop) {
      query.dpop = await this.dpopHeaderCreator.createHeaderToken(
        oidcLoginOptions.issuer,
        "GET"
      );
    }
    requestUrl.set("query", query);
    const sessionInfo = await this.sessionInfoManager.get(
      oidcLoginOptions.sessionId
    );
    if (!sessionInfo) {
      throw new Error("There was a problem creating a session.");
    }
    this.redirector.redirect(requestUrl.toString(), {
      handleRedirect: oidcLoginOptions.handleRedirect
    });
  }
};
LegacyImplicitFlowOidcHandler = __decorate(
  [
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("fetcher")),
    __param(1, tsyringe_1.inject("sessionInfoManager")),
    __param(2, tsyringe_1.inject("redirector")),
    __param(3, tsyringe_1.inject("dpopHeaderCreator")),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
  ],
  LegacyImplicitFlowOidcHandler
);
exports.default = LegacyImplicitFlowOidcHandler;
//# sourceMappingURL=LegacyImplicitFlowOidcHandler.js.map
