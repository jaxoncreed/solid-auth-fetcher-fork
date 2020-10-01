import IHandleable from "../../util/handlerPattern/IHandleable";
import IOidcOptions from "./IOidcOptions";
declare type IOidcHandler = IHandleable<[IOidcOptions], void>;
export default IOidcHandler;
