import IStorage from "./IStorage";
export default class BrowserStorage implements IStorage {
  get(key: string): Promise<string | undefined>;
  set(key: string, value: string): Promise<void>;
  delete(key: string): Promise<void>;
}
