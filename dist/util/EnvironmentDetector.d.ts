export declare type environmentName = "browser" | "server" | "react-native";
export interface IEnvironmentDetector {
  detect(): environmentName;
}
export declare function detectEnvironment():
  | "browser"
  | "react-native"
  | "server";
export default class EnvironmentDetector {
  detect(): environmentName;
}
