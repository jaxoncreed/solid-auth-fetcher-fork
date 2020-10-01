import ILoginHandler from "../ILoginHandler";
import ILoginOptions from "../ILoginOptions";
export default class WebidLoginHandler implements ILoginHandler {
  canHandle(loginOptions: ILoginOptions): Promise<boolean>;
  handle(loginOptions: ILoginOptions): Promise<void>;
}
