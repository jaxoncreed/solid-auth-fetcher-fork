import IOidcHandler from "../IOidcHandler";
import IOidcOptions from "../IOidcOptions";
export default class RefreshTokenOidcHandler implements IOidcHandler {
  canHandle(oidcLoginOptions: IOidcOptions): Promise<boolean>;
  handle(oidcLoginOptions: IOidcOptions): Promise<void>;
}
