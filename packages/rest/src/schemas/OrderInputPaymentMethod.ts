import OrderPaymentMethodDirectDebit from './OrderPaymentMethodDirectDebit.js';
import OrderPaymentMethodGiftcard from './OrderPaymentMethodGiftcard.js';
import OrderPaymentMethodIDeal from './OrderPaymentMethodIDeal.js';
import OrderPaymentMethodKlarna from './OrderPaymentMethodKlarna.js';
import OrderPaymentMethodPayByBank from './OrderPaymentMethodPayByBank.js';
import OrderPaymentMethodPin from './OrderPaymentMethodPin.js';
import OrderPaymentMethodSprayPay from './OrderPaymentMethodSprayPay.js';

const OrderInputPaymentMethod = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "id": {
      "type": [
        "integer",
        "null"
      ],
      "examples": [
        10
      ]
    },
    "input": {
      "anyOf": [
        OrderPaymentMethodGiftcard,
        OrderPaymentMethodIDeal,
        OrderPaymentMethodPin,
        OrderPaymentMethodDirectDebit,
        OrderPaymentMethodKlarna,
        "::convert::OrderPaymentMethodPrzelewy24",
        OrderPaymentMethodPayByBank,
        OrderPaymentMethodSprayPay
      ],
      "type": [
        "object",
        "null"
      ],
      "description": "Additional input for the payment method."
    }
  },
  "title": "Order.Input.PaymentMethod",
  "x-readme-ref-name": "Order.Input.PaymentMethod"
} as const;
export default OrderInputPaymentMethod
