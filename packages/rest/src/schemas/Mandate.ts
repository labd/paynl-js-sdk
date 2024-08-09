import Amount from './Amount.js';
import Customer from './Customer.js';
import Interval from './Interval.js';
import Stats from './Stats.js';

const Mandate = {
  "properties": {
    "id": {
      "description": "The direct debit identifier.",
      "type": "string",
      "examples": [
        "IL-####-####-####"
      ]
    },
    "type": {
      "description": "The type of direct debit. One of: single, mandate, recurring.",
      "type": "string",
      "examples": [
        "single"
      ]
    },
    "amount": Amount,
    "description": {
      "description": "The description of the direct debit.",
      "type": "string"
    },
    "statistics": Stats,
    "customer": Customer,
    "interval": Interval,
    "state": {
      "description": "State of the order. Options are: first, active, last, deleted, single.",
      "type": "string"
    }
  },
  "type": "object",
  "title": "Mandate",
  "x-readme-ref-name": "Mandate"
} as const;
export default Mandate
