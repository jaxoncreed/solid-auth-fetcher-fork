import URL from "url-parse";
import IJoseUtility from "../jose/IJoseUtility";
import { IDpopClientKeyManager } from "./DpopClientKeyManager";
import { IUuidGenerator } from "../util/UuidGenerator";
export interface IDpopHeaderCreator {
  createHeaderToken(audience: URL, method: string): Promise<string>;
}
export default class DpopHeaderCreator implements IDpopHeaderCreator {
  private joseUtility;
  private dpopClientKeyManager;
  private uuidGenerator;
  constructor(
    joseUtility: IJoseUtility,
    dpopClientKeyManager: IDpopClientKeyManager,
    uuidGenerator: IUuidGenerator
  );
  normalizeHtu(audience: URL): string;
  createHeaderToken(audience: URL, method: string): Promise<string>;
}
