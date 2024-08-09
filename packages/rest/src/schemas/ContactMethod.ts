const ContactMethod = {
  "properties": {
    "code": {
      "description": "The contact method ID of your company starting with CM.",
      "type": "string",
      "examples": [
        "CM-1234-4321"
      ]
    },
    "type": {
      "description": "The type of contact method.\n\n`email` `email_support` `phone` `phone_helpdesk` `phone_off_hours` `url` `email_msnskype`",
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
  "title": "ContactMethod",
  "x-readme-ref-name": "ContactMethod"
} as const;
export default ContactMethod
