/// <reference types="node" />
import IStorage from "./storage/IStorage";
import ILoginInputOptions from "./ILoginInputOptions";
import { EventEmitter } from "events";
import ISessionInfo from "./sessionInfo/ISessionInfo";
import AuthFetcher from "./AuthFetcher";
export interface ISessionOptions {
  secureStorage: IStorage;
  insecureStorage: IStorage;
  sessionInfo: ISessionInfo;
  authFetcher: AuthFetcher;
}
export declare class Session extends EventEmitter {
  readonly info: ISessionInfo;
  private authFetcher;
  constructor(sessionOptions?: Partial<ISessionOptions>, sessionId?: string);
  init(): Promise<void>;
  login(options: ILoginInputOptions): Promise<void>;
  fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
  logout(): Promise<void>;
  handleIncomingRedirect(url: string): Promise<ISessionInfo | undefined>;
  onLogin(callback: () => unknown): void;
  onLogout(callback: () => unknown): void;
}
