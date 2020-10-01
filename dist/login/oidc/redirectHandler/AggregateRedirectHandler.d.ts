import AggregateHandler from "../../../util/handlerPattern/AggregateHandler";
import ISessionInfo from "../../../sessionInfo/ISessionInfo";
import IRedirectHandler from "./IRedirectHandler";
export default class AggregateRedirectHandler
  extends AggregateHandler<[string], ISessionInfo | undefined>
  implements IRedirectHandler {
  constructor(redirectHandlers: IRedirectHandler[]);
}
