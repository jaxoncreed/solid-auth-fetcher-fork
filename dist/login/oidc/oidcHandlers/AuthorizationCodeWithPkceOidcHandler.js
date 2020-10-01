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
let AuthorizationCodeWithPkceOidcHandler = class AuthorizationCodeWithPkceOidcHandler {
  constructor(joseUtility, storageUtility, redirector) {
    this.joseUtility = joseUtility;
    this.storageUtility = storageUtility;
    this.redirector = redirector;
  }
  async canHandle(oidcLoginOptions) {
    return !!(
      oidcLoginOptions.issuerConfiguration.grantTypesSupported &&
      oidcLoginOptions.issuerConfiguration.grantTypesSupported.indexOf(
        "authorization_code"
      ) > -1
    );
  }
  async handle(oidcLoginOptions) {
    const requestUrl = new url_parse_1.default(
      oidcLoginOptions.issuerConfiguration.authorizationEndpoint.toString()
    );
    const codeVerifier = await this.joseUtility.generateCodeVerifier();
    const query = {
      response_type: "id_token code",
      redirect_uri: oidcLoginOptions.redirectUrl.toString(),
      scope: "openid webid offline_access",
      client_id: oidcLoginOptions.client.clientId,
      code_challenge_method: "S256",
      code_challenge: await this.joseUtility.generateCodeChallenge(
        codeVerifier
      ),
      state: oidcLoginOptions.sessionId
    };
    requestUrl.set("query", query);
    await this.storageUtility.setForUser(oidcLoginOptions.sessionId, {
      codeVerifier,
      issuer: oidcLoginOptions.issuer.toString(),
      redirectUri: oidcLoginOptions.redirectUrl.toString()
    });
    this.redirector.redirect(requestUrl.toString(), {
      handleRedirect: oidcLoginOptions.handleRedirect
    });
  }
};
AuthorizationCodeWithPkceOidcHandler = __decorate(
  [
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("joseUtility")),
    __param(1, tsyringe_1.inject("storageUtility")),
    __param(2, tsyringe_1.inject("redirector")),
    __metadata("design:paramtypes", [Object, Object, Object])
  ],
  AuthorizationCodeWithPkceOidcHandler
);
exports.default = AuthorizationCodeWithPkceOidcHandler;
//# sourceMappingURL=AuthorizationCodeWithPkceOidcHandler.js.map
