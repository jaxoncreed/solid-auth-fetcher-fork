import AggregateHandler from "../../util/handlerPattern/AggregateHandler";
import IOidcHandler from "./IOidcHandler";
import IOidcOptions from "./IOidcOptions";
export default class AggregateOidcHandler
  extends AggregateHandler<[IOidcOptions], void>
  implements IOidcHandler {
  constructor(oidcLoginHandlers: IOidcHandler[]);
}
