const ApiAbortOrder = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "examples": [
              "9f5cc332-8cd7-4242-b9c8-51941aa12837"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#",
            "description": "The id of the order"
          }
        },
        "required": [
          "id"
        ]
      }
    ]
  }
} as const;
export default ApiAbortOrder
