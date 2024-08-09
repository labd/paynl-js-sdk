const Address = {
  "properties": {
    "code": {
      "type": "string"
    },
    "firstName": {
      "description": "The forename (also known as a given name, Christian name or a first name).",
      "type": "string",
      "maxLength": 64,
      "minLength": 1,
      "examples": [
        "John"
      ]
    },
    "lastName": {
      "description": "The surname (also known as a family name or a last name).",
      "type": "string",
      "maxLength": 64,
      "minLength": 1,
      "examples": [
        "Doe"
      ]
    },
    "streetName": {
      "description": "The name of the street",
      "type": "string",
      "maxLength": 128,
      "minLength": 1,
      "examples": [
        "Visitlane"
      ]
    },
    "streetNumber": {
      "description": "The street number",
      "type": "string",
      "maxLength": 32,
      "minLength": 1,
      "examples": [
        "13"
      ]
    },
    "streetNumberExtension": {
      "description": "A house number extension is required to deal with appartments or other addresses sharing the same front door",
      "type": "string",
      "maxLength": 32,
      "minLength": 1,
      "examples": [
        "b1"
      ]
    },
    "zipCode": {
      "description": "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
      "type": "string",
      "maxLength": 16,
      "minLength": 1,
      "examples": [
        "5678CD"
      ]
    },
    "city": {
      "description": "The name of a city",
      "type": "string",
      "maxLength": 128,
      "minLength": 1,
      "examples": [
        "Amsterdam"
      ]
    },
    "regionCode": {
      "description": "Region code (iso-3166-2)",
      "type": "string",
      "examples": [
        "ZH"
      ]
    },
    "countryCode": {
      "description": "The country code consisting of 2 uppercase letters",
      "type": "string",
      "maxLength": 2,
      "minLength": 2,
      "examples": [
        "NL"
      ]
    }
  },
  "type": "object",
  "title": "Address",
  "x-readme-ref-name": "Address"
} as const;
export default Address
