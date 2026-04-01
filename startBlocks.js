export const startBlocks = {
  "blocks": {
    "languageVersion": 0,
    "blocks": [
      {
        "type": "bookcover_frame",
        "x": 147,
        "y": 61,
        "fields": {
          "frame": true
        },
        "inputs": {
          "statements": {
            "block": {
              "type": "bookcover_guide_bars",
              "inputs": {
                "width": {
                  "block": {
                    "type": "math_number",
                    "fields": {
                      "NUM": 0.5
                    }
                  }
                }
              },
              "next": {
                "block": {
                  "type": "bookcover_stroke",
                  "inputs": {
                    "COLOUR": {
                      "block": {
                        "type": "bookcover_colour",
                        "fields": {
                          "COLOUR": "#ff0000"
                        }
                      }
                    }
                  },
                  "next": {
                    "block": {
                      "type": "bookcover_fill",
                      "inputs": {
                        "COLOUR": {
                          "block": {
                            "type": "bookcover_none",
                          }
                        }
                      },
                      "next": {
                        "block": {
                          "type": "bookcover_ellipse",
                          "inputs": {
                            "x": {
                              "block": {
                                "type": "math_number",
                                "fields": {
                                  "NUM": 0
                                }
                              }
                            },
                            "y": {
                              "block": {
                                "type": "math_number",
                                "fields": {
                                  "NUM": 0
                                }
                              }
                            },
                            "w": {
                              "block": {
                                "type": "math_number",
                                "fields": {
                                  "NUM": 100
                                }
                              }
                            },
                            "h": {
                              "block": {
                                "type": "math_number",
                                "fields": {
                                  "NUM": 200
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    ]
  }
};