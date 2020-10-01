"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const url_parse_1 = __importDefault(require("url-parse"));
const cross_fetch_1 = __importDefault(require("cross-fetch"));
class Fetcher {
  async fetch(url, init) {
    const fetchUrl = url instanceof url_parse_1.default ? url.toString() : url;
    if (typeof window !== "undefined" && typeof window.fetch !== "undefined") {
      return window.fetch(fetchUrl, init);
    }
    return cross_fetch_1.default(fetchUrl, init);
  }
}
exports.default = Fetcher;
//# sourceMappingURL=Fetcher.js.map
