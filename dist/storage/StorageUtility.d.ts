import IStorage from "../storage/IStorage";
export interface IStorageUtility {
  get(
    key: string,
    options?: {
      errorIfNull?: boolean;
      secure?: boolean;
    }
  ): Promise<string | undefined>;
  set(
    key: string,
    value: string,
    options?: {
      secure?: boolean;
    }
  ): Promise<void>;
  delete(
    key: string,
    options?: {
      secure?: boolean;
    }
  ): Promise<void>;
  getForUser(
    userId: string,
    key: string,
    options?: {
      errorIfNull?: boolean;
      secure?: boolean;
    }
  ): Promise<string | undefined>;
  setForUser(
    userId: string,
    values: Record<string, string>,
    options?: {
      secure?: boolean;
    }
  ): Promise<void>;
  deleteForUser(
    userId: string,
    key: string,
    options?: {
      secure?: boolean;
    }
  ): Promise<void>;
  deleteAllUserData(
    userId: string,
    options?: {
      secure?: boolean;
    }
  ): Promise<void>;
  safeGet(
    key: string,
    options?: Partial<{
      schema?: Record<string, any>;
      postProcess?: (retrievedObject: any) => any;
      userId?: string;
      secure?: boolean;
    }>
  ): Promise<any | undefined>;
}
export default class StorageUtility implements IStorageUtility {
  private secureStorage;
  private insecureStorage;
  constructor(secureStorage: IStorage, insecureStorage: IStorage);
  private getKey;
  private getUserData;
  private setUserData;
  get(
    key: string,
    options?: {
      errorIfNull?: boolean;
      secure?: boolean;
    }
  ): Promise<string | undefined>;
  set(
    key: string,
    value: string,
    options?: {
      secure?: boolean;
    }
  ): Promise<void>;
  delete(
    key: string,
    options?: {
      secure?: boolean;
    }
  ): Promise<void>;
  getForUser(
    userId: string,
    key: string,
    options?: {
      errorIfNull?: boolean;
      secure?: boolean;
    }
  ): Promise<string | undefined>;
  setForUser(
    userId: string,
    values: Record<string, string>,
    options?: {
      secure?: boolean;
    }
  ): Promise<void>;
  deleteForUser(
    userId: string,
    key: string,
    options?: {
      secure?: boolean;
    }
  ): Promise<void>;
  deleteAllUserData(
    userId: string,
    options?: {
      secure?: boolean;
    }
  ): Promise<void>;
  safeGet(
    key: string,
    options?: {
      schema?: Record<string, unknown>;
      userId?: string;
      secure?: boolean;
    }
  ): Promise<unknown | undefined>;
}
