import Amount from './Amount.js';
import Customer from './Customer.js';
import Integration from './Integration.js';
import Order from './Order.js';
import PaymentMethod from './PaymentMethod.js';
import Stats from './Stats.js';
import Status from './Status.js';
import TransferData from './TransferData.js';

const Transaction = {
  "required": [
    "serviceId",
    "amount",
    "returnUrl"
  ],
  "properties": {
    "id": {
      "description": "The Id of the transaction.",
      "type": "string",
      "examples": [
        "EX-1234-1234-1234"
      ]
    },
    "serviceId": {
      "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
      "type": "string",
      "examples": [
        "SL-####-####"
      ]
    },
    "description": {
      "description": "Is shown on the statement of the payer.",
      "type": "string",
      "maxLength": 32,
      "minLength": 1,
      "examples": [
        "Example description."
      ]
    },
    "reference": {
      "description": "The merchant identification of this transaction. This field only allows alphanumeric characters",
      "type": "string",
      "maxLength": 64,
      "minLength": 1,
      "pattern": "^[a-zA-Z0-9]{1,64}$",
      "examples": [
        "12345XXY0123"
      ]
    },
    "manualTransferCode": {
      "description": "Payment reference used to identify manual bank transfers",
      "type": "string",
      "examples": [
        "0000 0000 0000 0000"
      ]
    },
    "orderId": {
      "description": "The orderId of the transaction.",
      "type": "string",
      "examples": [
        "0000000000X00000"
      ]
    },
    "ipAddress": {
      "description": "An ip address",
      "type": "string",
      "examples": [
        "213.126.82.230"
      ]
    },
    "exchangeUrl": {
      "description": "The URL where we exchange the status of a transaction.",
      "type": "string",
      "format": "uri",
      "examples": [
        "https://demo.pay.nl/exchange.php"
      ]
    },
    "returnUrl": {
      "description": "The URL where the payer has to be send to after the payment.",
      "type": "string",
      "format": "uri",
      "examples": [
        "https://demo.pay.nl/complete/"
      ]
    },
    "paymentUrl": {
      "description": "The payment URL for this transaction",
      "type": "string",
      "format": "uri"
    },
    "amount": Amount,
    "expire": {
      "description": "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
      "type": "string",
      "format": "date-time",
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "created": {
      "description": "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
      "type": "string",
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "modified": {
      "description": "The date at which this entity was modified presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
      "type": "string",
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "amountConverted": Amount,
    "amountPaid": Amount,
    "amountRefunded": Amount,
    "paymentMethod": PaymentMethod,
    "status": Status,
    "integration": Integration,
    "customer": Customer,
    "order": Order,
    "stats": Stats,
    "type": {
      "description": "Defines the type of the transaction. Possible values are: CIT = Customer initiated simple e-com transaction, MIT = Merchant initiated transaction, MOTO = Customer initiated payment where card number entered manually, POS = Point of sale, ECOM\n\n`POS` `ECOM` `CIT` `MIT` `MOTO`",
      "type": "string",
      "enum": [
        "POS",
        "ECOM",
        "CIT",
        "MIT",
        "MOTO"
      ]
    },
    "transferData": {
      "type": "array",
      "items": TransferData
    }
  },
  "type": "object",
  "title": "Transaction",
  "x-readme-ref-name": "Transaction"
} as const;
export default Transaction
