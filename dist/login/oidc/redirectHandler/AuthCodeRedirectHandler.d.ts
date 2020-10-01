import ISessionInfo from "../../../sessionInfo/ISessionInfo";
import IRedirectHandler from "./IRedirectHandler";
import { IStorageUtility } from "../../../storage/StorageUtility";
import { IRedirector } from "../Redirector";
import { ITokenRequester } from "../TokenRequester";
import { ISessionInfoManager } from "../../../sessionInfo/SessionInfoManager";
export default class AuthCodeRedirectHandler implements IRedirectHandler {
  private storageUtility;
  private redirector;
  private tokenRequester;
  private sessionInfoManager;
  constructor(
    storageUtility: IStorageUtility,
    redirector: IRedirector,
    tokenRequester: ITokenRequester,
    sessionInfoManager: ISessionInfoManager
  );
  canHandle(redirectUrl: string): Promise<boolean>;
  handle(redirectUrl: string): Promise<ISessionInfo | undefined>;
}
