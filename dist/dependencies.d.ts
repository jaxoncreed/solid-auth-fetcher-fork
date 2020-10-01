import "reflect-metadata";
import AuthFetcher from "./AuthFetcher";
import IStorage from "./storage/IStorage";
export declare function getAuthFetcherWithDependencies(dependencies: {
  secureStorage?: IStorage;
  insecureStorage?: IStorage;
}): AuthFetcher;
