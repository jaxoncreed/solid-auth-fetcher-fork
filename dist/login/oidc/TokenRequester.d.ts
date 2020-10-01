import { IStorageUtility } from "../../storage/StorageUtility";
import { IIssuerConfigFetcher } from "./IssuerConfigFetcher";
import { IFetcher } from "../../util/Fetcher";
import { IDpopHeaderCreator } from "../../dpop/DpopHeaderCreator";
import IJoseUtility from "../../jose/IJoseUtility";
import { IClientRegistrar } from "./ClientRegistrar";
import { IDpopClientKeyManager } from "../../dpop/DpopClientKeyManager";
export interface ITokenRequester {
  request(localUserId: string, body: Record<string, string>): Promise<void>;
}
export default class TokenRequester {
  private storageUtility;
  private issuerConfigFetcher;
  private fetcher;
  private dpopHeaderCreator;
  private joseUtility;
  private clientRegistrar;
  private dpopClientKeyManager;
  constructor(
    storageUtility: IStorageUtility,
    issuerConfigFetcher: IIssuerConfigFetcher,
    fetcher: IFetcher,
    dpopHeaderCreator: IDpopHeaderCreator,
    joseUtility: IJoseUtility,
    clientRegistrar: IClientRegistrar,
    dpopClientKeyManager: IDpopClientKeyManager
  );
  request(sessionId: string, body: Record<string, string>): Promise<void>;
  private btoa;
}
