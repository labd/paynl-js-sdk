const ComplianceDataPerson = {
  "title": "ComplianceDataPerson",
  "x-readme-ref-name": "ComplianceDataPerson",
  "type": "object",
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
    },
    "ubo": {
      "description": "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest\n\n`no` `direct` `indirect` `pseudo`",
      "type": "string",
      "enum": [
        "no",
        "direct",
        "indirect",
        "pseudo"
      ],
      "examples": [
        "direct"
      ]
    },
    "uboPercentage": {
      "description": "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
      "type": "integer",
      "examples": [
        "25"
      ]
    },
    "authorizedToSign": {
      "description": "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)\n\n`no` `alone` `shared`",
      "type": "string",
      "enum": [
        "no",
        "alone",
        "shared"
      ],
      "examples": [
        "shared"
      ]
    },
    "relationshipDescription": {
      "description": "Describe in your own words the relation the person has with this company.",
      "type": "string",
      "examples": [
        "John Doe of test company"
      ]
    }
  }
} as const;
export default ComplianceDataPerson
