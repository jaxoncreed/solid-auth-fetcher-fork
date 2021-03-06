import {
  JWKECKey,
  ECCurve,
  BasicParameters,
  OKPCurve,
  JWKOKPKey,
  JWKRSAKey,
  JWKOctKey,
  JWT as JoseJWT,
  JSONWebKey
} from "jose";
import IJoseUtility from "./IJoseUtility";
export default class IsomorphicJoseUtility implements IJoseUtility {
  generateJWK(
    kty: "EC" | "OKP" | "RSA" | "oct",
    crvBitlength?: ECCurve | OKPCurve | number,
    parameters?: BasicParameters
  ): Promise<JSONWebKey>;
  signJWT(
    payload: Record<string, any>,
    key: JWKECKey | JWKOKPKey | JWKRSAKey | JWKOctKey,
    options?: JoseJWT.SignOptions
  ): Promise<string>;
  decodeJWT(token: string): Promise<Record<string, unknown>>;
  privateJWKToPublicJWK(key: JSONWebKey): Promise<JSONWebKey>;
  generateCodeVerifier(): Promise<string>;
  generateCodeChallenge(verifier: string): Promise<string>;
}
