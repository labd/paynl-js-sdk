import MerchantMinimal from './MerchantMinimal.js';

const MerchantContactMethod = {
  "title": "MerchantContactMethod",
  "x-readme-ref-name": "MerchantContactMethod",
  "type": "object",
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
    },
    "merchant": MerchantMinimal,
    "createdAt": {
      "description": "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "createdBy": {
      "description": "The reference to an account or token whom created the entity",
      "type": [
        "string",
        "null"
      ],
      "pattern": "^A(T)?(-\\d{4}){2}$",
      "readOnly": true,
      "examples": [
        "A-1234-4321"
      ]
    },
    "modifiedAt": {
      "description": "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "modifiedBy": {
      "description": "The reference to an account or token whom modified the entity",
      "type": [
        "string",
        "null"
      ],
      "pattern": "^A(T)?(-\\d{4}){2}$",
      "readOnly": true,
      "examples": [
        "A-1234-4321"
      ]
    },
    "deletedAt": {
      "description": "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "deletedBy": {
      "description": "The reference to an account or token whom deleted the entity",
      "type": [
        "string",
        "null"
      ],
      "pattern": "^A(T)?(-\\d{4}){2}$",
      "readOnly": true,
      "examples": [
        "A-1234-4321"
      ]
    }
  }
} as const;
export default MerchantContactMethod
