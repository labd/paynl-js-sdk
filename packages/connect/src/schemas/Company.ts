const Company = {
  "properties": {
    "name": {
      "description": "The name of your merchant.",
      "type": "string",
      "examples": [
        "CompanyName"
      ]
    },
    "coc": {
      "description": "Your Chamber of commerce registration number. This format differs per country.",
      "type": "string",
      "examples": [
        "12345678"
      ]
    },
    "vat": {
      "description": "Value added tax identification number (VAT identification number).",
      "type": "string",
      "examples": [
        "NL807960147B01"
      ]
    },
    "countryCode": {
      "description": "The country code consisting of 2 uppercase letters",
      "type": "string",
      "examples": [
        "NL"
      ]
    }
  },
  "type": "object",
  "title": "Company",
  "x-readme-ref-name": "Company"
} as const;
export default Company
