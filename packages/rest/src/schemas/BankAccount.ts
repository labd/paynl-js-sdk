const BankAccount = {
  "required": [
    "iban",
    "bic",
    "owner"
  ],
  "properties": {
    "iban": {
      "description": "The International Bank Account Number (IBAN).",
      "type": "string",
      "examples": [
        "NL69INGB0123456789"
      ]
    },
    "bic": {
      "description": "Business Identifier Codes (BIC/SWIFT).",
      "type": "string",
      "examples": [
        "INGBNL2A"
      ]
    },
    "owner": {
      "description": "The owner of the bank account.",
      "type": "string",
      "maxLength": 64,
      "minLength": 1,
      "examples": [
        "John Doe"
      ]
    }
  },
  "type": "object",
  "title": "BankAccount",
  "x-readme-ref-name": "BankAccount"
} as const;
export default BankAccount
