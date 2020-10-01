/// <reference types="node" />
import IStorage from "./storage/IStorage";
import { Session } from "./Session";
import { EventEmitter } from "events";
export interface ISessionManagerOptions {
  secureStorage?: IStorage;
  insecureStorage?: IStorage;
}
export declare class SessionManager extends EventEmitter {
  private authFetcher;
  private sessionRecords;
  private isInitialized;
  private handledIncomingRedirect;
  constructor(options?: ISessionManagerOptions);
  private init;
  private addNewSessionRecord;
  private getSessionFromCurrentSessionInfo;
  getSessions(): Promise<Session[]>;
  getSession(sessionId?: string): Promise<Session>;
  hasSession(sessionId: string): Promise<boolean>;
  onSessionLogin(callback: (session: Session) => unknown): void;
  onSessionLogout(callback: (session: Session) => unknown): void;
  detatchSession(sessionId: string): void;
  handleIncomingRedirect(url: string): Promise<void>;
}
