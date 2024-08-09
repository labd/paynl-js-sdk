import Amount from './Amount.js';

const Qr = {
  "properties": {
    "uuid": {
      "description": "The uuid of the QR code.",
      "type": "string",
      "maxLength": 36,
      "minLength": 36,
      "examples": [
        "1234-5678-1234-5678"
      ]
    },
    "serviceId": {
      "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
      "type": "string",
      "examples": [
        "SL-####-####"
      ]
    },
    "amount": Amount,
    "secret": {
      "description": "The secret of the QR code.",
      "type": "string",
      "format": "byte",
      "maxLength": 40,
      "minLength": 40,
      "examples": [
        "secret"
      ]
    },
    "reference": {
      "description": "The reference of the QR code.",
      "type": "string",
      "examples": [
        "123456"
      ]
    },
    "padChar": {
      "description": "The padding character.",
      "type": "string",
      "maxLength": 1,
      "minLength": 1,
      "pattern": "^[a-zA-Z0-9]{1}$",
      "examples": [
        "a"
      ]
    },
    "referenceType": {
      "description": "The reference type of the QR code. Must be one of the following values: string, hex.\n\n`string` `hex`",
      "type": "string",
      "enum": [
        "string",
        "hex"
      ],
      "examples": [
        "string"
      ]
    },
    "externalPaymentLink": {
      "description": "The external link to complete your payment with the supplier.",
      "type": "string",
      "examples": [
        "https://qr6.ideal.nl/uuid"
      ]
    },
    "paymentLink": {
      "description": "A link to complete your payment using our payment screen.",
      "type": "string",
      "examples": [
        "https://ideal.pay.nl/qr/uuid"
      ]
    },
    "contents": {
      "description": "The qr contents as a base64 string.",
      "type": "string",
      "examples": [
        "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAADAFBM..."
      ]
    }
  },
  "type": "object",
  "title": "Qr",
  "x-readme-ref-name": "Qr"
} as const;
export default Qr
