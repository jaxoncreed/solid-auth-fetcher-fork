import IOidcHandler from "../IOidcHandler";
import IOidcOptions from "../IOidcOptions";
import IJoseUtility from "../../../jose/IJoseUtility";
import { IStorageUtility } from "../../../storage/StorageUtility";
import { IRedirector } from "../Redirector";
export default class AuthorizationCodeWithPkceOidcHandler
  implements IOidcHandler {
  private joseUtility;
  private storageUtility;
  private redirector;
  constructor(
    joseUtility: IJoseUtility,
    storageUtility: IStorageUtility,
    redirector: IRedirector
  );
  canHandle(oidcLoginOptions: IOidcOptions): Promise<boolean>;
  handle(oidcLoginOptions: IOidcOptions): Promise<void>;
}
