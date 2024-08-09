const ComplianceData = {
  "type": "object",
  "title": "ComplianceData",
  "x-readme-ref-name": "ComplianceData",
  "properties": {
    "pep": {
      "description": "Indicate if the person is a Politically Exposed Person (PEP).",
      "type": "boolean",
      "examples": [
        "true"
      ]
    },
    "pepDescription": {
      "description": "Describe in your own words why this person is a PEP.",
      "type": "string",
      "examples": [
        "The person is active as an alderman in the municipality where he lives."
      ]
    },
    "dateOfBirth": {
      "description": "Date of birth of the person.",
      "type": "string",
      "format": "date-time",
      "examples": [
        "1999-12-12"
      ]
    },
    "nationality": {
      "description": "Nationality of the person.",
      "type": "string",
      "examples": [
        "NL"
      ]
    },
    "idDocumentNumber": {
      "description": "The id document number of the person",
      "type": "string",
      "examples": [
        ""
      ]
    }
  }
} as const;
export default ComplianceData
