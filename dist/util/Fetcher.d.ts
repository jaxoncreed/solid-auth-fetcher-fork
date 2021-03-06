import URL from "url-parse";
export interface IFetcher {
  fetch(url: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}
export default class Fetcher implements IFetcher {
  fetch(url: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}
