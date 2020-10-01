import { IFetcher } from "../../util/Fetcher";
import IClient from "./IClient";
import IIssuerConfig from "./IIssuerConfig";
import { IStorageUtility } from "../../storage/StorageUtility";
import URL from "url-parse";
export interface IRegistrarOptions {
  sessionId: string;
  clientId?: string;
  clientSecret?: string;
  clientName?: string;
  redirectUrl?: URL;
}
export interface IClientRegistrar {
  getClient(
    options: IRegistrarOptions,
    issuerConfig: IIssuerConfig
  ): Promise<IClient>;
}
export default class ClientRegistrar implements IClientRegistrar {
  private fetcher;
  private storageUtility;
  constructor(fetcher: IFetcher, storageUtility: IStorageUtility);
  getClient(
    options: IRegistrarOptions,
    issuerConfig: IIssuerConfig
  ): Promise<IClient>;
}
