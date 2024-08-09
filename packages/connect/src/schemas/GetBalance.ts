const GetBalance = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "merchant": {
            "description": "The merchant id of your company starting with M.",
            "type": "string",
            "examples": [
              "M-1234-4321"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": []
      }
    ]
  }
} as const;
export default GetBalance
