import Amount from './Amount.js';
import Integration from './Integration.js';
import Status from './Status.js';
import TransactionStatusPaymentData from './TransactionStatusPaymentData.js';
import TransactionStatusPaymentMethod from './TransactionStatusPaymentMethod.js';

const TransactionStatus = {
  "properties": {
    "id": {
      "description": "The Id of the transaction.",
      "type": "string"
    },
    "orderId": {
      "description": "The orderId of the transaction.",
      "type": "string"
    },
    "serviceCode": {
      "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
      "type": "string"
    },
    "description": {
      "description": "Is shown on the statement of the payer.",
      "type": "string"
    },
    "reference": {
      "description": "The merchant identification of this transaction. This field only allows alphanumeric characters",
      "type": "string"
    },
    "ipAddress": {
      "description": "An ip address",
      "type": "string"
    },
    "amount": Amount,
    "amountConverted": Amount,
    "amountPaid": Amount,
    "amountRefunded": Amount,
    "status": Status,
    "paymentData": TransactionStatusPaymentData,
    "paymentMethod": TransactionStatusPaymentMethod,
    "integration": Integration,
    "expiredAt": {
      "description": "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true
    },
    "createdAt": {
      "description": "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "createdBy": {
      "description": "The reference to an account or token whom created the entity",
      "type": [
        "string",
        "null"
      ],
      "pattern": "^A(T)?(-\\d{4}){2}$",
      "readOnly": true,
      "examples": [
        "A-1234-4321"
      ]
    },
    "modifiedAt": {
      "description": "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "modifiedBy": {
      "description": "The reference to an account or token whom modified the entity",
      "type": [
        "string",
        "null"
      ],
      "pattern": "^A(T)?(-\\d{4}){2}$",
      "readOnly": true,
      "examples": [
        "A-1234-4321"
      ]
    },
    "deletedAt": {
      "description": "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "deletedBy": {
      "description": "The reference to an account or token whom deleted the entity",
      "type": [
        "string",
        "null"
      ],
      "pattern": "^A(T)?(-\\d{4}){2}$",
      "readOnly": true,
      "examples": [
        "A-1234-4321"
      ]
    }
  },
  "type": "object",
  "title": "TransactionStatus",
  "x-readme-ref-name": "TransactionStatus"
} as const;
export default TransactionStatus
