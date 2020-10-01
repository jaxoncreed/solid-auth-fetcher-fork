"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectEnvironment = void 0;
function detectEnvironment() {
  if (typeof document != "undefined") {
    return "browser";
  } else if (
    typeof navigator != "undefined" &&
    navigator.product == "ReactNative"
  ) {
    return "react-native";
  } else {
    return "server";
  }
}
exports.detectEnvironment = detectEnvironment;
class EnvironmentDetector {
  detect() {
    return detectEnvironment();
  }
}
exports.default = EnvironmentDetector;
//# sourceMappingURL=EnvironmentDetector.js.map
