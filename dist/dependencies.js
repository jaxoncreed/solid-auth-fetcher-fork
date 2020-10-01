"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function() {
            return m[k];
          }
        });
      }
    : function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function(o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthFetcherWithDependencies = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const AuthFetcher_1 = __importDefault(require("./AuthFetcher"));
const AggregateAuthenticatedFetcher_1 = __importDefault(
  require("./authenticatedFetch/AggregateAuthenticatedFetcher")
);
const DpopAuthenticatedFetcher_1 = __importDefault(
  require("./authenticatedFetch/dpop/DpopAuthenticatedFetcher")
);
const UnauthenticatedFetcher_1 = __importDefault(
  require("./authenticatedFetch/unauthenticated/UnauthenticatedFetcher")
);
const AggregateLoginHandler_1 = __importDefault(
  require("./login/AggregateLoginHandler")
);
const IsomorphicJoseUtility_1 = __importDefault(
  require("./jose/IsomorphicJoseUtility")
);
const OidcLoginHandler_1 = __importDefault(
  require("./login/oidc/OidcLoginHandler")
);
const AggregateOidcHandler_1 = __importDefault(
  require("./login/oidc/AggregateOidcHandler")
);
const AuthorizationCodeOidcHandler_1 = __importDefault(
  require("./login/oidc/oidcHandlers/AuthorizationCodeOidcHandler")
);
const AuthorizationCodeWithPkceOidcHandler_1 = __importDefault(
  require("./login/oidc/oidcHandlers/AuthorizationCodeWithPkceOidcHandler")
);
const ClientCredentialsOidcHandler_1 = __importDefault(
  require("./login/oidc/oidcHandlers/ClientCredentialsOidcHandler")
);
const PrimaryDeviceOidcHandler_1 = __importDefault(
  require("./login/oidc/oidcHandlers/PrimaryDeviceOidcHandler")
);
const SecondaryDeviceOidcHandler_1 = __importDefault(
  require("./login/oidc/oidcHandlers/SecondaryDeviceOidcHandler")
);
const LegacyImplicitFlowOidcHandler_1 = __importDefault(
  require("./login/oidc/oidcHandlers/LegacyImplicitFlowOidcHandler")
);
const RefreshTokenOidcHandler_1 = __importDefault(
  require("./login/oidc/oidcHandlers/RefreshTokenOidcHandler")
);
const Fetcher_1 = __importDefault(require("./util/Fetcher"));
const IssuerConfigFetcher_1 = __importDefault(
  require("./login/oidc/IssuerConfigFetcher")
);
const BearerAuthenticatedFetcher_1 = __importDefault(
  require("./authenticatedFetch/bearer/BearerAuthenticatedFetcher")
);
const DpopHeaderCreator_1 = __importDefault(
  require("./dpop/DpopHeaderCreator")
);
const DpopClientKeyManager_1 = __importDefault(
  require("./dpop/DpopClientKeyManager")
);
const StorageUtility_1 = __importDefault(require("./storage/StorageUtility"));
const UuidGenerator_1 = __importDefault(require("./util/UuidGenerator"));
const GeneralRedirectHandler_1 = __importDefault(
  require("./login/oidc/redirectHandler/GeneralRedirectHandler")
);
const EnvironmentDetector_1 = __importStar(
  require("./util/EnvironmentDetector")
);
const GeneralLogoutHandler_1 = __importDefault(
  require("./logout/GeneralLogoutHandler")
);
const UrlRepresenationConverter_1 = __importDefault(
  require("./util/UrlRepresenationConverter")
);
const SessionInfoManager_1 = __importDefault(
  require("./sessionInfo/SessionInfoManager")
);
const AuthCodeRedirectHandler_1 = __importDefault(
  require("./login/oidc/redirectHandler/AuthCodeRedirectHandler")
);
const AggregateRedirectHandler_1 = __importDefault(
  require("./login/oidc/redirectHandler/AggregateRedirectHandler")
);
const BrowserStorage_1 = __importDefault(require("./storage/BrowserStorage"));
const TokenSaver_1 = __importDefault(
  require("./login/oidc/redirectHandler/TokenSaver")
);
const Redirector_1 = __importDefault(require("./login/oidc/Redirector"));
const InactionRedirectHandler_1 = __importDefault(
  require("./login/oidc/redirectHandler/InactionRedirectHandler")
);
const PopUpLoginHandler_1 = __importDefault(
  require("./login/popUp/PopUpLoginHandler")
);
const AggregatePostPopUpLoginHandler_1 = __importDefault(
  require("./login/popUp/AggregatePostPopUpLoginHandler")
);
const ClientRegistrar_1 = __importDefault(
  require("./login/oidc/ClientRegistrar")
);
const TokenRefresher_1 = __importDefault(
  require("./login/oidc/refresh/TokenRefresher")
);
const AutomaticRefreshFetcher_1 = __importDefault(
  require("./authenticatedFetch/AutomaticRefreshFetcher")
);
const TokenRequester_1 = __importDefault(
  require("./login/oidc/TokenRequester")
);
const InMemoryStorage_1 = __importDefault(require("./storage/InMemoryStorage"));
tsyringe_1.container.register("fetcher", {
  useClass: Fetcher_1.default
});
tsyringe_1.container.register("dpopHeaderCreator", {
  useClass: DpopHeaderCreator_1.default
});
tsyringe_1.container.register("dpopClientKeyManager", {
  useClass: DpopClientKeyManager_1.default
});
tsyringe_1.container.register("storageUtility", {
  useClass: StorageUtility_1.default
});
tsyringe_1.container.register("uuidGenerator", {
  useClass: UuidGenerator_1.default
});
tsyringe_1.container.register("joseUtility", {
  useClass: IsomorphicJoseUtility_1.default
});
tsyringe_1.container.register("environmentDetector", {
  useClass: EnvironmentDetector_1.default
});
tsyringe_1.container.register("urlRepresentationConverter", {
  useClass: UrlRepresenationConverter_1.default
});
tsyringe_1.container.register("sessionInfoManager", {
  useClass: SessionInfoManager_1.default
});
tsyringe_1.container.register("authenticatedFetcher", {
  useClass: AutomaticRefreshFetcher_1.default
});
tsyringe_1.container.register("aggregateAuthenticatedFetcher", {
  useClass: AggregateAuthenticatedFetcher_1.default
});
tsyringe_1.container.register("authenticatedFetchers", {
  useClass: DpopAuthenticatedFetcher_1.default
});
tsyringe_1.container.register("authenticatedFetchers", {
  useClass: BearerAuthenticatedFetcher_1.default
});
tsyringe_1.container.register("authenticatedFetchers", {
  useClass: UnauthenticatedFetcher_1.default
});
tsyringe_1.container.register("loginHandler", {
  useClass: AggregateLoginHandler_1.default
});
tsyringe_1.container.register("loginHandlers", {
  useClass: PopUpLoginHandler_1.default
});
tsyringe_1.container.register("loginHandlers", {
  useClass: OidcLoginHandler_1.default
});
tsyringe_1.container.register("postPopUpLoginHandler", {
  useClass: AggregatePostPopUpLoginHandler_1.default
});
tsyringe_1.container.register("postPopUpLoginHandlers", {
  useClass: OidcLoginHandler_1.default
});
tsyringe_1.container.register("oidcHandler", {
  useClass: AggregateOidcHandler_1.default
});
tsyringe_1.container.register("oidcHandlers", {
  useClass: RefreshTokenOidcHandler_1.default
});
tsyringe_1.container.register("oidcHandlers", {
  useClass: AuthorizationCodeOidcHandler_1.default
});
tsyringe_1.container.register("oidcHandlers", {
  useClass: AuthorizationCodeWithPkceOidcHandler_1.default
});
tsyringe_1.container.register("oidcHandlers", {
  useClass: ClientCredentialsOidcHandler_1.default
});
tsyringe_1.container.register("oidcHandlers", {
  useClass: PrimaryDeviceOidcHandler_1.default
});
tsyringe_1.container.register("oidcHandlers", {
  useClass: SecondaryDeviceOidcHandler_1.default
});
tsyringe_1.container.register("oidcHandlers", {
  useClass: LegacyImplicitFlowOidcHandler_1.default
});
tsyringe_1.container.register("redirector", {
  useClass: Redirector_1.default
});
tsyringe_1.container.register("clientRegistrar", {
  useClass: ClientRegistrar_1.default
});
tsyringe_1.container.register("tokenRequester", {
  useClass: TokenRequester_1.default
});
tsyringe_1.container.register("redirectHandler", {
  useClass: AggregateRedirectHandler_1.default
});
tsyringe_1.container.register("redirectHandlers", {
  useClass: AuthCodeRedirectHandler_1.default
});
tsyringe_1.container.register("redirectHandlers", {
  useClass: GeneralRedirectHandler_1.default
});
tsyringe_1.container.register("redirectHandlers", {
  useClass: InactionRedirectHandler_1.default
});
tsyringe_1.container.register("tokenSaver", {
  useClass: TokenSaver_1.default
});
tsyringe_1.container.register("issuerConfigFetcher", {
  useClass: IssuerConfigFetcher_1.default
});
tsyringe_1.container.register("tokenRefresher", {
  useClass: TokenRefresher_1.default
});
tsyringe_1.container.register("logoutHandler", {
  useClass: GeneralLogoutHandler_1.default
});
function getAuthFetcherWithDependencies(dependencies) {
  let secureStorage;
  let insecureStorage;
  switch (EnvironmentDetector_1.detectEnvironment()) {
    case "browser":
    case "react-native":
      secureStorage =
        dependencies.secureStorage || new InMemoryStorage_1.default();
      insecureStorage =
        dependencies.insecureStorage || new BrowserStorage_1.default();
      break;
    case "server":
      secureStorage =
        dependencies.secureStorage || new InMemoryStorage_1.default();
      insecureStorage =
        dependencies.insecureStorage || new InMemoryStorage_1.default();
      break;
  }
  const authenticatorContainer = tsyringe_1.container.createChildContainer();
  authenticatorContainer.register("secureStorage", {
    useValue: secureStorage
  });
  authenticatorContainer.register("insecureStorage", {
    useValue: insecureStorage
  });
  return authenticatorContainer.resolve(AuthFetcher_1.default);
}
exports.getAuthFetcherWithDependencies = getAuthFetcherWithDependencies;
//# sourceMappingURL=dependencies.js.map
