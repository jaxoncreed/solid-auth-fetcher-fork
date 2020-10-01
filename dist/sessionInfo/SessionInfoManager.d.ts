import { IStorageUtility } from "../storage/StorageUtility";
import ISessionInfo from "./ISessionInfo";
export interface ISessionInfoManagerOptions {
  loggedIn?: boolean;
  webId?: string;
}
export interface ISessionInfoManager {
  update(sessionId: string, options: ISessionInfoManagerOptions): Promise<void>;
  get(sessionId: string): Promise<ISessionInfo | undefined>;
  getAll(): Promise<ISessionInfo[]>;
}
export default class SessionInfoManager implements ISessionInfoManager {
  private storageUtility;
  constructor(storageUtility: IStorageUtility);
  update(sessionId: string, options: ISessionInfoManagerOptions): Promise<void>;
  get(sessionId: string): Promise<ISessionInfo | undefined>;
  getAll(): Promise<ISessionInfo[]>;
}
