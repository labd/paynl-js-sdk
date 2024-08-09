import Amount from './Amount.js';
import Customer from './Customer.js';
import Integration from './Integration.js';
import Layout from './Layout.js';
import MerchantMinimal from './MerchantMinimal.js';
import Order from './Order.js';
import PaymentMethod from './PaymentMethod.js';
import Stats from './Stats.js';
import Status from './Status.js';
import TradeName from './TradeName.js';
import TransferData from './TransferData.js';

const TransactionLoad = {
  "title": "TransactionLoad",
  "x-readme-ref-name": "TransactionLoad",
  "required": [
    "serviceId",
    "amount",
    "returnUrl"
  ],
  "type": "object",
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
    },
    "serviceCode": {
      "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
      "type": "string"
    },
    "merchant": MerchantMinimal,
    "tradeName": TradeName,
    "layout": Layout,
    "expiredAt": {
      "description": "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true
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
  }
} as const;
export default TransactionLoad
