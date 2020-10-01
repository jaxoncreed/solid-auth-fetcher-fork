import URL from "url-parse";
export default interface ILoginInputOptions {
  oidcIssuer?: URL;
  redirectUrl?: URL;
  clientId?: string;
  clientSecret?: string;
  clientName?: string;
  popUp?: boolean;
  handleRedirect?: (redirectUrl: string) => unknown;
}
