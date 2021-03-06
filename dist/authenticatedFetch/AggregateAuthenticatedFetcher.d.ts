import AggregateHandler from "../util/handlerPattern/AggregateHandler";
import IAuthenticatedFetcher from "./IAuthenticatedFetcher";
import IRequestCredentials from "./IRequestCredentials";
export default class AggregateAuthenticatedFetcher
  extends AggregateHandler<
    [IRequestCredentials, RequestInfo, RequestInit?],
    Response
  >
  implements IAuthenticatedFetcher {
  constructor(authenticatedFetchers: IAuthenticatedFetcher[]);
}
