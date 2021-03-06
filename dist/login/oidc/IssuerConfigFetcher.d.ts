import IIssuerConfig from "./IIssuerConfig";
import URL from "url-parse";
import { IFetcher } from "../../util/Fetcher";
import { IStorageUtility } from "../../storage/StorageUtility";
export interface IIssuerConfigFetcher {
  fetchConfig(issuer: URL): Promise<IIssuerConfig>;
}
export default class IssuerConfigFetcher implements IIssuerConfigFetcher {
  private fetcher;
  private storageUtility;
  constructor(fetcher: IFetcher, storageUtility: IStorageUtility);
  private getLocalStorageKey;
  private processConfig;
  fetchConfig(issuer: URL): Promise<IIssuerConfig>;
}
