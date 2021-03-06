import ILogoutHandler from "./ILogoutHandler";
import { IStorageUtility } from "../storage/StorageUtility";
export default class LogoutHandler implements ILogoutHandler {
  private storageUtility;
  constructor(storageUtility: IStorageUtility);
  canHandle(): Promise<boolean>;
  handle(userId: string): Promise<void>;
}
