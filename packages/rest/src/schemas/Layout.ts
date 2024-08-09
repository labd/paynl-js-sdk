const Layout = {
  "type": "object",
  "title": "Layout",
  "x-readme-ref-name": "Layout",
  "properties": {
    "code": {
      "description": "Id of layout",
      "type": "string",
      "examples": [
        "LY-####-####"
      ]
    },
    "name": {
      "description": "Name of the layout",
      "type": "string",
      "examples": [
        "My layout"
      ]
    },
    "ccsUrl": {
      "description": "CSS url to the layout css",
      "type": "string"
    },
    "icon": {
      "description": "Image in base64 encoding",
      "type": "string"
    },
    "supportingColor": {
      "description": "Supporting hex color code",
      "type": "string",
      "examples": [
        "FFFFFF"
      ]
    },
    "headerTextColor": {
      "description": "Header hex color code",
      "type": "string",
      "examples": [
        "FFFFFF"
      ]
    },
    "buttonColor": {
      "description": "Button hex color code",
      "type": "string",
      "examples": [
        "FFFFFF"
      ]
    },
    "buttonTextColor": {
      "description": "Button text hex color code",
      "type": "string",
      "examples": [
        "FFFFFF"
      ]
    }
  },
  "items": {
    "type": "object",
    "title": "Layout",
    "x-readme-ref-name": "Layout",
    "properties": {
      "code": {
        "description": "Id of layout",
        "type": "string",
        "example": "LY-####-####"
      },
      "name": {
        "description": "Name of the layout",
        "type": "string",
        "example": "My layout"
      },
      "ccsUrl": {
        "description": "CSS url to the layout css",
        "type": "string"
      },
      "icon": {
        "description": "Image in base64 encoding",
        "type": "string"
      },
      "supportingColor": {
        "description": "Supporting hex color code",
        "type": "string",
        "example": "FFFFFF"
      },
      "headerTextColor": {
        "description": "Header hex color code",
        "type": "string",
        "example": "FFFFFF"
      },
      "buttonColor": {
        "description": "Button hex color code",
        "type": "string",
        "example": "FFFFFF"
      },
      "buttonTextColor": {
        "description": "Button text hex color code",
        "type": "string",
        "example": "FFFFFF"
      }
    }
  }
} as const;
export default Layout
