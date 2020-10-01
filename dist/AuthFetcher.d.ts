import ILoginHandler from "./login/ILoginHandler";
import IRedirectHandler from "./login/oidc/redirectHandler/IRedirectHandler";
import ILogoutHandler from "./logout/ILogoutHandler";
import { ISessionInfoManager } from "./sessionInfo/SessionInfoManager";
import IAuthenticatedFetcher from "./authenticatedFetch/IAuthenticatedFetcher";
import { IEnvironmentDetector } from "./util/EnvironmentDetector";
import ISessionInfo from "./sessionInfo/ISessionInfo";
import ILoginInputOptions from "./ILoginInputOptions";
export default class AuthFetcher {
  private loginHandler;
  private redirectHandler;
  private logoutHandler;
  private sessionInfoManager;
  private authenticatedFetcher;
  private environmentDetector;
  constructor(
    loginHandler: ILoginHandler,
    redirectHandler: IRedirectHandler,
    logoutHandler: ILogoutHandler,
    sessionInfoManager: ISessionInfoManager,
    authenticatedFetcher: IAuthenticatedFetcher,
    environmentDetector: IEnvironmentDetector
  );
  private urlOptionToUrl;
  login(sessionId: string, options: ILoginInputOptions): Promise<void>;
  fetch(
    sessionId: string,
    url: RequestInfo,
    init?: RequestInit
  ): Promise<Response>;
  logout(sessionId: string): Promise<void>;
  getSessionInfo(sessionId: string): Promise<ISessionInfo | undefined>;
  getAllSessionInfo(): Promise<ISessionInfo[]>;
  handleIncomingRedirect(url: string): Promise<ISessionInfo | undefined>;
}
