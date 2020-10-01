import ISessionInfo from "../../../sessionInfo/ISessionInfo";
import IJoseUtility from "../../../jose/IJoseUtility";
import { IStorageUtility } from "../../../storage/StorageUtility";
import { ISessionInfoManager } from "../../../sessionInfo/SessionInfoManager";
export interface ITokenSaver {
  saveTokenAndGetSession(
    localUserId: string,
    idToken: string,
    accessToken?: string,
    refreshToken?: string
  ): Promise<ISessionInfo>;
}
export default class TokenSaver implements ITokenSaver {
  private sessionCreator;
  private joseUtility;
  private storageUtility;
  constructor(
    sessionCreator: ISessionInfoManager,
    joseUtility: IJoseUtility,
    storageUtility: IStorageUtility
  );
  saveTokenAndGetSession(
    localUserId: string,
    idToken: string,
    accessToken?: string,
    refreshToken?: string
  ): Promise<ISessionInfo>;
}
