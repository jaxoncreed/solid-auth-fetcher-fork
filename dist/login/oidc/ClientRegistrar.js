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
let ClientRegistrar = class ClientRegistrar {
  constructor(fetcher, storageUtility) {
    this.fetcher = fetcher;
    this.storageUtility = storageUtility;
  }
  async getClient(options, issuerConfig) {
    var _a;
    if (options.clientId) {
      return {
        clientId: options.clientId,
        clientSecret: options.clientSecret
      };
    }
    const [storedClientId, storedClientSecret] = await Promise.all([
      this.storageUtility.getForUser(options.sessionId, "clientId", {
        secure: true
      }),
      this.storageUtility.getForUser(options.sessionId, "clientSecret", {
        secure: true
      })
    ]);
    if (storedClientId) {
      return {
        clientId: storedClientId,
        clientSecret: storedClientSecret
      };
    }
    const [registrationAccessToken, registrationClientUri] = await Promise.all([
      this.storageUtility.getForUser(
        options.sessionId,
        "registrationAccessToken"
      ),
      this.storageUtility.getForUser(options.sessionId, "registrationClientUri")
    ]);
    let registerResponse;
    if (registrationAccessToken && registrationClientUri) {
      registerResponse = await this.fetcher.fetch(registrationClientUri, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${registrationAccessToken}`
        }
      });
    } else {
      const config = {
        client_name: options.clientName,
        application_type: "web",
        redirect_uris: [
          (_a = options.redirectUrl) === null || _a === void 0
            ? void 0
            : _a.toString()
        ],
        subject_type: "pairwise",
        token_endpoint_auth_method: "client_secret_basic",
        code_challenge_method: "S256"
      };
      if (!issuerConfig.registrationEndpoint) {
        throw new Error(
          "Dynamic Registration could not be completed because the issuer has no registration endpoint."
        );
      }
      registerResponse = await this.fetcher.fetch(
        issuerConfig.registrationEndpoint,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(config)
        }
      );
    }
    if (!registerResponse.ok) {
      throw new Error(
        `Login Registration Error: ${await registerResponse.text()}`
      );
    }
    const responseBody = await registerResponse.json();
    await this.storageUtility.setForUser(
      options.sessionId,
      {
        clientId: responseBody.client_id,
        clientSecret: responseBody.client_secret
      },
      {
        secure: true
      }
    );
    await this.storageUtility.setForUser(options.sessionId, {
      registrationAccessToken: responseBody.registration_access_token,
      registrationClientUri: responseBody.registration_client_uri
    });
    return {
      clientId: responseBody.client_id,
      clientSecret: responseBody.client_secret
    };
  }
};
ClientRegistrar = __decorate(
  [
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("fetcher")),
    __param(1, tsyringe_1.inject("storageUtility")),
    __metadata("design:paramtypes", [Object, Object])
  ],
  ClientRegistrar
);
exports.default = ClientRegistrar;
//# sourceMappingURL=ClientRegistrar.js.map
