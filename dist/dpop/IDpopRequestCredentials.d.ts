import IRequestCredentials from "../authenticatedFetch/IRequestCredentials";
export default interface IDpopRequestCredentials extends IRequestCredentials {
  type: "dpop";
}
