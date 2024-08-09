import TurnoverGroup from './TurnoverGroup.js';

const GetTurnovergroups = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "merchant": {
            "description": "The merchant id of your company starting with M.",
            "type": "string",
            "examples": [
              "M-1234-4321"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": []
      }
    ]
  },
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "turnoverGroups": {
          "type": "array",
          "items": TurnoverGroup
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetTurnovergroups
