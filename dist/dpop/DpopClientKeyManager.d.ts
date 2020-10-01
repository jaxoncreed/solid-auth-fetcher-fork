import { JSONWebKey } from "jose";
import IJoseUtility from "../jose/IJoseUtility";
import { IStorageUtility } from "../storage/StorageUtility";
export interface IDpopClientKeyManager {
  generateClientKeyIfNotAlready(): Promise<void>;
  getClientKey(): Promise<JSONWebKey | undefined>;
}
export default class DpopClientKeyManager implements IDpopClientKeyManager {
  private storageUtility;
  private joseUtility;
  constructor(storageUtility: IStorageUtility, joseUtility: IJoseUtility);
  private getLocalStorageKey;
  generateClientKeyIfNotAlready(): Promise<void>;
  getClientKey(): Promise<JSONWebKey | undefined>;
}
