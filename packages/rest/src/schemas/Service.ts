const Service = {
  "properties": {
    "id": {
      "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
      "type": "string",
      "examples": [
        "SL-####-####"
      ]
    },
    "name": {
      "description": "The name of your service.",
      "type": "string",
      "examples": [
        "My first service!"
      ]
    },
    "description": {
      "description": "The description of the service.",
      "type": "string"
    },
    "testMode": {
      "description": "Indicates if the service is in testmode or not, possible values: false or true",
      "type": "integer"
    },
    "secret": {
      "description": "The unique reference for this service.",
      "type": "string",
      "examples": [
        "bade123abf124124abefa311b"
      ]
    },
    "createdAt": {
      "description": "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    }
  },
  "type": "object",
  "title": "Service",
  "x-readme-ref-name": "Service"
} as const;
export default Service
