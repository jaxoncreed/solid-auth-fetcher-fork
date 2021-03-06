import IAuthenticatedFetcher from "../IAuthenticatedFetcher";
import IRequestCredentials from "../IRequestCredentials";
import { IFetcher } from "../../util/Fetcher";
import { IUrlRepresentationConverter } from "../../util/UrlRepresenationConverter";
import { IStorageUtility } from "../../storage/StorageUtility";
export default class DpopAuthenticatedFetcher implements IAuthenticatedFetcher {
  private fetcher;
  private urlRepresentationConverter;
  private storageUtility;
  constructor(
    fetcher: IFetcher,
    urlRepresentationConverter: IUrlRepresentationConverter,
    storageUtility: IStorageUtility
  );
  canHandle(
    requestCredentials: IRequestCredentials,
    url: RequestInfo,
    requestInit?: RequestInit
  ): Promise<boolean>;
  handle(
    requestCredentials: IRequestCredentials,
    url: RequestInfo,
    requestInit?: RequestInit
  ): Promise<Response>;
}
