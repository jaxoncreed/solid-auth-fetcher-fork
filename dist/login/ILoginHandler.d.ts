import IHandleable from "../util/handlerPattern/IHandleable";
import ILoginOptions from "./ILoginOptions";
declare type ILoginHandler = IHandleable<[ILoginOptions], void>;
export default ILoginHandler;
