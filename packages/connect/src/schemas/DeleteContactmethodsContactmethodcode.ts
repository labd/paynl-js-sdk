const DeleteContactmethodsContactmethodcode = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "contactMethodCode": {
            "description": "The contact method ID of your company starting with CM.",
            "type": "string",
            "examples": [
              "CM-1234-4321"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "contactMethodCode"
        ]
      }
    ]
  }
} as const;
export default DeleteContactmethodsContactmethodcode
