const GetServicesConfig = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "serviceId": {
            "description": "The ID of your service. Required if you authenticate with AT-code/token. You can find the service ID here: https://my.pay.nl/programs/programs",
            "type": "string",
            "examples": [
              "SL-####-####"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": []
      }
    ]
  }
} as const;
export default GetServicesConfig
