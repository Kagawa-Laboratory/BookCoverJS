// // ChatGPT に作ってもらったもの
// export const toolbox = {
//   kind: "categoryToolbox",
//   contents: [
//     {
//       kind: "category",
//       name: "基本設定",
//       colour: 100,
//       contents: [
//         {
//           kind: "block",
//           type: "bookcover_card_frame",
//           inputs: {
//             PAPER_SPEC: {
//               block: {
//                 type: "bookcover_cardspec",
//                 fields: { CARDSPEC: "エーワン F8A4-5" }
//               }
//             },
//             DO: {
//               block: {
//                 type: "bookcover_foreachcard",
//                 fields: {
//                   CARD: "カード",
//                   COUNTER: "カウンター"
//                 }
//               }
//             }
//           }
//         },
//         { kind: "block", type: "bookcover_frame" },
//         { kind: "block", type: "bookcover_rulers" },
//         {
//           kind: "block",
//           type: "bookcover_guide_bars",
//           inputs: {
//             width: {
//               block: {
//                 type: "math_number",
//                 fields: { NUM: 0.1 }
//               }
//             }
//           }
//         },
//         { kind: "block", type: "bookcover_foreachcard" },
//         { kind: "block", type: "bookcover_cardspec" },
//         { kind: "block", type: "bookcover_pageWidth" },
//         { kind: "block", type: "bookcover_pageHeight" },
//         {
//           kind: "block",
//           type: "bookcover_cardWidth",
//           inputs: {
//             CARD: {
//               block: {
//                 type: "variables_get",
//                 fields: { VAR: "カード" }
//               }
//             }
//           }
//         },
//         {
//           kind: "block",
//           type: "bookcover_cardHeight",
//           inputs: {
//             CARD: {
//               block: {
//                 type: "variables_get",
//                 fields: { VAR: "カード" }
//               }
//             }
//           }
//         }
//       ]
//     },

//     {
//       kind: "category",
//       name: "色",
//       colour: 20,
//       contents: [
//         {
//           kind: "block",
//           type: "bookcover_fill",
//           inputs: {
//             COLOUR: {
//               block: {
//                 type: "bookcover_colour",
//                 fields: { COLOUR: "#ff0000" }
//               }
//             }
//           }
//         },
//         {
//           kind: "block",
//           type: "bookcover_fill_opacity",
//           inputs: {
//             opacity: {
//               block: { type: "math_number", fields: { NUM: 0.5 } }
//             }
//           }
//         },
//         {
//           kind: "block",
//           type: "bookcover_stroke",
//           inputs: {
//             COLOUR: {
//               block: {
//                 type: "bookcover_colour",
//                 fields: { COLOUR: "#ff0000" }
//               }
//             }
//           }
//         },
//         {
//           kind: "block",
//           type: "bookcover_stroke_weight",
//           inputs: {
//             width: {
//               block: { type: "math_number", fields: { NUM: 1 } }
//             }
//           }
//         },
//         {
//           kind: "block",
//           type: "bookcover_stroke_opacity",
//           inputs: {
//             opacity: {
//               block: { type: "math_number", fields: { NUM: 0.5 } }
//             }
//           }
//         },
//         { kind: "block", type: "bookcover_colour" },
//         { kind: "block", type: "bookcover_none" },

//         {
//           kind: "block",
//           type: "bookcover_rotate_h",
//           inputs: {
//             colour: {
//               block: {
//                 type: "bookcover_colour",
//                 fields: { COLOUR: "#ff0000" }
//               }
//             },
//             angle: {
//               block: {
//                 type: "bookcover_angle",
//                 fields: { angle: 120 }
//               }
//             }
//           }
//         },
//         {
//           kind: "block",
//           type: "bookcover_add_s",
//           inputs: {
//             colour: {
//               block: {
//                 type: "bookcover_colour",
//                 fields: { COLOUR: "#ff0000" }
//               }
//             },
//             delta: {
//               block: {
//                 type: "math_number",
//                 fields: { NUM: -10 }
//               }
//             }
//           }
//         },
//         {
//           kind: "block",
//           type: "bookcover_add_l",
//           inputs: {
//             colour: {
//               block: {
//                 type: "bookcover_colour",
//                 fields: { COLOUR: "#ff0000" }
//               }
//             },
//             delta: {
//               block: {
//                 type: "math_number",
//                 fields: { NUM: -10 }
//               }
//             }
//           }
//         },
//         {
//           kind: "block",
//           type: "bookcover_rgb100",
//           inputs: {
//             red: { block: { type: "math_number", fields: { NUM: 0 } } },
//             green: { block: { type: "math_number", fields: { NUM: 100 } } },
//             blue: { block: { type: "math_number", fields: { NUM: 100 } } }
//           }
//         },
//         {
//           kind: "block",
//           type: "bookcover_hsl360",
//           inputs: {
//             hue: {
//               block: {
//                 type: "bookcover_angle",
//                 fields: { angle: 180 }
//               }
//             },
//             saturation: {
//               block: { type: "math_number", fields: { NUM: 100 } }
//             },
//             luminance: {
//               block: { type: "math_number", fields: { NUM: 50 } }
//             }
//           }
//         }
//       ]
//     },

//     {
//       kind: "category",
//       name: "文字列",
//       colour: 160,
//       contents: [
//         {
//           kind: "block",
//           type: "bookcover_text_font",
//           inputs: {
//             name: {
//               block: {
//                 type: "bookcover_font_name",
//                 fields: { NAME: "ＭＳ 明朝" }
//               }
//             },
//             size: {
//               block: {
//                 type: "math_number",
//                 fields: { NUM: 12 }
//               }
//             }
//           }
//         },
//         {
//           kind: "block",
//           type: "bookcover_text",
//           inputs: {
//             x: { block: { type: "math_number", fields: { NUM: 10 } } },
//             y: { block: { type: "math_number", fields: { NUM: 20 } } },
//             str: {
//               block: {
//                 type: "text",
//                 fields: { TEXT: "こんにちは" }
//               }
//             }
//           }
//         },
//         { kind: "block", type: "bookcover_font_name" },
//         {
//           kind: "block",
//           type: "text",
//           fields: { TEXT: "🍅🍆🍇🍊🍍🍎🍐🍑" }
//         },
//         { kind: "block", type: "bookcover_newline" },
//         { kind: "block", type: "text_length" },
//         { kind: "block", type: "bookcover_fromCodePoint" },
//         { kind: "block", type: "text_join" },
//         { kind: "block", type: "text_append" },
//         { kind: "block", type: "text_print" },
//         { kind: "block", type: "text_prompt_ext" },
//         { kind: "block", type: "text_charAt" }
//       ]
//     },

//     {
//       kind: "category",
//       name: "移動・拡大／縮小・回転",
//       colour: 0,
//       contents: [
//         { kind: "block", type: "bookcover_matrix" },
//         {
//           kind: "block",
//           type: "bookcover_translate",
//           inputs: {
//             x: { block: { type: "math_number", fields: { NUM: 15 } } },
//             y: { block: { type: "math_number", fields: { NUM: -25 } } }
//           }
//         },
//         {
//           kind: "block",
//           type: "bookcover_scale",
//           inputs: {
//             x: { block: { type: "math_number", fields: { NUM: 1.5 } } },
//             y: { block: { type: "math_number", fields: { NUM: 2.9 } } }
//           }
//         },
//         {
//           kind: "block",
//           type: "bookcover_rotate",
//           inputs: {
//             angle: {
//               block: {
//                 type: "bookcover_angle",
//                 fields: { angle: 45 }
//               }
//             }
//           }
//         },
//         { kind: "block", type: "bookcover_angle" }
//       ]
//     },

//     {
//       kind: "category",
//       name: "基本図形",
//       colour: 130,
//       contents: [
//         { kind: "block", type: "bookcover_line" },
//         { kind: "block", type: "bookcover_rect" },
//         { kind: "block", type: "bookcover_ellipse" },
//         { kind: "block", type: "bookcover_triangle" },
//         { kind: "block", type: "bookcover_quad" },
//         { kind: "block", type: "bookcover_arc" },
//         { kind: "block", type: "bookcover_image" },
//         { kind: "block", type: "bookcover_bezier" }
//       ]
//     },

//     {
//       kind: "category",
//       name: "数",
//       colour: 230,
//       contents: [
//         { kind: "block", type: "bookcover_random_seed" },
//         { kind: "block", type: "bookcover_random_in_range" },
//         { kind: "block", type: "math_number" },
//         { kind: "block", type: "math_arithmetic" },
//         { kind: "block", type: "math_single" },
//         { kind: "block", type: "math_trig" },
//         { kind: "block", type: "math_constant" },
//         { kind: "block", type: "math_number_property" },
//         { kind: "block", type: "math_round" },
//         { kind: "block", type: "math_modulo" },
//         { kind: "block", type: "math_constrain" },
//         { kind: "block", type: "bookcover_distance" },
//         { kind: "block", type: "bookcover_atan2" }
//       ]
//     },

//     {
//       kind: "category",
//       name: "🐢 かめ",
//       colour: 150,
//       contents: [
//         { kind: "block", type: "bookcover_pen_down" },
//         { kind: "block", type: "bookcover_pen_up" },
//         { kind: "block", type: "bookcover_forward" },
//         { kind: "block", type: "bookcover_turn" },
//         { kind: "block", type: "bookcover_direction" },
//         { kind: "block", type: "bookcover_go" },
//         { kind: "block", type: "bookcover_say" },
//         { kind: "block", type: "bookcover_get_x" },
//         { kind: "block", type: "bookcover_get_y" },
//         { kind: "block", type: "bookcover_get_angle" }
//       ]
//     },

//     {
//       kind: "category",
//       name: "論理",
//       colour: 210,
//       contents: [
//         { kind: "block", type: "controls_if" },
//         {
//           kind: "block",
//           type: "controls_if",
//           extraState: { else: 1 }
//         },
//         { kind: "block", type: "logic_compare" },
//         { kind: "block", type: "logic_operation" },
//         { kind: "block", type: "logic_negate" },
//         { kind: "block", type: "logic_boolean" }
//       ]
//     },

//     {
//       kind: "category",
//       name: "繰り返し",
//       colour: 120,
//       contents: [
//         { kind: "block", type: "controls_repeat_ext" },
//         { kind: "block", type: "controls_for" },
//         { kind: "block", type: "controls_whileUntil" },
//         { kind: "block", type: "controls_forEach" },
//         { kind: "block", type: "controls_flow_statements" }
//       ]
//     },

//     {
//       kind: "category",
//       name: "リスト",
//       colour: 260,
//       contents: [
//         { kind: "block", type: "lists_create_empty" },
//         { kind: "block", type: "lists_create_with" },
//         { kind: "block", type: "lists_repeat" },
//         { kind: "block", type: "lists_length" },
//         { kind: "block", type: "lists_isEmpty" },
//         { kind: "block", type: "lists_indexOf" },
//         { kind: "block", type: "lists_getIndex" },
//         { kind: "block", type: "lists_setIndex" }
//       ]
//     },

//     {
//       kind: "category",
//       name: "変数",
//       custom: "VARIABLE",
//       colour: 330
//     },
//     {
//       kind: "category",
//       name: "関数",
//       custom: "PROCEDURE",
//       colour: 290
//     },

//     {
//       kind: "category",
//       name: "（上級者用）",
//       contents: [
//         { kind: "block", type: "bookcover_generic_statement" },
//         { kind: "block", type: "bookcover_generic_expression" },
//         { kind: "block", type: "bookcover_rgb255" },
//         { kind: "block", type: "bookcover_hsb360" },
//         { kind: "block", type: "bookcover_console_log" }
//       ]
//     }
//   ]
// };

// 以下のスクリプトで抽出したバージョン
//   console.log(JSON.stringify(workspace.options.languageTree, (key, val) => {
//      if (key === 'blockxml') return val.outerHTML;
//      return val;
//    }));

export const toolbox = {
  contents: [
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          inputs: {
            PAPER_SPEC: {
              block: {
                type: "bookcover_cardspec",
                fields: {
                  CARDSPEC: "エーワン F8A4-5",
                },
              },
            },
            DO: {
              block: {
                type: "bookcover_foreachcard",
                fields: {
                  CARD: { name: "カード" },
                  COUNTER: { name: "カウンター" },
                  CLIP: true,
                  FRAME: true,
                  MARGIN: 1,
                },
              },
            },
          },
          //   blockxml:
          //     '<block type="bookcover_card_frame">\n    <value name="PAPER_SPEC">\n      <block type="bookcover_cardspec">\n        <field name="CARDSPEC">エーワン F8A4-5</field>\n      </block>\n    </value>\n    <statement name="DO">\n      <block type="bookcover_foreachcard">\n        <field name="CARD">カード</field>\n        <field name="COUNTER">カウンター</field>\n      </block>\n    </statement>\n  </block>',
          type: "bookcover_card_frame",
        },
        {
          kind: "BLOCK",
          type: "bookcover_frame",
        },
        {
          kind: "BLOCK",
          type: "bookcover_rulers",
        },
        {
          kind: "BLOCK",
          //   blockxml:
          //     '<block type="bookcover_guide_bars">\n    <value name="width">\n      <block type="math_number">\n        <field name="NUM">0.1</field>\n      </block>\n    </value>\n  </block>',
          inputs: {
            width: {
              shadow: {
                type: "math_number",
                fields: { NUM: "0.1" },
              },
            },
          },
          type: "bookcover_guide_bars",
        },
        {
          kind: "BLOCK",
          type: "bookcover_foreachcard",
        },
        {
          kind: "BLOCK",
          type: "bookcover_cardspec",
        },
        {
          kind: "BLOCK",
          type: "bookcover_pageWidth",
        },
        {
          kind: "BLOCK",
          type: "bookcover_pageHeight",
        },
        {
          kind: "BLOCK",
          //   blockxml:
          //     '<block type="bookcover_cardWidth">\n    <value name="CARD">\n      <block type="variables_get">\n        <field name="VAR">カード</field>\n      </block>\n    </value>\n  </block>',
          inputs: {
            CARD: {
              shadow: {
                type: "variables_get",
                fields: {
                  VAR: { name: "カード" },
                },
              },
            },
          },
          type: "bookcover_cardWidth",
        },
        {
          kind: "BLOCK",
          //   blockxml:
          //     '<block type="bookcover_cardHeight">\n    <value name="CARD">\n      <block type="variables_get">\n        <field name="VAR">カード</field>\n      </block>\n    </value>\n  </block>',
          inputs: {
            CARD: {
              shadow: {
                type: "variables_get",
                fields: {
                  VAR: { name: "カード" },
                },
              },
            },
          },
          type: "bookcover_cardHeight",
        },
      ],
      name: "基本設定",
      colour: "100",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          inputs: {
            COLOUR: {
              shadow: {
                type: "bookcover_colour",
                fields: {
                  COLOUR: "#ff0000",
                },
              },
            },
          },
          type: "bookcover_fill",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_fill_opacity">\n    <value name="opacity">\n      <block type="math_number">\n        <field name="NUM">0.5</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_fill_opacity",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_stroke">\n      <value name="COLOUR">\n      <block type="bookcover_colour">\n        <field name="COLOUR">#ff0000</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_stroke",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_stroke_weight">\n    <value name="width">\n      <block type="math_number">\n        <field name="NUM">1</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_stroke_weight",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_stroke_opacity">\n    <value name="opacity">\n      <block type="math_number">\n        <field name="NUM">0.5</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_stroke_opacity",
        },
        {
          kind: "BLOCK",
          type: "bookcover_colour",
        },
        {
          kind: "BLOCK",
          type: "bookcover_none",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_rotate_h">\n    <value name="colour">\n      <block type="bookcover_colour">\n        <field name="COLOUR">#ff0000</field>\n      </block>\n    </value>\n    <value name="angle">\n      <block type="bookcover_angle">\n        <field name="angle">120</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_rotate_h",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_add_s">\n    <value name="colour">\n      <block type="bookcover_colour">\n        <field name="COLOUR">#ff0000</field>\n      </block>\n    </value>\n    <value name="delta">\n      <block type="math_number">\n        <field name="NUM">-10</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_add_s",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_add_l">\n    <value name="colour">\n      <block type="bookcover_colour">\n        <field name="COLOUR">#ff0000</field>\n      </block>\n    </value>\n    <value name="delta">\n      <block type="math_number">\n        <field name="NUM">-10</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_add_l",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_rgb100">\n    <value name="red">\n      <block type="math_number">\n        <field name="NUM">0</field>\n      </block>\n    </value>\n    <value name="green">\n      <block type="math_number">\n        <field name="NUM">100</field>\n      </block>\n    </value>\n    <value name="blue">\n      <block type="math_number">\n        <field name="NUM">100</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_rgb100",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_hsl360">\n    <value name="hue">\n      <block type="bookcover_angle">\n        <field name="angle">180</field>\n      </block>\n    </value>\n    <value name="saturation">\n      <block type="math_number">\n        <field name="NUM">100</field>\n      </block>\n    </value>\n    <value name="luminance">\n      <block type="math_number">\n        <field name="NUM">50</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_hsl360",
        },
      ],
      name: "色",
      colour: "20",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          inputs: {
            name: {
              shadow: {
                type: "bookcover_font_name",
                fields: {
                  NAME: "ＭＳ 明朝",
                },
              },
            },
            size: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 12,
                },
              },
            },
          },
          type: "bookcover_text_font",
        },
        {
          kind: "BLOCK",
          inputs: {
            x: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
            y: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 20,
                },
              },
            },
            str: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "こんにちは",
                },
              },
            },
          },
          type: "bookcover_text",
        },
        {
          kind: "BLOCK",
          type: "bookcover_font_name",
        },
        {
          kind: "BLOCK",
          fields: {
            TEXT: "🍅🍆🍇🍊🍍🍎🍐🍑",
          },
          type: "text",
        },
        {
          kind: "BLOCK",
          type: "bookcover_newline",
        },
        {
          kind: "BLOCK",
          type: "text_length",
        },
        {
          kind: "BLOCK",
          type: "bookcover_fromCodePoint",
        },
        {
          kind: "BLOCK",
          type: "text_join",
        },
        {
          kind: "BLOCK",
          type: "text_append",
        },
        {
          kind: "BLOCK",
          type: "text_print",
        },
        {
          kind: "BLOCK",
          type: "text_prompt_ext",
        },
        {
          kind: "BLOCK",
          type: "text_charAt",
        },
      ],
      name: "文字列",
      colour: "160",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          type: "bookcover_matrix",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_translate">\n    <value name="x">\n      <block type="math_number">\n        <field name="NUM">15</field>\n      </block>\n    </value>\n    <value name="y">\n      <block type="math_number">\n        <field name="NUM">-25</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_translate",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_scale">\n    <value name="x">\n      <block type="math_number">\n        <field name="NUM">1.5</field>\n      </block>\n    </value>\n    <value name="y">\n      <block type="math_number">\n        <field name="NUM">2.9</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_scale",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_rotate">\n    <value name="angle">\n      <block type="bookcover_angle">\n        <field name="angle">45</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_rotate",
        },
        {
          kind: "BLOCK",
          type: "bookcover_angle",
        },
      ],
      name: "移動・拡大／縮小・回転",
      colour: "0",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_line">\n    <value name="x1">\n      <block type="math_number">\n        <field name="NUM">0</field>\n      </block>\n    </value>\n    <value name="y1">\n      <block type="math_number">\n        <field name="NUM">0</field>\n      </block>\n    </value>\n    <value name="x2">\n      <block type="math_number">\n        <field name="NUM">50</field>\n      </block>\n    </value>\n    <value name="y2">\n      <block type="math_number">\n        <field name="NUM">100</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_line",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_rect">\n    <value name="x">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="y">\n      <block type="math_number">\n        <field name="NUM">15</field>\n      </block>\n    </value>\n    <value name="w">\n      <block type="math_number">\n        <field name="NUM">120</field>\n      </block>\n    </value>\n    <value name="h">\n      <block type="math_number">\n        <field name="NUM">230</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_rect",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_ellipse">\n    <value name="x">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="y">\n      <block type="math_number">\n        <field name="NUM">15</field>\n      </block>\n    </value>\n    <value name="w">\n      <block type="math_number">\n        <field name="NUM">120</field>\n      </block>\n    </value>\n    <value name="h">\n      <block type="math_number">\n        <field name="NUM">230</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_ellipse",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_triangle">\n    <value name="x1">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="y1">\n      <block type="math_number">\n        <field name="NUM">15</field>\n      </block>\n    </value>\n    <value name="x2">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="y2">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="x3">\n      <block type="math_number">\n        <field name="NUM">25</field>\n      </block>\n    </value>\n    <value name="y3">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_triangle",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_quad">\n    <value name="x1">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="y1">\n      <block type="math_number">\n        <field name="NUM">15</field>\n      </block>\n    </value>\n    <value name="x2">\n      <block type="math_number">\n        <field name="NUM">25</field>\n      </block>\n    </value>\n    <value name="y2">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="x3">\n      <block type="math_number">\n        <field name="NUM">25</field>\n      </block>\n    </value>\n    <value name="y3">\n      <block type="math_number">\n        <field name="NUM">25</field>\n      </block>\n    </value>\n    <value name="x4">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="y4">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_quad",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_arc">\n    <value name="x">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="y">\n      <block type="math_number">\n        <field name="NUM">15</field>\n      </block>\n    </value>\n    <value name="w">\n      <block type="math_number">\n        <field name="NUM">120</field>\n      </block>\n    </value>\n    <value name="h">\n      <block type="math_number">\n        <field name="NUM">230</field>\n      </block>\n    </value>\n    <value name="start">\n      <block type="math_number">\n        <field name="NUM">0</field>\n      </block>\n    </value>\n    <value name="end">\n      <block type="math_number">\n        <field name="NUM">60</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_arc",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_image">\n    <value name="x">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="y">\n      <block type="math_number">\n        <field name="NUM">15</field>\n      </block>\n    </value>\n    <value name="w">\n      <block type="math_number">\n        <field name="NUM">16</field>\n      </block>\n    </value>\n    <value name="h">\n      <block type="math_number">\n        <field name="NUM">16</field>\n      </block>\n    </value>\n    <value name="url">\n      <block type="text">\n        <field name="TEXT">http://guppy.eng.kagawa-u.ac.jp/OpenCampus/favicon.png</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_image",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_bezier">\n    <value name="x1">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="y1">\n      <block type="math_number">\n        <field name="NUM">15</field>\n      </block>\n    </value>\n    <value name="x2">\n      <block type="math_number">\n        <field name="NUM">25</field>\n      </block>\n    </value>\n    <value name="y2">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="x3">\n      <block type="math_number">\n        <field name="NUM">25</field>\n      </block>\n    </value>\n    <value name="y3">\n      <block type="math_number">\n        <field name="NUM">25</field>\n      </block>\n    </value>\n    <value name="x4">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n    <value name="y4">\n      <block type="math_number">\n        <field name="NUM">20</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_bezier",
        },
      ],
      name: "基本図形",
      colour: "130",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_random_seed">\n    <value name="seed">\n      <block type="math_number">\n        <field name="NUM">123456</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_random_seed",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_random_in_range">\n    <value name="min">\n      <block type="math_number">\n        <field name="NUM">0</field>\n      </block>\n    </value>\n    <value name="max">\n      <block type="math_number">\n        <field name="NUM">1</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_random_in_range",
        },
        {
          kind: "BLOCK",
          type: "math_number",
        },
        {
          kind: "BLOCK",
          type: "math_arithmetic",
        },
        {
          kind: "BLOCK",
          type: "math_single",
        },
        {
          kind: "BLOCK",
          type: "math_trig",
        },
        {
          kind: "BLOCK",
          type: "math_constant",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="math_number_property">\n    <value name="NUMBER_TO_CHECK">\n      <shadow type="math_number">\n        <field name="NUM">0</field>\n      </shadow>\n    </value>\n  </block>',
          type: "math_number_property",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="math_round">\n    <value name="NUM">\n      <shadow type="math_number">\n        <field name="NUM">3.1</field>\n      </shadow>\n    </value>\n  </block>',
          type: "math_round",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="math_modulo">\n    <value name="DIVIDEND">\n      <shadow type="math_number">\n        <field name="NUM">64</field>\n      </shadow>\n    </value>\n    <value name="DIVISOR">\n      <shadow type="math_number">\n        <field name="NUM">10</field>\n      </shadow>\n    </value>\n  </block>',
          type: "math_modulo",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="math_constrain">\n    <value name="VALUE">\n      <shadow type="math_number">\n        <field name="NUM">50</field>\n      </shadow>\n    </value>\n    <value name="LOW">\n      <shadow type="math_number">\n        <field name="NUM">1</field>\n      </shadow>\n    </value>\n    <value name="HIGH">\n      <shadow type="math_number">\n        <field name="NUM">100</field>\n      </shadow>\n    </value>\n  </block>',
          type: "math_constrain",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_distance">\n    <value name="X1">\n      <shadow type="math_number">\n        <field name="NUM">0</field>\n      </shadow>\n    </value>\n    <value name="Y1">\n      <shadow type="math_number">\n        <field name="NUM">0</field>\n      </shadow>\n    </value>\n    <value name="X2">\n      <shadow type="math_number">\n        <field name="NUM">3</field>\n      </shadow>\n    </value>\n    <value name="Y2">\n      <shadow type="math_number">\n        <field name="NUM">4</field>\n      </shadow>\n    </value>\n  </block>',
          type: "bookcover_distance",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_atan2">\n    <value name="X1">\n      <shadow type="math_number">\n        <field name="NUM">0</field>\n      </shadow>\n    </value>\n    <value name="Y1">\n      <shadow type="math_number">\n        <field name="NUM">0</field>\n      </shadow>\n    </value>\n    <value name="X2">\n      <shadow type="math_number">\n        <field name="NUM">3</field>\n      </shadow>\n    </value>\n    <value name="Y2">\n      <shadow type="math_number">\n        <field name="NUM">4</field>\n      </shadow>\n    </value>\n  </block>',
          type: "bookcover_atan2",
        },
      ],
      name: "数",
      colour: "230",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          type: "bookcover_pen_down",
        },
        {
          kind: "BLOCK",
          type: "bookcover_pen_up",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_forward">\n    <value name="len">\n      <block type="math_number">\n        <field name="NUM">50</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_forward",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_turn">\n    <value name="angle">\n      <block type="bookcover_angle">\n        <field name="angle">72</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_turn",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_direction">\n    <value name="angle">\n      <block type="bookcover_angle">\n        <field name="angle">144</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_direction",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_go">\n    <value name="x">\n      <block type="math_number">\n        <field name="NUM">50</field>\n      </block>\n    </value>\n    <value name="y">\n      <block type="math_number">\n        <field name="NUM">75</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_go",
        },
        {
          kind: "BLOCK",
          blockxml:
            '<block type="bookcover_say">\n    <value name="str">\n      <block type="text">\n        <field name="TEXT">こんにちは</field>\n      </block>\n    </value>\n  </block>',
          type: "bookcover_say",
        },
        {
          kind: "BLOCK",
          type: "bookcover_get_x",
        },
        {
          kind: "BLOCK",
          type: "bookcover_get_y",
        },
        {
          kind: "BLOCK",
          type: "bookcover_get_angle",
        },
      ],
      name: "🐢 かめ",
      colour: "150",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          //   blockxml:
          //     '<block type="controls_if">\n    <value name="IF0">\n      <block type="logic_boolean">\n        <field name="BOOL">TRUE</field>\n      </block>\n    </value>\n  </block>',
          inputs: {
            IF0: {
              shadow: {
                type: "logic_boolean",
                fields: {
                  BOOL: "TRUE",
                },
              },
            },
          },
          type: "controls_if",
        },
        {
          kind: "BLOCK",
          //   blockxml:
          //     '<block type="controls_if">\n    <mutation else="1"></mutation>\n    <value name="IF0">\n      <block type="logic_boolean">\n        <field name="BOOL">TRUE</field>\n      </block>\n    </value>\n  </block>',
          inputs: {
            IF0: {
              shadow: {
                type: "logic_boolean",
                fields: {
                  BOOL: "TRUE",
                },
              },
            },
          },
          type: "controls_if",
        },
        {
          kind: "BLOCK",
          type: "logic_compare",
        },
        {
          kind: "BLOCK",
          type: "logic_operation",
        },
        {
          kind: "BLOCK",
          type: "logic_negate",
        },
        {
          kind: "BLOCK",
          type: "logic_boolean",
        },
      ],
      name: "論理",
      colour: "210",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          //   blockxml:
          //     '<block type="controls_repeat_ext">\n    <value name="TIMES">\n      <block type="math_number">\n        <field name="NUM">4</field>\n      </block>\n    </value>\n  </block>',
          inputs: {
            TIMES: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 4,
                },
              },
            },
          },
          type: "controls_repeat_ext",
        },
        {
          kind: "BLOCK",
          //   blockxml:
          //     '<block type="controls_for">\n    <field name="VAR">i</field>\n    <value name="FROM">\n      <block type="math_number">\n        <field name="NUM">5</field>\n      </block>\n    </value>\n    <value name="TO">\n      <block type="math_number">\n        <field name="NUM">25</field>\n      </block>\n    </value>\n    <value name="BY">\n      <block type="math_number">\n        <field name="NUM">4</field>\n      </block>\n    </value>\n  </block>',
          fields: {
            VAR: {
              name: "i",
            },
          },
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 25,
                },
              },
            },
            BY: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 4,
                },
              },
            },
          },
          type: "controls_for",
        },
        {
          kind: "BLOCK",
          //   blockxml:
          //     '<block type="controls_whileUntil">\n    <field name="MODE">WHILE</field>\n    <value name="BOOL">\n      <block type="logic_boolean">\n        <field name="BOOL">TRUE</field>\n      </block>\n    </value>\n  </block>',
          fields: {
            MODE: "WHILE",
          },
          inputs: {
            BOOL: {
              shadow: {
                type: "logic_boolean",
                fields: {
                  BOOL: "TRUE",
                },
              },
            },
          },
          type: "controls_whileUntil",
        },
        {
          kind: "BLOCK",
          //   blockxml:
          //     '<block type="controls_forEach">\n    <field name="VAR">i</field>\n    <value name="LIST">\n      <block type="lists_create_with">\n        <mutation items="3"></mutation>\n        <value name="ADD0">\n          <block type="math_number">\n            <field name="NUM">2</field>\n          </block>\n        </value>\n        <value name="ADD1">\n          <block type="math_number">\n            <field name="NUM">3</field>\n          </block>\n        </value>\n        <value name="ADD2">\n          <block type="math_number">\n            <field name="NUM">5</field>\n          </block>\n        </value>\n      </block>\n    </value>\n  </block>',
          fields: {
            VAR: {
              name: "i",
            },
          },
          inputs: {
            LIST: {
              shadow: {
                type: "lists_create_with",
                extraState: {
                  itemCount: 3,
                },
                inputs: {
                  ADD0: {
                    shadow: {
                      type: "math_number",
                      fields: {
                        NUM: 2,
                      },
                    },
                  },
                  ADD1: {
                    shadow: {
                      type: "math_number",
                      fields: {
                        NUM: 3,
                      },
                    },
                  },
                  ADD2: {
                    shadow: {
                      type: "math_number",
                      fields: {
                        NUM: 5,
                      },
                    },
                  },
                },
              },
            },
          },
          type: "controls_forEach",
        },
        {
          kind: "BLOCK",
          type: "controls_flow_statements",
        },
      ],
      name: "繰り返し",
      colour: "120",
    },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          type: "lists_create_empty",
        },
        {
          kind: "BLOCK",
          type: "lists_create_with",
        },
        {
          kind: "BLOCK",
          //   blockxml:
          //     '<block type="lists_repeat">\n    <value name="NUM">\n      <block type="math_number">\n        <field name="NUM">5</field>\n      </block>\n    </value>\n  </block>',
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
          },
          type: "lists_repeat",
        },
        {
          kind: "BLOCK",
          type: "lists_length",
        },
        {
          kind: "BLOCK",
          type: "lists_isEmpty",
        },
        {
          kind: "BLOCK",
          type: "lists_indexOf",
        },
        {
          kind: "BLOCK",
          type: "lists_getIndex",
        },
        {
          kind: "BLOCK",

          type: "lists_setIndex",
        },
      ],
      name: "リスト",
      colour: "260",
    },
    { kind: "CATEGORY", name: "変数", custom: "VARIABLE", colour: "330" },
    { kind: "CATEGORY", name: "関数", custom: "PROCEDURE", colour: "290" },
    {
      kind: "CATEGORY",
      contents: [
        {
          kind: "BLOCK",
          type: "bookcover_generic_statement",
        },
        {
          kind: "BLOCK",
          type: "bookcover_generic_expression",
        },
        {
          kind: "BLOCK",
          //   blockxml:
          //     '<block type="bookcover_rgb255">\n    <value name="red">\n      <block type="math_number">\n        <field name="NUM">0</field>\n      </block>\n    </value>\n    <value name="green">\n      <block type="math_number">\n        <field name="NUM">255</field>\n      </block>\n    </value>\n    <value name="blue">\n      <block type="math_number">\n        <field name="NUM">255</field>\n      </block>\n    </value>\n  </block>',
          inputs: {
            red: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
            green: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 255,
                },
              },
            },
            blue: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 255,
                },
              },
            },
          },
          type: "bookcover_rgb255",
        },
        {
          kind: "BLOCK",
          //   blockxml:
          //     '<block type="bookcover_hsb360">\n    <value name="hue">\n      <block type="bookcover_angle">\n        <field name="angle">300</field>\n      </block>\n    </value>\n    <value name="saturation">\n      <block type="math_number">\n        <field name="NUM">100</field>\n      </block>\n    </value>\n    <value name="brightness">\n      <block type="math_number">\n        <field name="NUM">100</field>\n      </block>\n    </value>\n  </block>',
          inputs: {
            hue: {
              shadow: {
                type: "bookcover_angle",
                fields: {
                  angle: 300,
                },
              },
            },
            saturation: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
            brightness: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
          type: "bookcover_hsb360",
        },
        {
          kind: "BLOCK",
          type: "bookcover_console_log",
        },
      ],
      name: "（上級者用）",
    },
  ],
  id: "toolbox",
  style: "display: none",
};

// // Gemini に作ってもらったバージョン
// export const toolbox = {
//   "kind": "categoryToolbox",
//   "contents": [
//     {
//       "kind": "category",
//       "name": "基本設定",
//       "colour": "100",
//       "contents": [
//         {
//           "kind": "block",
//           "type": "bookcover_card_frame",
//           "inputs": {
//             "PAPER_SPEC": {
//               "block": {
//                 "type": "bookcover_cardspec",
//                 "fields": { "CARDSPEC": "エーワン F8A4-5" }
//               }
//             }
//           },
//           "contents": {
//             "DO": {
//               "block": {
//                 "type": "bookcover_foreachcard",
//                 "fields": { "CARD": "カード", "COUNTER": "カウンター" }
//               }
//             }
//           }
//         },
//         { "kind": "block", "type": "bookcover_frame" },
//         { "kind": "block", "type": "bookcover_rulers" },
//         {
//           "kind": "block",
//           "type": "bookcover_guide_bars",
//           "inputs": {
//             "width": { "block": { "type": "math_number", "fields": { "NUM": 0.1 } } }
//           }
//         },
//         { "kind": "block", "type": "bookcover_foreachcard" },
//         { "kind": "block", "type": "bookcover_cardspec" },
//         { "kind": "block", "type": "bookcover_pageWidth" },
//         { "kind": "block", "type": "bookcover_pageHeight" },
//         {
//           "kind": "block",
//           "type": "bookcover_cardWidth",
//           "inputs": {
//             "CARD": { "block": { "type": "variables_get", "fields": { "VAR": "カード" } } }
//           }
//         },
//         {
//           "kind": "block",
//           "type": "bookcover_cardHeight",
//           "inputs": {
//             "CARD": { "block": { "type": "variables_get", "fields": { "VAR": "カード" } } }
//           }
//         }
//       ]
//     },
//     {
//       "kind": "category",
//       "name": "色",
//       "colour": "20",
//       "contents": [
//         {
//           "kind": "block",
//           "type": "bookcover_fill",
//           "inputs": {
//             "COLOUR": { "block": { "type": "bookcover_colour", "fields": { "COLOUR": "#ff0000" } } }
//           }
//         },
//         {
//           "kind": "block",
//           "type": "bookcover_fill_opacity",
//           "inputs": {
//             "opacity": { "block": { "type": "math_number", "fields": { "NUM": 0.5 } } }
//           }
//         },
//         { "kind": "block", "type": "bookcover_colour" },
//         { "kind": "block", "type": "bookcover_none" }
//         // ... 他の色ブロックも同様のパターンで記述
//       ]
//     },
//     {
//       "kind": "category",
//       "name": "文字列",
//       "colour": "160",
//       "contents": [
//         {
//           "kind": "block",
//           "type": "bookcover_text_font",
//           "inputs": {
//             "name": { "block": { "type": "bookcover_font_name", "fields": { "NAME": "ＭＳ 明朝" } } },
//             "size": { "block": { "type": "math_number", "fields": { "NUM": 12 } } }
//           }
//         },
//         { "kind": "block", "type": "text", "fields": { "TEXT": "🍅🍆🍇🍊🍍🍎🍐🍑" } },
//         { "kind": "block", "type": "text_join" },
//         { "kind": "block", "type": "text_length" }
//       ]
//     },
//     {
//       "kind": "category",
//       "name": "🐢 かめ",
//       "colour": "150",
//       "contents": [
//         { "kind": "block", "type": "bookcover_pen_down" },
//         { "kind": "block", "type": "bookcover_pen_up" },
//         {
//           "kind": "block",
//           "type": "bookcover_forward",
//           "inputs": { "len": { "block": { "type": "math_number", "fields": { "NUM": 50 } } } }
//         }
//       ]
//     },
//     {
//       "kind": "category",
//       "name": "論理",
//       "colour": "210",
//       "contents": [
//         {
//           "kind": "block",
//           "type": "controls_if",
//           "inputs": {
//             "IF0": { "block": { "type": "logic_boolean", "fields": { "BOOL": "TRUE" } } }
//           }
//         },
//         { "kind": "block", "type": "logic_compare" },
//         { "kind": "block", "type": "logic_operation" }
//       ]
//     },
//     {
//       "kind": "category",
//       "name": "変数",
//       "custom": "VARIABLE",
//       "colour": "330"
//     },
//     {
//       "kind": "category",
//       "name": "関数",
//       "custom": "PROCEDURE",
//       "colour": "290"
//     }
//   ]
// };
