import ISessionInfo from "../../../sessionInfo/ISessionInfo";
import IRedirectHandler from "./IRedirectHandler";
import { ISessionInfoManager } from "../../../sessionInfo/SessionInfoManager";
export default class InactionRedirectHandler implements IRedirectHandler {
  private sessionCreator;
  constructor(sessionCreator: ISessionInfoManager);
  canHandle(redirectUrl: string): Promise<boolean>;
  handle(redirectUrl: string): Promise<ISessionInfo | undefined>;
}
