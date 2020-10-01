import URL from "url-parse";
export default interface ILoginOptions {
  sessionId: string;
  oidcIssuer?: URL;
  redirectUrl?: URL;
  clientId?: string;
  clientSecret?: string;
  clientName?: string;
  popUp?: boolean;
  handleRedirect?: (redirectUrl: string) => unknown;
}
