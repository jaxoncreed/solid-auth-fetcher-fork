"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionManager = void 0;
const Session_1 = require("./Session");
const events_1 = require("events");
const dependencies_1 = require("./dependencies");
const EnvironmentDetector_1 = require("./util/EnvironmentDetector");
class SessionManager extends events_1.EventEmitter {
  constructor(options = {}) {
    super();
    this.sessionRecords = {};
    this.isInitialized = false;
    this.handledIncomingRedirect = false;
    this.authFetcher = dependencies_1.getAuthFetcherWithDependencies({
      secureStorage: options.secureStorage,
      insecureStorage: options.insecureStorage
    });
  }
  async init() {
    if (!this.isInitialized) {
      const env = EnvironmentDetector_1.detectEnvironment();
      if (env === "browser") {
        await this.handleIncomingRedirect(window.location.href);
      }
      this.isInitialized = true;
    }
  }
  addNewSessionRecord(session) {
    const logoutCallback = () => {
      this.emit("sessionLogout", session);
    };
    session.onLogout(logoutCallback);
    this.sessionRecords[session.info.sessionId] = {
      session,
      logoutCallback
    };
    return session;
  }
  getSessionFromCurrentSessionInfo(sessionInfo) {
    const sessionRecord = this.sessionRecords[sessionInfo.sessionId];
    if (sessionRecord) {
      sessionRecord.session.info.webId = sessionInfo.webId;
      sessionRecord.session.info.isLoggedIn = sessionInfo.isLoggedIn;
      return sessionRecord.session;
    } else {
      return this.addNewSessionRecord(
        new Session_1.Session({
          authFetcher: this.authFetcher,
          sessionInfo: sessionInfo
        })
      );
    }
  }
  async getSessions() {
    await this.init();
    const sessionInfos = await this.authFetcher.getAllSessionInfo();
    return sessionInfos.map(sessionInfo =>
      this.getSessionFromCurrentSessionInfo(sessionInfo)
    );
  }
  async getSession(sessionId) {
    await this.init();
    let session;
    if (sessionId) {
      const retrievedSessionInfo = await this.authFetcher.getSessionInfo(
        sessionId
      );
      if (retrievedSessionInfo) {
        session = this.getSessionFromCurrentSessionInfo(retrievedSessionInfo);
      } else {
        session = this.addNewSessionRecord(
          new Session_1.Session({ authFetcher: this.authFetcher }, sessionId)
        );
      }
    } else {
      session = this.addNewSessionRecord(
        new Session_1.Session({ authFetcher: this.authFetcher })
      );
    }
    return session;
  }
  async hasSession(sessionId) {
    await this.init();
    return (await this.authFetcher.getSessionInfo(sessionId)) !== undefined;
  }
  onSessionLogin(callback) {
    this.on("sessionLogin", callback);
  }
  onSessionLogout(callback) {
    this.on("sessionLogin", callback);
  }
  detatchSession(sessionId) {
    const sessionRecord = this.sessionRecords[sessionId];
    if (sessionRecord) {
      sessionRecord.session.removeListener(
        "onLogout",
        sessionRecord.logoutCallback
      );
      delete this.sessionRecords[sessionId];
    }
  }
  async handleIncomingRedirect(url) {
    if (!this.handledIncomingRedirect) {
      const sessionInfo = await this.authFetcher.handleIncomingRedirect(url);
      if (sessionInfo) {
        const session = this.getSessionFromCurrentSessionInfo(sessionInfo);
        this.emit("sessionLogin", session);
        session.emit("login");
        this.handledIncomingRedirect = true;
      }
    }
  }
}
exports.SessionManager = SessionManager;
//# sourceMappingURL=SessionManager.js.map
