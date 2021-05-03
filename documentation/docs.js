module.exports = {
    "openapi" : "3.0.0",
    "servers" : [ {
      "description" : "Locally Served",
      "url" : "http://localhost:5566"
    } ],
    "info" : {
      "description" : "The employees hub",
      "version" : "1.0.0",
      "title" : "Employee API",
      "contact" : {
        "email" : "asadu.benedict@gmail.com"
      },
      "license" : {
        "name" : "Apache 2.0",
        "url" : "http://www.apache.org/licenses/LICENSE-2.0.html"
      }
    },
    "tags" : [ {
      "name" : "Employee",
      "description" : "Activities related to Employees"
    } ],
    "paths" : {
      "/api/v1/employees" : {
        "post" : {
          "tags" : [ "Employee" ],
          "requestBody" : {
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/Employee"
                }
              }
            }
          },
          "responses" : {
            "201" : {
              "description" : "Successful",
              "content" : {
                "application/json" : {
                  "schema" : {
                    "$ref" : "#/components/schemas/Employee"
                  }
                }
              }
            },
            "400" : {
              "description" : "An error occurred",
              "content" : {
                "application/json" : {
                  "schema" : {
                    "$ref" : "#/components/schemas/Error"
                  }
                }
              }
            }
          }
        },
        "get" : {
          "tags" : [ "Employee" ],
          "responses" : {
            "200" : {
              "description" : "Successful",
              "content" : {
                "application/json" : {
                  "schema" : {
                    "type" : "array",
                    "items" : null,
                    "$ref" : "#/components/schemas/Employee"
                  }
                }
              }
            },
            "400" : {
              "description" : "An error occurred",
              "content" : {
                "application/json" : {
                  "schema" : {
                    "$ref" : "#/components/schemas/Error"
                  }
                }
              }
            }
          }
        }
      },
      "/api/v1/employees/{employeeId}" : {
        "get" : {
          "tags" : [ "Employee" ],
          "parameters" : [ {
            "in" : "path",
            "name" : "employeeId",
            "description" : "Enquiring for Account for User",
            "required" : true,
            "schema" : {
              "type" : "string"
            }
          } ],
          "responses" : {
            "200" : {
              "description" : "Successful",
              "content" : {
                "application/json" : {
                  "schema" : {
                    "$ref" : "#/components/schemas/Employee"
                  }
                }
              }
            },
            "400" : {
              "description" : "An error occurred",
              "content" : {
                "application/json" : {
                  "schema" : {
                    "$ref" : "#/components/schemas/Error"
                  }
                }
              }
            }
          }
        },
        "put" : {
          "tags" : [ "Employee" ],
          "parameters" : [ {
            "in" : "path",
            "name" : "employeeId",
            "description" : "Adjusting Employee Information",
            "required" : true,
            "schema" : {
              "type" : "string"
            }
          } ],
          "requestBody" : {
            "description" : "Employee Information",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/Employee"
                }
              }
            }
          },
          "responses" : {
            "200" : {
              "description" : "Successful",
              "content" : {
                "application/json" : {
                  "schema" : {
                    "$ref" : "#/components/schemas/Employee"
                  }
                }
              }
            },
            "400" : {
              "description" : "An error occurred",
              "content" : {
                "application/json" : {
                  "schema" : {
                    "$ref" : "#/components/schemas/Error"
                  }
                }
              }
            }
          }
        },
        "delete" : {
          "tags" : [ "Employee" ],
          "parameters" : [ {
            "in" : "path",
            "name" : "employeeId",
            "description" : "Deleting Employee Information",
            "required" : true,
            "schema" : {
              "type" : "string"
            }
          } ],
          "responses" : {
            "200" : {
              "description" : "Successful"
            },
            "400" : {
              "description" : "An error occurred",
              "content" : {
                "application/json" : {
                  "schema" : {
                    "$ref" : "#/components/schemas/Error"
                  }
                }
              }
            }
          }
        }
      }
    },
    "components" : {
      "schemas" : {
        "Employee" : {
          "type" : "object",
          "properties" : {
            "employee_id" : {
              "type" : "string"
            },
            "first_name" : {
              "type" : "string"
            },
            "last_name" : {
              "type" : "string"
            },
            "Join_date" : {
              "type" : "string"
            },
            "age" : {
              "type" : "string"
            }
          }
        },
        "Error" : {
          "type" : "object",
          "properties" : {
            "error" : {
              "type" : "string"
            }
          }
        }
      }
    }
  }