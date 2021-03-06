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
const ConfigurationError_1 = __importDefault(
  require("../../errors/ConfigurationError")
);
let OidcLoginHandler = class OidcLoginHandler {
  constructor(
    oidcHandler,
    issuerConfigFetcher,
    dpopClientKeyManager,
    clientRegistrar
  ) {
    this.oidcHandler = oidcHandler;
    this.issuerConfigFetcher = issuerConfigFetcher;
    this.dpopClientKeyManager = dpopClientKeyManager;
    this.clientRegistrar = clientRegistrar;
  }
  checkOptions(options) {
    if (!options.oidcIssuer || !options.redirectUrl) {
      return new ConfigurationError_1.default(
        "OidcLoginHandler requires an oidcIssuer"
      );
    }
    return null;
  }
  async canHandle(options) {
    return !this.checkOptions(options);
  }
  async handle(options) {
    const optionsError = this.checkOptions(options);
    if (optionsError) {
      throw optionsError;
    }
    const issuerConfig = await this.issuerConfigFetcher.fetchConfig(
      options.oidcIssuer
    );
    const OidcOptions = {
      issuer: options.oidcIssuer,
      dpop: true,
      redirectUrl: options.redirectUrl,
      issuerConfiguration: issuerConfig,
      client: await this.clientRegistrar.getClient(
        {
          sessionId: options.sessionId,
          clientId: options.clientId,
          clientSecret: options.clientSecret,
          clientName: options.clientName,
          redirectUrl: options.redirectUrl
        },
        issuerConfig
      ),
      sessionId: options.sessionId,
      handleRedirect: options.handleRedirect
    };
    await this.oidcHandler.handle(OidcOptions);
  }
};
OidcLoginHandler = __decorate(
  [
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("oidcHandler")),
    __param(1, tsyringe_1.inject("issuerConfigFetcher")),
    __param(2, tsyringe_1.inject("dpopClientKeyManager")),
    __param(3, tsyringe_1.inject("clientRegistrar")),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
  ],
  OidcLoginHandler
);
exports.default = OidcLoginHandler;
//# sourceMappingURL=OidcLoginHandler.js.map
