"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenHeaders = void 0;
function flattenHeaders(headersToFlatten) {
  if (typeof headersToFlatten === "undefined") {
    return {};
  }
  const flatHeaders = {};
  if (typeof headersToFlatten.forEach !== "function") {
    return headersToFlatten;
  }
  headersToFlatten.forEach((value, key) => {
    flatHeaders[key] = value;
  });
  return flatHeaders;
}
exports.flattenHeaders = flattenHeaders;
//# sourceMappingURL=HeadersUtils.js.map
