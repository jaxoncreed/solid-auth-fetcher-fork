"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const node_jose_1 = require("node-jose");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_random_string_1 = __importDefault(require("crypto-random-string"));
const crypto_1 = __importDefault(require("crypto"));
class IsomorphicJoseUtility {
  async generateJWK(kty, crvBitlength, parameters) {
    const key = await node_jose_1.JWK.createKey(kty, crvBitlength, parameters);
    return key.toJSON(true);
  }
  async signJWT(payload, key, options) {
    const parsedKey = await node_jose_1.JWK.asKey(key);
    const convertedKey = parsedKey.toPEM(true);
    const signed = jsonwebtoken_1.default.sign(payload, convertedKey, {
      ...options
    });
    return signed;
  }
  async decodeJWT(token) {
    return jsonwebtoken_1.default.decode(token);
  }
  async privateJWKToPublicJWK(key) {
    return await node_jose_1.JWK.asKey(key, "public");
  }
  async generateCodeVerifier() {
    return crypto_random_string_1.default({
      length: 100,
      type: "alphanumeric"
    });
  }
  async generateCodeChallenge(verifier) {
    const hash = crypto_1.default.createHash("sha256");
    hash.update(verifier);
    return hash
      .digest()
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");
  }
}
exports.default = IsomorphicJoseUtility;
//# sourceMappingURL=IsomorphicJoseUtility.js.map
