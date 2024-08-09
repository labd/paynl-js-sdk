const PostContactmethods = {
  "body": {
    "properties": {
      "merchantCode": {
        "description": "The merchant id of your company starting with M.",
        "type": "string",
        "examples": [
          "M-1234-4321"
        ]
      },
      "contactMethod": {
        "required": [
          "type",
          "value",
          "public",
          "notifications"
        ],
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
            "type": "string",
            "examples": [
              "Support desk"
            ]
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
        "type": "object"
      }
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  }
} as const;
export default PostContactmethods
