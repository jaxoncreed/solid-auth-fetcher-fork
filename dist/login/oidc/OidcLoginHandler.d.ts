import ILoginHandler from "../ILoginHandler";
import ILoginOptions from "../ILoginOptions";
import IOidcHandler from "./IOidcHandler";
import { IIssuerConfigFetcher } from "./IssuerConfigFetcher";
import { IDpopClientKeyManager } from "../../dpop/DpopClientKeyManager";
import { IClientRegistrar } from "./ClientRegistrar";
export default class OidcLoginHandler implements ILoginHandler {
  private oidcHandler;
  private issuerConfigFetcher;
  private dpopClientKeyManager;
  private clientRegistrar;
  constructor(
    oidcHandler: IOidcHandler,
    issuerConfigFetcher: IIssuerConfigFetcher,
    dpopClientKeyManager: IDpopClientKeyManager,
    clientRegistrar: IClientRegistrar
  );
  checkOptions(options: ILoginOptions): Error | null;
  canHandle(options: ILoginOptions): Promise<boolean>;
  handle(options: ILoginOptions): Promise<void>;
}
