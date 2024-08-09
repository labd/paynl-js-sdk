import Amount from './Amount.js';
import BankAccount from './BankAccount.js';
import Status from './Status.js';

const Directdebit = {
  "properties": {
    "id": {
      "description": "The direct debit identifier.",
      "type": "string",
      "examples": [
        "IL-####-####-####"
      ]
    },
    "paymentSessionId": {
      "description": "The payment session identifier.",
      "type": "string",
      "examples": [
        100000000
      ]
    },
    "processDate": {
      "description": "The ISO date at which this entity will be processed",
      "type": "string",
      "format": "date-time",
      "examples": [
        "2019-01-01T12:00:00+02:00"
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
    "declined": Status,
    "status": Status,
    "description": {
      "description": "The description of the direct debit.",
      "type": "string",
      "maxLength": 32
    },
    "bankAccount": BankAccount,
    "exchangeUrl": {
      "description": "The exchange URL to call.",
      "type": "string",
      "format": "uri"
    }
  },
  "type": "object",
  "title": "Directdebit",
  "x-readme-ref-name": "Directdebit"
} as const;
export default Directdebit
