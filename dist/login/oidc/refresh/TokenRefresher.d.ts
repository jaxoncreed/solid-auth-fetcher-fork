import { IStorageUtility } from "../../../storage/StorageUtility";
import { ITokenRequester } from "../TokenRequester";
export interface ITokenRefresher {
  refresh(localUserId: string): Promise<void>;
}
export default class TokenRefresher implements ITokenRefresher {
  private storageUtility;
  private tokenRequester;
  constructor(storageUtility: IStorageUtility, tokenRequester: ITokenRequester);
  refresh(localUserId: string): Promise<void>;
}
