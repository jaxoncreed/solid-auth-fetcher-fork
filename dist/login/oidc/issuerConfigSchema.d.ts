declare const issuerConfigSchema: {
  type: string;
  properties: {
    issuer: {
      type: string;
      format: string;
    };
    authorization_endpoint: {
      type: string;
      format: string;
    };
    token_endpoint: {
      type: string;
      format: string;
    };
    userinfo_endpoint: {
      type: string;
      format: string;
    };
    jwks_uri: {
      type: string;
      format: string;
    };
    registration_endpoint: {
      type: string;
      format: string;
    };
    scopes_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    response_types_supported: {
      type: string;
      items: {
        type: string;
        joinedStringOf: string[];
      };
    };
    response_modes_supported: {
      type: string;
      items: {
        type: string;
        enum: string[];
      };
      default: string[];
    };
    grant_types_supported: {
      type: string;
      items: {
        type: string;
        enum: string[];
      };
      default: string[];
    };
    acr_values_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    subject_types_supported: {
      type: string;
      items: {
        type: string;
        enum: string[];
      };
    };
    id_token_signing_alg_values_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    id_token_encryption_alg_values_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    id_token_encryption_enc_values_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    userinfo_signing_alg_values_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    userinfo_encryption_alg_values_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    userinfo_encryption_enc_values_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    request_object_signing_alg_values_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    request_object_encryption_alg_values_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    request_object_encryption_enc_values_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    token_endpoint_auth_methods_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    token_endpoint_auth_signing_alg_values_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    display_values_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    claim_types_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    claims_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    service_documentation: {
      type: string;
      items: {
        type: string;
      };
    };
    claims_locales_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    ui_locales_supported: {
      type: string;
      items: {
        type: string;
      };
    };
    claims_parameter_supported: {
      type: string;
    };
    request_parameter_supported: {
      type: string;
    };
    request_uri_parameter_supported: {
      type: string;
    };
    require_request_uri_registration: {
      type: string;
    };
    op_policy_uri: {
      type: string;
      format: string;
    };
    op_tos_uri: {
      type: string;
      format: string;
    };
  };
  additionalProperties: boolean;
};
export default issuerConfigSchema;
