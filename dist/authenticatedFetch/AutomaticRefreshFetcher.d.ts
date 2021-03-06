import IAuthenticatedFetcher from "./IAuthenticatedFetcher";
import IRequestCredentials from "./IRequestCredentials";
import { ITokenRefresher } from "../login/oidc/refresh/TokenRefresher";
export default class AutomaticRefreshHandler implements IAuthenticatedFetcher {
  private aggregateAuthenticatedFetcher;
  private tokenRefresher;
  constructor(
    aggregateAuthenticatedFetcher: IAuthenticatedFetcher,
    tokenRefresher: ITokenRefresher
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
