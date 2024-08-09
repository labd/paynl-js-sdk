import ClearingDataGroup from './ClearingDataGroup.js';
import Link from './Link.js';

const GetClearinglinetypes = {
  "response": {
    "200": {
      "required": [
        "total",
        "clearingDataGroups",
        "_links"
      ],
      "properties": {
        "total": {
          "type": "integer"
        },
        "clearingDataGroups": {
          "type": "array",
          "items": ClearingDataGroup
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
export default GetClearinglinetypes
