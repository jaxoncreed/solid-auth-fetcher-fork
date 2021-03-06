"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseObject = exports.compileJoinedStringOf = exports.compileTypeof = void 0;
const ajv_1 = __importDefault(require("ajv"));
const url_parse_1 = __importDefault(require("url-parse"));
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
function compileTypeof(type) {
  return data => {
    return typeof data === type;
  };
}
exports.compileTypeof = compileTypeof;
function compileJoinedStringOf(strings) {
  return data => {
    return !data.split(" ").some(value => strings.indexOf(value) === -1);
  };
}
exports.compileJoinedStringOf = compileJoinedStringOf;
function traverseObject(data, schema, parent, parentKey) {
  if (schema.type === "object") {
    Object.keys(data).forEach(key => {
      if (schema.properties && schema.properties[key]) {
        traverseObject(data[key], schema.properties[key], data, key);
      }
    });
  } else if (schema.type === "array") {
    data.forEach((item, index) => {
      if (schema.items) {
        traverseObject(item, schema.items, data, index);
      }
    });
  } else {
    if (schema.shouldConvertToUrl && parent && parentKey) {
      parent[parentKey] = new url_parse_1.default(data);
    }
  }
}
exports.traverseObject = traverseObject;
function validateSchema(schema, inputItem) {
  const item = lodash_clonedeep_1.default(inputItem);
  const ajv = new ajv_1.default();
  ajv.addKeyword("typeof", {
    compile: compileTypeof
  });
  ajv.addKeyword("joinedStringOf", {
    compile: compileJoinedStringOf
  });
  if (!ajv.validate(schema, item)) {
    let message = `${schema.title ? schema.title : "schema"} is invalid`;
    if (ajv.errors) {
      message += ":";
      message += ajv.errors
        .map(err => `\n${err.dataPath} ${err.message}`)
        .toString();
    }
    throw new Error(message);
  }
  traverseObject(item, schema);
  return item;
}
exports.default = validateSchema;
//# sourceMappingURL=validateSchema.js.map
