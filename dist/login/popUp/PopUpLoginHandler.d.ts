import ILoginHandler from "../ILoginHandler";
import ILoginOptions from "../ILoginOptions";
import { IEnvironmentDetector } from "../../util/EnvironmentDetector";
import { ISessionInfoManager } from "../../sessionInfo/SessionInfoManager";
export default class PopUpLoginHandler implements ILoginHandler {
  private environmentDetector;
  private loginHandler;
  private sessionCreator;
  constructor(
    environmentDetector: IEnvironmentDetector,
    loginHandler: ILoginHandler,
    sessionCreator: ISessionInfoManager
  );
  canHandle(loginOptions: ILoginOptions): Promise<boolean>;
  handle(loginOptions: ILoginOptions): Promise<void>;
}
