const GetServicesServiceid = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "serviceId": {
            "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
            "type": "string",
            "examples": [
              "SL-####-####"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "serviceId"
        ]
      }
    ]
  }
} as const;
export default GetServicesServiceid
