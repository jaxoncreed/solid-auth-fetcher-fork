import IHandleable from "../../../util/handlerPattern/IHandleable";
import ISessionInfo from "../../../sessionInfo/ISessionInfo";
declare type IRedirectHandler = IHandleable<[string], ISessionInfo | undefined>;
export default IRedirectHandler;
