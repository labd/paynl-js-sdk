const DeleteDirectdebitsIncassoorderid = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "incassoOrderId": {
            "description": "The direct debit identifier.",
            "type": "string",
            "examples": [
              "IL-####-####-####"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "incassoOrderId"
        ]
      }
    ]
  }
} as const;
export default DeleteDirectdebitsIncassoorderid
