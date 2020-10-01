import ISessionInfo from "../../../sessionInfo/ISessionInfo";
import IRedirectHandler from "./IRedirectHandler";
import { ITokenSaver } from "./TokenSaver";
export default class GeneralRedirectHandler implements IRedirectHandler {
  private tokenSaver;
  constructor(tokenSaver: ITokenSaver);
  canHandle(redirectUrl: string): Promise<boolean>;
  handle(redirectUrl: string): Promise<ISessionInfo>;
}
