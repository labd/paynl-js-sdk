import Amount from './Amount.js';
import BankAccount from './BankAccount.js';
import Status from './Status.js';

const Refund = {
  "properties": {
    "id": {
      "description": "The ID of the refund",
      "type": "string",
      "examples": [
        "RF-####-####-####"
      ]
    },
    "paymentSessionId": {
      "description": "The payment session identifier.",
      "type": "string",
      "examples": [
        100000000
      ]
    },
    "amount": Amount,
    "description": {
      "description": "The description of the refund.",
      "type": "string",
      "maxLength": 32,
      "minLength": 1,
      "examples": [
        "The product never got delivered."
      ]
    },
    "bankAccount": BankAccount,
    "status": Status,
    "processDate": {
      "description": "The ISO date at which this entity will be processed",
      "type": "string",
      "format": "date-time",
      "examples": [
        "2019-01-01T12:00:00+02:00"
      ]
    },
    "vatPercentage": {
      "description": "the vat percentage this refund applies to. Only applicable for amount, not products, and only for AfterPay.",
      "type": "number",
      "format": "float",
      "examples": [
        "21.0"
      ]
    },
    "exchangeUrl": {
      "description": "The URL where we exchange the status of a transaction.",
      "type": "string",
      "format": "uri",
      "examples": [
        "https://demo.pay.nl/exchange.php"
      ]
    }
  },
  "type": "object",
  "title": "Refund",
  "x-readme-ref-name": "Refund"
} as const;
export default Refund
