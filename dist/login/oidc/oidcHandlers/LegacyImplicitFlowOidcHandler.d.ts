import IOidcHandler from "../IOidcHandler";
import IOidcOptions from "../IOidcOptions";
import { IFetcher } from "../../../util/Fetcher";
import { IDpopHeaderCreator } from "../../../dpop/DpopHeaderCreator";
import { ISessionInfoManager } from "../../../sessionInfo/SessionInfoManager";
import { IRedirector } from "../Redirector";
export default class LegacyImplicitFlowOidcHandler implements IOidcHandler {
  private fetcher;
  private sessionInfoManager;
  private redirector;
  private dpopHeaderCreator;
  constructor(
    fetcher: IFetcher,
    sessionInfoManager: ISessionInfoManager,
    redirector: IRedirector,
    dpopHeaderCreator: IDpopHeaderCreator
  );
  canHandle(oidcLoginOptions: IOidcOptions): Promise<boolean>;
  handle(oidcLoginOptions: IOidcOptions): Promise<void>;
}
