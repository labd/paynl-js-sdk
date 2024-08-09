import Service from './Service.js';

const GetServices = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "services": {
          "type": "array",
          "items": Service
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetServices
