"use strict";
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const validateSchema_1 = __importDefault(require("../util/validateSchema"));
let StorageUtility = class StorageUtility {
  constructor(secureStorage, insecureStorage) {
    this.secureStorage = secureStorage;
    this.insecureStorage = insecureStorage;
  }
  getKey(userId) {
    return `solidAuthFetcherUser:${userId}`;
  }
  async getUserData(userId, secure) {
    const stored = await (secure
      ? this.secureStorage
      : this.insecureStorage
    ).get(this.getKey(userId));
    if (stored === undefined) {
      return {};
    }
    try {
      return JSON.parse(stored);
    } catch (err) {
      return {};
    }
  }
  async setUserData(userId, data, secure) {
    await (secure ? this.secureStorage : this.insecureStorage).set(
      this.getKey(userId),
      JSON.stringify(data)
    );
  }
  async get(key, options) {
    const value = await ((options === null || options === void 0
    ? void 0
    : options.secure)
      ? this.secureStorage
      : this.insecureStorage
    ).get(key);
    if (
      value == undefined &&
      (options === null || options === void 0 ? void 0 : options.errorIfNull)
    ) {
      throw new Error(`[${key}] is not stored`);
    }
    return value;
  }
  async set(key, value, options) {
    return ((options === null || options === void 0
    ? void 0
    : options.secure)
      ? this.secureStorage
      : this.insecureStorage
    ).set(key, value);
  }
  async delete(key, options) {
    return ((options === null || options === void 0
    ? void 0
    : options.secure)
      ? this.secureStorage
      : this.insecureStorage
    ).delete(key);
  }
  async getForUser(userId, key, options) {
    const userData = await this.getUserData(
      userId,
      options === null || options === void 0 ? void 0 : options.secure
    );
    let value;
    if (!userData || !userData[key]) {
      value = undefined;
    }
    value = userData[key];
    if (
      value == undefined &&
      (options === null || options === void 0 ? void 0 : options.errorIfNull)
    ) {
      throw new Error(`Field [${key}] for user [${userId}] is not stored`);
    }
    return value || undefined;
  }
  async setForUser(userId, values, options) {
    const userData = await this.getUserData(
      userId,
      options === null || options === void 0 ? void 0 : options.secure
    );
    await this.setUserData(
      userId,
      { ...userData, ...values },
      options === null || options === void 0 ? void 0 : options.secure
    );
  }
  async deleteForUser(userId, key, options) {
    const userData = await this.getUserData(
      userId,
      options === null || options === void 0 ? void 0 : options.secure
    );
    delete userData[key];
    await this.setUserData(
      userId,
      userData,
      options === null || options === void 0 ? void 0 : options.secure
    );
  }
  async deleteAllUserData(userId, options) {
    await ((options === null || options === void 0
    ? void 0
    : options.secure)
      ? this.secureStorage
      : this.insecureStorage
    ).delete(this.getKey(userId));
  }
  async safeGet(key, options = {}) {
    const locallyStored = options.userId
      ? await this.getForUser(options.userId, key, { secure: options.secure })
      : await this.get(key, { secure: options.secure });
    if (locallyStored) {
      try {
        const parsedObject = JSON.parse(locallyStored);
        if (options.schema) {
          const val = validateSchema_1.default(options.schema, parsedObject);
          return val;
        }
        return parsedObject;
      } catch (err) {
        if (options.userId) {
          await this.deleteForUser(options.userId, key, {
            secure: options.secure
          });
        } else {
          await this.delete(key, { secure: options.secure });
        }
      }
    }
    return undefined;
  }
};
StorageUtility = __decorate(
  [
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("secureStorage")),
    __param(1, tsyringe_1.inject("insecureStorage")),
    __metadata("design:paramtypes", [Object, Object])
  ],
  StorageUtility
);
exports.default = StorageUtility;
//# sourceMappingURL=StorageUtility.js.map
