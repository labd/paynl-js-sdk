const Location = {
  "required": [
    "code",
    "streetName",
    "zipCode",
    "city",
    "countryCode"
  ],
  "properties": {
    "code": {
      "type": "string"
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
  "title": "Location",
  "x-readme-ref-name": "Location"
} as const;
export default Location
