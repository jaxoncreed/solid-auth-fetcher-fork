import URL from "url-parse";
export interface IUrlRepresentationConverter {
  requestInfoToUrl(requestInfo: RequestInfo): URL;
}
export default class UrlRepresentationConverter {
  requestInfoToUrl(requestInfo: RequestInfo): URL;
}
