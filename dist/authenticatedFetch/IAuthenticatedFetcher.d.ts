import IHandleable from "../util/handlerPattern/IHandleable";
import IRequestCredentials from "./IRequestCredentials";
declare type IAuthenticatedFetcher = IHandleable<
  [IRequestCredentials, RequestInfo, RequestInit?],
  Response
>;
export default IAuthenticatedFetcher;
