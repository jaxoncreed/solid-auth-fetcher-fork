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
const form_urlencoded_1 = __importDefault(require("form-urlencoded"));
let TokenRequester = class TokenRequester {
  constructor(
    storageUtility,
    issuerConfigFetcher,
    fetcher,
    dpopHeaderCreator,
    joseUtility,
    clientRegistrar,
    dpopClientKeyManager
  ) {
    this.storageUtility = storageUtility;
    this.issuerConfigFetcher = issuerConfigFetcher;
    this.fetcher = fetcher;
    this.dpopHeaderCreator = dpopHeaderCreator;
    this.joseUtility = joseUtility;
    this.clientRegistrar = clientRegistrar;
    this.dpopClientKeyManager = dpopClientKeyManager;
  }
  async request(sessionId, body) {
    const [issuer] = await Promise.all([
      this.storageUtility.getForUser(sessionId, "issuer", {
        errorIfNull: true
      })
    ]);
    const issuerConfig = await this.issuerConfigFetcher.fetchConfig(
      new url_parse_1.default(issuer)
    );
    const client = await this.clientRegistrar.getClient(
      { sessionId },
      issuerConfig
    );
    if (
      body.grant_type &&
      (!issuerConfig.grantTypesSupported ||
        !issuerConfig.grantTypesSupported.includes(body.grant_type))
    ) {
      throw new Error(
        `The issuer [${issuer}] does not support the [${body.grant_type}] grant`
      );
    }
    if (!issuerConfig.tokenEndpoint) {
      throw new Error(`This issuer [${issuer}] does not have a token endpoint`);
    }
    await this.dpopClientKeyManager.generateClientKeyIfNotAlready();
    const tokenRequestInit = {
      method: "POST",
      headers: {
        DPoP: await this.dpopHeaderCreator.createHeaderToken(
          issuerConfig.tokenEndpoint,
          "POST"
        ),
        "content-type": "application/x-www-form-urlencoded"
      },
      body: form_urlencoded_1.default({
        ...body,
        client_id: client.clientId
      })
    };
    if (client.clientSecret) {
      tokenRequestInit.headers.Authorization = `Basic ${this.btoa(
        `${client.clientId}:${client.clientSecret}`
      )}`;
    }
    const tokenResponse = await (
      await this.fetcher.fetch(issuerConfig.tokenEndpoint, tokenRequestInit)
    ).json();
    if (
      !(
        tokenResponse &&
        tokenResponse.access_token &&
        tokenResponse.id_token &&
        typeof tokenResponse.access_token === "string" &&
        typeof tokenResponse.id_token === "string" &&
        (!tokenResponse.refresh_token ||
          typeof tokenResponse.refresh_token === "string")
      )
    ) {
      throw new Error("IDP token route returned an invalid response.");
    }
    const decoded = await this.joseUtility.decodeJWT(
      tokenResponse.access_token
    );
    if (!decoded || !decoded.webid) {
      throw new Error("The idp returned a bad token without a webid.");
    }
    await this.storageUtility.setForUser(
      sessionId,
      {
        accessToken: tokenResponse.access_token,
        idToken: tokenResponse.id_token,
        refreshToken: tokenResponse.refresh_token,
        webId: decoded.webid,
        isLoggedIn: "true"
      },
      { secure: true }
    );
  }
  btoa(str) {
    return Buffer.from(str.toString(), "binary").toString("base64");
  }
};
TokenRequester = __decorate(
  [
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("storageUtility")),
    __param(1, tsyringe_1.inject("issuerConfigFetcher")),
    __param(2, tsyringe_1.inject("fetcher")),
    __param(3, tsyringe_1.inject("dpopHeaderCreator")),
    __param(4, tsyringe_1.inject("joseUtility")),
    __param(5, tsyringe_1.inject("clientRegistrar")),
    __param(6, tsyringe_1.inject("dpopClientKeyManager")),
    __metadata("design:paramtypes", [
      Object,
      Object,
      Object,
      Object,
      Object,
      Object,
      Object
    ])
  ],
  TokenRequester
);
exports.default = TokenRequester;
//# sourceMappingURL=TokenRequester.js.map
