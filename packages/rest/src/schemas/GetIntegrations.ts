import IntegrationPlugin from './IntegrationPlugin.js';
import Link from './Link.js';

const GetIntegrations = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "integrations": {
          "type": "array",
          "items": IntegrationPlugin
        },
        "_links": {
          "type": "array",
          "items": Link
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetIntegrations
