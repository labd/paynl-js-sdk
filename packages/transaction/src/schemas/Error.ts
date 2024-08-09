import Violation from './Violation.js';

const Error = {
  "properties": {
    "type": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "detail": {
      "type": "string"
    },
    "violations": {
      "type": "array",
      "items": Violation
    }
  },
  "type": "object",
  "title": "Error",
  "x-readme-ref-name": "Error"
} as const;
export default Error
