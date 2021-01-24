"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const events_1 = require("events");
const dependencies_1 = require("./dependencies");
const uuid_1 = require("uuid");
class Session extends events_1.EventEmitter {
  constructor(sessionOptions = {}, sessionId) {
    super();
    if (sessionOptions.authFetcher) {
      this.authFetcher = sessionOptions.authFetcher;
    } else if (sessionOptions.secureStorage && sessionOptions.insecureStorage) {
      this.authFetcher = dependencies_1.getAuthFetcherWithDependencies({
        secureStorage: sessionOptions.secureStorage,
        insecureStorage: sessionOptions.insecureStorage
      });
    } else {
      throw new Error(
        "Session requires either storage options or auth fetcher."
      );
    }
    if (sessionOptions.sessionInfo) {
      this.info = {
        sessionId: sessionOptions.sessionInfo.sessionId,
        isLoggedIn: sessionOptions.sessionInfo.isLoggedIn,
        webId: sessionOptions.sessionInfo.webId
      };
    } else {
      this.info = {
        sessionId:
          sessionId !== null && sessionId !== void 0 ? sessionId : uuid_1.v4(),
        isLoggedIn: false
      };
    }
  }
  async init() {
    throw new Error("Not Implemented");
  }
  async login(options) {
    await this.authFetcher.login(this.info.sessionId, {
      ...options
    });
    this.emit("login");
  }
  async fetch(url, init) {
    return this.authFetcher.fetch(this.info.sessionId, url, init);
  }
  async logout() {
    await this.authFetcher.logout(this.info.sessionId);
    this.emit("logout");
  }
  async handleIncomingRedirect(url) {
    const sessionInfo = await this.authFetcher.handleIncomingRedirect(url);
    if (sessionInfo) {
      this.info.isLoggedIn = sessionInfo.isLoggedIn;
      this.info.webId = sessionInfo.webId;
    }
    return sessionInfo;
  }
  onLogin(callback) {
    this.on("login", callback);
  }
  onLogout(callback) {
    this.on("logout", callback);
  }
}
exports.Session = Session;
//# sourceMappingURL=Session.js.map
