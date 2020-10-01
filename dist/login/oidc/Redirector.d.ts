import { IEnvironmentDetector } from "../../util/EnvironmentDetector";
export interface IRedirectorOptions {
  handleRedirect?: (url: string) => unknown;
  redirectByReplacingState?: boolean;
}
export interface IRedirector {
  redirect(redirectUrl: string, redirectorOptions: IRedirectorOptions): void;
}
export default class Redirector implements IRedirector {
  private environmentDetector;
  constructor(environmentDetector: IEnvironmentDetector);
  redirect(redirectUrl: string, options?: IRedirectorOptions): void;
}
