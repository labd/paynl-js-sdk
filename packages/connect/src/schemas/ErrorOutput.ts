import ViolationOutput from './ViolationOutput.js';

const ErrorOutput = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "type": {
      "default": "https://developer.pay.nl/docs/error-codes",
      "type": "string",
      "examples": [
        "https://developer.pay.nl/docs/error-codes"
      ]
    },
    "code": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "detail": {
      "type": "string"
    },
    "violations": {
      "items": ViolationOutput,
      "type": "array"
    },
    "trace": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "title": "ErrorOutput",
  "x-readme-ref-name": "ErrorOutput"
} as const;
export default ErrorOutput
