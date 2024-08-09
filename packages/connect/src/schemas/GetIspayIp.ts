const GetIspayIp = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "value": {
            "description": "An ip address",
            "type": "string",
            "examples": [
              "213.126.82.230"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "value"
        ]
      }
    ]
  }
} as const;
export default GetIspayIp
