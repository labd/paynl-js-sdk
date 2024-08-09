const OrderPaymentMethodKlarna = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "required": [
    "countryCode"
  ],
  "title": "Order.PaymentMethod.Klarna",
  "x-readme-ref-name": "Order.PaymentMethod.Klarna",
  "properties": {
    "countryCode": {
      "enum": [
        "AU",
        "AT",
        "BE",
        "CA",
        "CZ",
        "DK",
        "FI",
        "FR",
        "DE",
        "GR",
        "IE",
        "IT",
        "MX",
        "NL",
        "NZ",
        "NO",
        "PL",
        "PT",
        "RO",
        "ES",
        "SE",
        "CH",
        "GB",
        "US"
      ],
      "type": "string"
    }
  },
  "items": {
    "type": "string"
  }
} as const;
export default OrderPaymentMethodKlarna
