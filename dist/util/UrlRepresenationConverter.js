"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const url_parse_1 = __importDefault(require("url-parse"));
class UrlRepresentationConverter {
  requestInfoToUrl(requestInfo) {
    return new url_parse_1.default(requestInfo);
  }
}
exports.default = UrlRepresentationConverter;
//# sourceMappingURL=UrlRepresenationConverter.js.map
