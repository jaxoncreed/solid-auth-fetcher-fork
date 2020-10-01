"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwkSchema = {
  description: "json web key",
  type: "object",
  required: ["kty", "e", "n"],
  properties: {
    kty: {
      type: "string"
    },
    e: {
      type: "string"
    },
    n: {
      type: "string"
    }
  }
};
exports.default = jwkSchema;
//# sourceMappingURL=JwkSchema.js.map