const PatchContactmethodsContactmethodcode = {
  "body": {
    "properties": {
      "type": {
        "description": "The type of contact method.",
        "type": "string",
        "enum": [
          "email",
          "email_support",
          "phone",
          "phone_helpdesk",
          "phone_off_hours",
          "url",
          "email_msnskype"
        ],
        "examples": [
          "The type of contact method."
        ]
      },
      "value": {
        "description": "The value of the contact method.",
        "type": "string",
        "examples": [
          "088-88 666 22"
        ]
      },
      "description": {
        "description": "The description of the contact method.",
        "type": "string"
      },
      "public": {
        "description": "Is the contact method public accessible",
        "type": "boolean",
        "examples": [
          "true"
        ]
      },
      "notifications": {
        "description": "Does the contact method needs to receive notifications",
        "type": "boolean",
        "examples": [
          "false"
        ]
      }
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
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
export default PatchContactmethodsContactmethodcode
