import AggregateHandler from "../util/handlerPattern/AggregateHandler";
import ILoginHandler from "./ILoginHandler";
import ILoginOptions from "./ILoginOptions";
export default class AggregateLoginHandler
  extends AggregateHandler<[ILoginOptions], void>
  implements ILoginHandler {
  constructor(loginHandlers: ILoginHandler[]);
}
