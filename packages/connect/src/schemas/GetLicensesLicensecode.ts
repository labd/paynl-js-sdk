const GetLicensesLicensecode = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "licenseCode": {
            "description": "License code.",
            "type": "string",
            "examples": [
              "AL-1234-4321"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "licenseCode"
        ]
      }
    ]
  }
} as const;
export default GetLicensesLicensecode
