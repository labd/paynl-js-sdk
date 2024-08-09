const PaymentLink = {
  "required": [
    "securityMode"
  ],
  "properties": {
    "url": {
      "description": "The paylink url.",
      "type": "string",
      "format": "uri",
      "examples": [
        "https://example.com"
      ]
    },
    "securityMode": {
      "description": "0: URL, amount and variables can be changed\n1: Amount is fixed. URL and variables can be changed\n2: Pre filled variable can be changed. Amount is fixed\n3: URL, amount and variables are fixed. Only empty variables can be filled\n\n`1` `2` `3`",
      "type": "integer",
      "enum": [
        0,
        1,
        2,
        3
      ]
    }
  },
  "type": "object",
  "title": "PaymentLink",
  "x-readme-ref-name": "PaymentLink"
} as const;
export default PaymentLink
