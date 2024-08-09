import Trademark from './Trademark.js';

const GetTrademarks = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "trademarks": {
          "type": "array",
          "items": Trademark
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetTrademarks
