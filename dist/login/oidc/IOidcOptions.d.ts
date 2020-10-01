import URL from "url-parse";
import IIssuerConfig from "./IIssuerConfig";
import IClient from "./IClient";
declare type IOidcOptions = IAccessTokenOidcOptions;
export default IOidcOptions;
export interface ICoreOidcOptions {
  issuer: URL;
  issuerConfiguration: IIssuerConfig;
  client: IClient;
  sessionId: string;
}
export interface IAccessTokenOidcOptions extends ICoreOidcOptions {
  dpop: boolean;
  redirectUrl: URL;
  handleRedirect?: (url: string) => unknown;
}
