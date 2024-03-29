import * as Blockly from 'blockly/core';
import * as libraryBlocks from 'blockly/blocks';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['bookcover_frame'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ブックカバーを作成開始する。（枠表示")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "frame")
        .appendField("）");
    this.appendStatementInput("statements")
        .setCheck(null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_frame'] = function(block) {
  var checkbox_frame = block.getFieldValue('frame') == 'TRUE';
  var statements_statements = javascriptGenerator.statementToCode(block, 'statements');
  var code = "var BC = BookCover;\n"
           + "BC.start(draw);\n";
  if (checkbox_frame) {
    code += "BC.pageFrame();\n"
  }
  code    += statements_statements
  code    += "BC.finish();\n";
  return code;
};

Blockly.Blocks['bookcover_guide_bars'] = {
  init: function() {
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("ガイドバーを幅"); 
    this.appendDummyInput()
        .appendField("に設定する。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_guide_bars'] = function(block) {
  var value_width = javascriptGenerator.valueToCode(block, 'width', javascriptGenerator.ORDER_COMMA);
  var code = 'BC.guideBars(' + value_width + ');\n';
  return code;
};

Blockly.Blocks['bookcover_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("以下の図形をグループ化する。");
    this.appendStatementInput("statements")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_matrix'] = function(block) {
  var statements_statements = javascriptGenerator.statementToCode(block, 'statements');
  var code = 'BC.pushMatrix()\n' + statements_statements + 'BC.popMatrix();\n';
  return code;
};

Blockly.Blocks['bookcover_line'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("(");
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField(",");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField(") - (");
    this.appendValueInput("y2")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(") に線を引く。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_line'] = function(block) {
  var value_x1 = javascriptGenerator.valueToCode(block, 'x1', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y1 = javascriptGenerator.valueToCode(block, 'y1', javascriptGenerator.ORDER_COMMA) || 0;
  var value_x2 = javascriptGenerator.valueToCode(block, 'x2', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y2 = javascriptGenerator.valueToCode(block, 'y2', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.line(' + value_x1 + ',' +  value_y1 + ','  
                        + value_x2 + ',' +  value_y2 + ');\n';
  return code;
};

Blockly.Blocks['bookcover_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("塗りの色を");
    this.appendValueInput("COLOUR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にする。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_fill'] = function(block) {
  var value_colour = javascriptGenerator.valueToCode(block, 'COLOUR', javascriptGenerator.ORDER_COMMA) || 0;

  var code = 'BC.fill(' + value_colour + ');\n';
  return code;
};

Blockly.Blocks['bookcover_stroke'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("線の色を");
    this.appendValueInput("COLOUR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("にする。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_stroke'] = function(block) {
  var value_colour = javascriptGenerator.valueToCode(block, 'COLOUR', javascriptGenerator.ORDER_COMMA) || 0;

  var code = 'BC.stroke(' + value_colour + ');\n';
  return code;
};

Blockly.Blocks['bookcover_colour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "COLOUR");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_colour'] = function(block) {
  var colour_colour = block.getFieldValue('COLOUR');
  var code = "0x" + colour_colour.substring(1);
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['bookcover_rect'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("左上 (");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("w")
        .setCheck(null)
        .appendField(") サイズ");
    this.appendValueInput("h")
        .setCheck(null)
        .appendField("×");
    this.appendDummyInput()
        .appendField("の長方形を描く。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_rect'] = function(block) {
  var value_x = javascriptGenerator.valueToCode(block, 'x', javascriptGenerator.ORDER_COMMA) || 0 ;
  var value_y = javascriptGenerator.valueToCode(block, 'y', javascriptGenerator.ORDER_COMMA) || 0;
  var value_w = javascriptGenerator.valueToCode(block, 'w', javascriptGenerator.ORDER_COMMA) || 0;
  var value_h = javascriptGenerator.valueToCode(block, 'h', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.rect(' + value_x + ', ' + value_y + ', ' + value_w + ', ' + value_h +');\n';
  return code;
};

Blockly.Blocks['bookcover_ellipse'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("左上 (");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("w")
        .setCheck(null)
        .appendField(") サイズ");
    this.appendValueInput("h")
        .setCheck(null)
        .appendField("×");
    this.appendDummyInput()
        .appendField("の楕円を描く。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_ellipse'] = function(block) {
  var value_x = javascriptGenerator.valueToCode(block, 'x', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y = javascriptGenerator.valueToCode(block, 'y', javascriptGenerator.ORDER_COMMA) || 0;
  var value_w = javascriptGenerator.valueToCode(block, 'w', javascriptGenerator.ORDER_COMMA) || 0;
  var value_h = javascriptGenerator.valueToCode(block, 'h', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.ellipse(' + value_x + ', ' + value_y + ', ' + value_w + ', ' + value_h +');\n';
  return code;
};

Blockly.Blocks['bookcover_rotate_h'] = {
  init: function() {
    this.appendValueInput("colour")
        .setCheck(null)
        .appendField("色");
    this.appendValueInput("angle")
        .setCheck(null)
        .appendField("を");
    this.appendDummyInput()
        .appendField("回転した色");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_rotate_h'] = function(block) {
  var value_colour = javascriptGenerator.valueToCode(block, 'colour', javascriptGenerator.ORDER_COMMA) || 0;
  var value_angle = javascriptGenerator.valueToCode(block, 'angle', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.rotateH360(' + value_colour + ', ' + value_angle + ')';
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['bookcover_add_s'] = {
  init: function() {
    this.appendValueInput("colour")
        .setCheck(null)
        .appendField("色");
    this.appendValueInput("delta")
        .setCheck(null)
        .appendField("の彩度を");
    this.appendDummyInput()
        .appendField("% 増やした色");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_add_s'] = function(block) {
  var value_colour = javascriptGenerator.valueToCode(block, 'colour', javascriptGenerator.ORDER_COMMA) || 0;
  var value_delta = javascriptGenerator.valueToCode(block, 'delta', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.addS100L(' + value_colour + ', ' + value_delta + ')';
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['bookcover_add_l'] = {
  init: function() {
    this.appendValueInput("colour")
        .setCheck(null)
        .appendField("色");
    this.appendValueInput("delta")
        .setCheck(null)
        .appendField("の輝度を");
    this.appendDummyInput()
        .appendField("% 増やした色");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_add_l'] = function(block) {
  var value_colour = javascriptGenerator.valueToCode(block, 'colour', javascriptGenerator.ORDER_COMMA) || 0;
  var value_delta = javascriptGenerator.valueToCode(block, 'delta', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.addL100(' + value_colour + ', ' + value_delta + ')';
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['bookcover_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_angle'] = function(block) {
  var angle_angle = block.getFieldValue('angle');
  var code = angle_angle;
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['bookcover_stroke_weight'] = {
  init: function() {
    this.appendValueInput("width")
        .setCheck(null)
        .appendField("線の幅を");
    this.appendDummyInput()
        .appendField("にする。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_stroke_weight'] = function(block) {
  var value_width = javascriptGenerator.valueToCode(block, 'width', javascriptGenerator.ORDER_COMMA) || 1;
  var code = 'BC.strokeWeight(' + value_width + ');\n';
  return code;
};

Blockly.Blocks['bookcover_stroke_opacity'] = {
  init: function() {
    this.appendValueInput("opacity")
        .setCheck(null)
        .appendField("線の不透明度を");
    this.appendDummyInput()
        .appendField("にする。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_stroke_opacity'] = function(block) {
  var value_opacity = javascriptGenerator.valueToCode(block, 'opacity', javascriptGenerator.ORDER_COMMA) || 1;
  var code = 'BC.strokeOpacity(' + value_opacity + ');\n';
  return code;
};

Blockly.Blocks['bookcover_fill_opacity'] = {
  init: function() {
    this.appendValueInput("opacity")
        .setCheck(null)
        .appendField("塗りの不透明度を");
    this.appendDummyInput()
        .appendField("にする。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_fill_opacity'] = function(block) {
  var value_opacity = javascriptGenerator.valueToCode(block, 'opacity', javascriptGenerator.ORDER_COMMA) || 1;
  var code = 'BC.fillOpacity(' + value_opacity + ');\n';
  return code;
};

Blockly.Blocks['bookcover_no_stroke'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("線を描かない。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_no_stroke'] = function(block) {
  var code = 'BC.noStroke();\n';
  return code;
};

Blockly.Blocks['bookcover_no_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("塗らない。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_no_fill'] = function(block) {
  var code = 'BC.noFill();\n';
  return code;
};

Blockly.Blocks['bookcover_text_font'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck(null)
        .appendField("フォントを");
    this.appendValueInput("size")
        .setCheck(null)
        .appendField("、そのサイズを");
    this.appendDummyInput()
        .appendField("にする。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_text_font'] = function(block) {
  var value_name = javascriptGenerator.valueToCode(block, 'name', javascriptGenerator.ORDER_COMMA) || "\"\"";
  var value_size = javascriptGenerator.valueToCode(block, 'size', javascriptGenerator.ORDER_COMMA) || 10;
  var code = 'BC.textFont(' + value_name + ', ' + value_size + ');\n';
  return code;
};

Blockly.Blocks['bookcover_random_seed'] = {
  init: function() {
    this.appendValueInput("seed")
        .setCheck(null)
        .appendField("乱数の種を");
    this.appendDummyInput()
        .appendField("にする。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_random_seed'] = function(block) {
  var value_seed = javascriptGenerator.valueToCode(block, 'seed', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.randomSeed(' + value_seed + ');\n';
  return code;
};

Blockly.Blocks['bookcover_translate'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("以下の図形を (");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField(", ");
    this.appendDummyInput()
        .appendField(") 水平移動する。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_translate'] = function(block) {
  var value_x = javascriptGenerator.valueToCode(block, 'x', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y = javascriptGenerator.valueToCode(block, 'y', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.translate(' + value_x + ', ' + value_y + ');\n';
  return code;
};

Blockly.Blocks['bookcover_scale'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("以下の図形を (");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField(", ");
    this.appendDummyInput()
        .appendField(") 拡大する。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_scale'] = function(block) {
  var value_x = javascriptGenerator.valueToCode(block, 'x', javascriptGenerator.ORDER_COMMA) || 1 ;
  var value_y = javascriptGenerator.valueToCode(block, 'y', javascriptGenerator.ORDER_COMMA) || 1;
  var code = 'BC.scale(' + value_x + ', ' + value_y + ');\n';
  return code;
};

Blockly.Blocks['bookcover_rotate'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck(null)
        .appendField("以下の図形を");
    this.appendDummyInput()
        .appendField("度" + String.fromCodePoint(8635) + "に回転する。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_rotate'] = function(block) {
  var value_angle = javascriptGenerator.valueToCode(block, 'angle', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.rotate360(' + value_angle + ');\n';
  return code;
};


Blockly.Blocks['bookcover_pen_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(String.fromCodePoint(128034) + " ペンを上げる。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_pen_up'] = function(block) {
  var code = 'BC.penUp();\n';
  return code;
};

Blockly.Blocks['bookcover_pen_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(String.fromCodePoint(128034) + " ペンを下げる。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_pen_down'] = function(block) {
  var code = 'BC.penDown();\n';
  return code;
};

Blockly.Blocks['bookcover_forward'] = {
  init: function() {
    this.appendValueInput("len")
        .setCheck(null)
        .appendField(String.fromCodePoint(128034));
    this.appendDummyInput()
        .appendField("進む。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_forward'] = function(block) {
  var value_len = javascriptGenerator.valueToCode(block, 'len', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.forward(' + value_len + ');\n';
  return code;
};

Blockly.Blocks['bookcover_turn'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck(null)
        .appendField(String.fromCodePoint(128034));
    this.appendDummyInput()
        .appendField("度" + String.fromCodePoint(8635) + "に回る。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_turn'] = function(block) {
  var value_angle = javascriptGenerator.valueToCode(block, 'angle', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.turn(' + value_angle + ');\n';
  return code;
};

Blockly.Blocks['bookcover_direction'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck(null)
        .appendField(String.fromCodePoint(128034));
    this.appendDummyInput()
        .appendField("に向く。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_direction'] = function(block) {
  var value_angle = javascriptGenerator.valueToCode(block, 'angle', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.direction(' + value_angle + ');\n';
  return code;
};

Blockly.Blocks['bookcover_go'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField(String.fromCodePoint(128034) + " (");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField(", ");
    this.appendDummyInput()
        .appendField(") に移動する。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_go'] = function(block) {
  var value_x = javascriptGenerator.valueToCode(block, 'x', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y = javascriptGenerator.valueToCode(block, 'y', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.go(' + value_x + ', ' + value_y + ');\n';
  return code;
};



Blockly.Blocks['bookcover_random_in_range'] = {
  init: function() {
    this.appendValueInput("min")
        .setCheck(null);
    this.appendValueInput("max")
        .setCheck(null)
        .appendField("から");
    this.appendDummyInput()
        .appendField("の乱数");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_random_in_range'] = function(block) {
  var value_min = javascriptGenerator.valueToCode(block, 'min', javascriptGenerator.ORDER_COMMA) || 0;
  var value_max = javascriptGenerator.valueToCode(block, 'max', javascriptGenerator.ORDER_COMMA) || 1;
  var code = 'BC.randomInRange(' + value_min + ', ' + value_max + ')';
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['bookcover_rgb255'] = {
  init: function() {
    this.appendValueInput("red")
        .setCheck(null)
        .appendField("赤");
    this.appendValueInput("green")
        .setCheck(null)
        .appendField("緑");
    this.appendValueInput("blue")
        .setCheck(null)
        .appendField("青");
    this.appendDummyInput()
        .appendField("の色");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_rgb255'] = function(block) {
  var value_red = javascriptGenerator.valueToCode(block, 'red', javascriptGenerator.ORDER_COMMA) || 0;
  var value_green = javascriptGenerator.valueToCode(block, 'green', javascriptGenerator.ORDER_COMMA) || 0;
  var value_blue = javascriptGenerator.valueToCode(block, 'blue', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.rgb255(' + value_red +', ' + value_green + ', ' + value_blue + ')';
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['bookcover_rgb100'] = {
  init: function() {
    this.appendValueInput("red")
        .setCheck(null)
        .appendField("赤");
    this.appendValueInput("green")
        .setCheck(null)
        .appendField("% 緑");
    this.appendValueInput("blue")
        .setCheck(null)
        .appendField("% 青");
    this.appendDummyInput()
        .appendField("% の色");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_rgb100'] = function(block) {
  var value_red = javascriptGenerator.valueToCode(block, 'red', javascriptGenerator.ORDER_COMMA) || 0;
  var value_green = javascriptGenerator.valueToCode(block, 'green', javascriptGenerator.ORDER_COMMA) || 0;
  var value_blue = javascriptGenerator.valueToCode(block, 'blue', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.rgb100(' + value_red +', ' + value_green + ', ' + value_blue + ')';
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['bookcover_hsb360'] = {
  init: function() {
    this.appendValueInput("hue")
        .setCheck(null)
        .appendField("色相");
    this.appendValueInput("saturation")
        .setCheck(null)
        .appendField("彩度");
    this.appendValueInput("brightness")
        .setCheck(null)
        .appendField("% 明度");
    this.appendDummyInput()
        .appendField("% の色");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_hsb360'] = function(block) {
  var value_hue = javascriptGenerator.valueToCode(block, 'hue', javascriptGenerator.ORDER_COMMA) || 0;
  var value_saturation = javascriptGenerator.valueToCode(block, 'saturation', javascriptGenerator.ORDER_COMMA) || 100;
  var value_brightness = javascriptGenerator.valueToCode(block, 'brightness', javascriptGenerator.ORDER_COMMA) || 100;
  var code = 'BC.hsb360(' + value_hue +', ' + value_saturation + ', ' + value_brightness + ')';
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['bookcover_hsl360'] = {
  init: function() {
    this.appendValueInput("hue")
        .setCheck(null)
        .appendField("色相");
    this.appendValueInput("saturation")
        .setCheck(null)
        .appendField("彩度");
    this.appendValueInput("luminance")
        .setCheck(null)
        .appendField("% 輝度");
    this.appendDummyInput()
        .appendField("% の色");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_hsl360'] = function(block) {
  var value_hue = javascriptGenerator.valueToCode(block, 'hue', javascriptGenerator.ORDER_COMMA) || 0 ;
  var value_saturation = javascriptGenerator.valueToCode(block, 'saturation', javascriptGenerator.ORDER_COMMA) || 100;
  var value_luminance = javascriptGenerator.valueToCode(block, 'luminance', javascriptGenerator.ORDER_COMMA) || 50;
  var code = 'BC.hsl360(' + value_hue +', ' + value_saturation + ', ' + value_luminance + ')';
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['bookcover_none'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("色なし");
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_none'] = function(block) {
  var code = 'null';
  return [code, javascriptGenerator.ORDER_ATOMIC];
};


Blockly.Blocks['bookcover_newline'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("改行");
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_newline'] = function(block) {
  var code = '"\\n"';
  return [code, javascriptGenerator.ORDER_ATOMIC];
};


Blockly.Blocks['bookcover_font_name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ＭＳ 明朝", "ＭＳ 明朝"], ["ＭＳ ゴシック", "ＭＳ ゴシック"], ["ＨＧ丸ゴシックＭ－ＰＲＯ", "HGRSMP"], ["メイリオ", "meiryo"], ["ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro"], ["ヒラギノ明朝 Pro", "Hiragino Mincho Pro"], ["ヒラギノ丸ゴ ProN", "Hiragino Maru Gothic ProN"], ["Times New Roman", "Times New Roman"], ["Courier New", "Courier New"], ["Consolas", "Consolas"], ["Arial", "Arial"], ["Arial Unicode MS", "Arial Unicode MS"], ["Verdana", "Verdana"], ["Trebuchet MS", "Trebuchet MS"], ["Segoe UI Symbol", "Segoe UI Symbol"], ["Segoe UI Emoji", "Segoe UI Emoji"], ["Symbola", "Symbola"], ["Noto Emoji", "Noto Emoji"]]), "NAME");
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_font_name'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var code = "\"" + dropdown_name + "\"";
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['bookcover_text'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("(");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField(", ");
    this.appendValueInput("str")
        .setCheck(null)
        .appendField(") に");
    this.appendDummyInput()
        .appendField("と書く。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_text'] = function(block) {
  var value_x = javascriptGenerator.valueToCode(block, 'x', javascriptGenerator.ORDER_ATOMIC) || 0;
  var value_y = javascriptGenerator.valueToCode(block, 'y', javascriptGenerator.ORDER_ATOMIC) || 0;
  var value_str = javascriptGenerator.valueToCode(block, 'str', javascriptGenerator.ORDER_ATOMIC) || "\"\"";
  var code = 'BC.text(' + value_str + ', ' + value_x + ', ' + value_y + ');\n';
  return code;
};

Blockly.Blocks['bookcover_say'] = {
  init: function() {
    this.appendValueInput("str")
        .setCheck(null)
        .appendField("");
    this.appendDummyInput()
        .appendField("と言う。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['bookcover_say'] = {
  init: function() {
    this.appendValueInput("str")
        .setCheck(null)
        .appendField(String.fromCodePoint(128034));
    this.appendDummyInput()
        .appendField("と言う。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_say'] = function(block) {
  var value_str = javascriptGenerator.valueToCode(block, 'str', javascriptGenerator.ORDER_ATOMIC) || "\"\"";
  var code = 'BC.say(' + value_str + ');\n';
  return code;
};

Blockly.Blocks['bookcover_generic_statement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("/* 文 */"), "STATEMENT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_generic_statement'] = function(block) {
  var text_statement = block.getFieldValue('STATEMENT') || "";
  var code = text_statement + '\n';
  return code;
};

Blockly.Blocks['bookcover_generic_expression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("/* 式 */0"), "EXPRESSION");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


javascriptGenerator['bookcover_generic_expression'] = function(block) {
  var text_expression = block.getFieldValue('EXPRESSION') || 0;
  var code = text_expression;
  return [code, javascriptGenerator.ATOM];
};

Blockly.Blocks['bookcover_card_frame'] = {
  init: function() {
    this.appendValueInput("PAPER_SPEC")
        .setCheck(null)
        .appendField("");
    this.appendDummyInput()
        .appendField("の用紙情報でカードを作成開始する。");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("");
    this.setInputsInline(true);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_card_frame'] = function(block) {
  var value_paper_spec = javascriptGenerator.valueToCode(block, 'PAPER_SPEC', javascriptGenerator.ORDER_ATOMIC);
  var statements_do = javascriptGenerator.statementToCode(block, 'DO');
  var code = 'var BC = BookCover;\n';
  code    += 'BC.start(draw);\n';
  code    += '  var __cardSpec = BC.__cardSpecs[' + value_paper_spec + '];\n';
  code    += '  BC.__width = __cardSpec["width"]; BC.__height = __cardSpec["height"];\n';
  code    += '  BC.__cards = __cardSpec["cards"];\n';
  code    += statements_do;
  code    += 'BC.finish();\n';
  return code;
};

Blockly.Blocks['bookcover_foreachcard'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("各")
        .appendField(new Blockly.FieldVariable("カード"), "CARD")
        .appendField("に対して")
        .appendField("")
        .appendField(new Blockly.FieldVariable("カウンター"), "COUNTER")
        .appendField("を使って");
    this.appendDummyInput()
        .appendField("（はみ出し防止")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "CLIP")
        .appendField("、枠表示")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "FRAME")
        .appendField("、余白")
        .appendField(new Blockly.FieldNumber(1, 0, 30, 0.05), "MARGIN")
        .appendField("mm）");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("以下を繰り返す: ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_foreachcard'] = function(block) {
//  var variable_card    = javascriptGenerator.variableDB_.getName(block.getFieldValue('CARD'), Blockly.Variables.NAME_TYPE);
 var variable_card = javascriptGenerator.nameDB_.getName(block.getFieldValue('CARD'), Blockly.Names.NameType.VARIABLE);
//  var variable_counter = javascriptGenerator.variableDB_.getName(block.getFieldValue('COUNTER'), Blockly.Variables.NAME_TYPE);
  var variable_counter = javascriptGenerator.nameDB_.getName(block.getFieldValue('COUNTER'), Blockly.Names.NameType.VARIABLE);   
  var statements_do = javascriptGenerator.statementToCode(block, 'DO');
  var checkbox_clip = block.getFieldValue('CLIP') == 'TRUE';
  var checkbox_frame = block.getFieldValue('FRAME') == 'TRUE';
  var number_margin = block.getFieldValue('MARGIN');
  var code = 'for (var ' + variable_counter + ' = 1; ' + variable_counter + ' <= BC.__cards.length; ' + variable_counter + '++ ) {\n';
  code    += '  var ' + variable_card + ' =  BC.__cards[' + variable_counter + ' - 1];\n';
  code    += '  BC.pushMatrix();\n';
  code    += '  BC.translate(' + variable_card + '["x"], ' + variable_card + '["y"]);\n';
  if (checkbox_clip || checkbox_frame) {
    code  += '  BC.__clipMargin = ' + number_margin + ';\n';
  }
  if (checkbox_clip) {
    code  += '  BC.clipWithCard(' + variable_card + ');\n';
  }
  if (checkbox_frame) {
    code  += '  BC.cardFrame(' + variable_card + ');\n';
  }
  code    += statements_do;
  code    += '  BC.popMatrix();\n';
  code    += '}\n';
  return code;
};

Blockly.Blocks['bookcover_cardspec'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("カード用紙")
        .appendField(new Blockly.FieldDropdown([["エーワン F8A4-5", "エーワン F8A4-5"], ["エーワン F10A4-2", "エーワン F10A4-2"], ["エーワン F10A4-1", "エーワン F10A4-1"]]), "CARDSPEC");
    this.setOutput(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_cardspec'] = function(block) {
  var dropdown_cardspec = block.getFieldValue('CARDSPEC');
  var code = "'" + dropdown_cardspec + "'";
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator['text_length'] = function(block) {
  var value_value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_COMMA);
  var code = 'BC.countSymbols(' + value_value + ')';
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};


Blockly.Blocks['bookcover_fromCodePoint'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("ユニコードが");
    this.appendDummyInput()
        .appendField("の文字");
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_fromCodePoint'] = function(block) {
  var value_value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_COMMA);
  var code = 'String.fromCodePoint(' + value_value + ')';
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};


javascriptGenerator['text_charAt'] = function(block) {
  // Get letter at index.
  // Note: Until January 2013 this block did not have the WHERE input.
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var textOrder = (where == 'RANDOM') ? javascriptGenerator.ORDER_NONE :
      javascriptGenerator.ORDER_MEMBER;
  var text = javascriptGenerator.valueToCode(block, 'VALUE',
      textOrder) || '\'\'';
  switch (where) {
    case 'FIRST':
      var code = 'BC.fixedCharAt(' + text + ', ' +  '0)';
      return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
    case 'LAST':
      var code = 'BC.fixedCharAt(' + text + ', ' +  'BC.countSymbols(' + text + ') - 1)';
      return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
    case 'FROM_START':
      var at = javascriptGenerator.getAdjusted(block, 'AT');
      // Adjust index if using one-based indices.
      var code = 'BC.fixedCharAt(' + text + ', ' +  at + ')';
      return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
    case 'FROM_END':
      var at = javascriptGenerator.getAdjusted(block, 'AT', 1, true);
      var code = 'BC.fixedCharAt(' + text + ', ' +  'BC.countSymbols(' + text + ') + (' + at + '))';
      return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
    case 'RANDOM':
      var functionName = javascriptGenerator.provideFunction_(
          'textRandomLetter',
          ['function ' + javascriptGenerator.FUNCTION_NAME_PLACEHOLDER_ +
              '(text) {',
           '  var x = Math.floor(Math.random() * BC.countSymbols(text));',
           '  return BC.fixedCharAt(text, x);',
           '}']);
      var code = functionName + '(' + text + ')';
      return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
  }
  throw 'Unhandled option (text_charAt).';
};

Blockly.Blocks['bookcover_pageWidth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("紙の幅");
    this.setOutput(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_pageWidth'] = function(block) {
  var code = 'BC.pageWidth()';
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['bookcover_pageHeight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("紙の高さ");
    this.setOutput(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_pageHeight'] = function(block) {
  var code = 'BC.pageHeight()';
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['bookcover_cardWidth'] = {
  init: function() {
    this.appendValueInput("CARD")
        .setCheck(null)
        .appendField("カード");
    this.appendDummyInput()
        .appendField("の幅");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_cardWidth'] = function(block) {
  var value_card = javascriptGenerator.valueToCode(block, 'CARD', javascriptGenerator.ORDER_MEMBER);
  var code = value_card + '["width"]';
  return [code, javascriptGenerator.ORDER_MEMBER];
};

Blockly.Blocks['bookcover_cardHeight'] = {
  init: function() {
    this.appendValueInput("CARD")
        .setCheck(null)
        .appendField("カード");
    this.appendDummyInput()
        .appendField("の高さ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_cardHeight'] = function(block) {
  var value_card = javascriptGenerator.valueToCode(block, 'CARD', javascriptGenerator.ORDER_MEMBER);
  var code = value_card + '["height"]';
  return [code, javascriptGenerator.ORDER_MEMBER];
};

Blockly.Blocks['bookcover_console_log'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("console.log(");
    this.appendValueInput("LOG")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_console_log'] = function(block) {
  var value_log = javascriptGenerator.valueToCode(block, 'LOG', javascriptGenerator.ORDER_COMMA) || "\"\"";
  var code = 'console.log(' + value_log + ');\n';
  return code;
};

Blockly.Blocks['bookcover_get_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(String.fromCodePoint(128034) + " の横位置");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_get_x'] = function(block) {
  var code = 'BC.getX()';
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['bookcover_get_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(String.fromCodePoint(128034) + " の縦位置");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_get_y'] = function(block) {
  var code = 'BC.getY()';
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['bookcover_get_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(String.fromCodePoint(128034) + " の向き");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_get_angle'] = function(block) {
  var code = 'BC.getAngle()';
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['bookcover_triangle'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck(null)
        .appendField("(");
    this.appendValueInput("y1")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("x2")
        .setCheck(null)
        .appendField(") - (");
    this.appendValueInput("y2")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("x3")
        .setCheck(null)
        .appendField(") - (");
    this.appendValueInput("y3")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(") を結ぶ三角形を描く。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_triangle'] = function(block) {
  var value_x1 = javascriptGenerator.valueToCode(block, 'x1', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y1 = javascriptGenerator.valueToCode(block, 'y1', javascriptGenerator.ORDER_COMMA) || 0;
  var value_x2 = javascriptGenerator.valueToCode(block, 'x2', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y2 = javascriptGenerator.valueToCode(block, 'y2', javascriptGenerator.ORDER_COMMA) || 0;
  var value_x3 = javascriptGenerator.valueToCode(block, 'x3', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y3 = javascriptGenerator.valueToCode(block, 'y3', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.triangle(' + value_x1 + ', ' + value_y1 
                     + ', ' + value_x2 + ', ' + value_y2 
                     + ', ' + value_x3 + ', ' + value_y3 + ');\n';
  return code;
};

Blockly.Blocks['bookcover_quad'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck(null)
        .appendField("(");
    this.appendValueInput("y1")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("x2")
        .setCheck(null)
        .appendField(") - (");
    this.appendValueInput("y2")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("x3")
        .setCheck(null)
        .appendField(") - (");
    this.appendValueInput("y3")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("x4")
        .setCheck(null)
        .appendField(") - (");
    this.appendValueInput("y4")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(") を結ぶ四角形を描く。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_quad'] = function(block) {
  var value_x1 = javascriptGenerator.valueToCode(block, 'x1', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y1 = javascriptGenerator.valueToCode(block, 'y1', javascriptGenerator.ORDER_COMMA) || 0;
  var value_x2 = javascriptGenerator.valueToCode(block, 'x2', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y2 = javascriptGenerator.valueToCode(block, 'y2', javascriptGenerator.ORDER_COMMA) || 0;
  var value_x3 = javascriptGenerator.valueToCode(block, 'x3', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y3 = javascriptGenerator.valueToCode(block, 'y3', javascriptGenerator.ORDER_COMMA) || 0;
  var value_x4 = javascriptGenerator.valueToCode(block, 'x4', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y4 = javascriptGenerator.valueToCode(block, 'y4', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.quad(' + value_x1 + ', ' + value_y1 
                 + ', ' + value_x2 + ', ' + value_y2 
                 + ', ' + value_x3 + ', ' + value_y3 
                 + ', ' + value_x4 + ', ' + value_y4  + ');\n';
  return code;
};

Blockly.Blocks['bookcover_arc'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("左上(");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("w")
        .setCheck(null)
        .appendField(") サイズ");
    this.appendValueInput("h")
        .setCheck(null)
        .appendField("×");
    this.appendValueInput("start")
        .setCheck(null)
        .appendField("の楕円の開始角:");
    this.appendValueInput("end")
        .setCheck(null)
        .appendField("終了角:");
    this.appendDummyInput()
        .appendField("の弧を描く。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_arc'] = function(block) {
  var value_x = javascriptGenerator.valueToCode(block, 'x', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y = javascriptGenerator.valueToCode(block, 'y', javascriptGenerator.ORDER_COMMA) || 0;
  var value_w = javascriptGenerator.valueToCode(block, 'w', javascriptGenerator.ORDER_COMMA) || 0;
  var value_h = javascriptGenerator.valueToCode(block, 'h', javascriptGenerator.ORDER_COMMA) || 0;
  var value_start = javascriptGenerator.valueToCode(block, 'start', javascriptGenerator.ORDER_COMMA) || 0;
  var value_end = javascriptGenerator.valueToCode(block, 'end', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.arc360(' + value_x + ', ' + value_y 
                   + ', ' + value_w + ', ' + value_h 
                   + ', ' + value_start + ', ' + value_end +  ');\n';
  return code;
};

Blockly.Blocks['bookcover_image'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("左上(");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("w")
        .setCheck(null)
        .appendField(") サイズ");
    this.appendValueInput("h")
        .setCheck(null)
        .appendField("×");
    this.appendValueInput("url")
        .setCheck(null)
        .appendField("にURL:");
    this.appendDummyInput()
        .appendField("の画像を描く。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_image'] = function(block) {
  var value_x = javascriptGenerator.valueToCode(block, 'x', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y = javascriptGenerator.valueToCode(block, 'y', javascriptGenerator.ORDER_COMMA) || 0;
  var value_w = javascriptGenerator.valueToCode(block, 'w', javascriptGenerator.ORDER_COMMA) || 0;
  var value_h = javascriptGenerator.valueToCode(block, 'h', javascriptGenerator.ORDER_COMMA) || 0;
  var value_url = javascriptGenerator.valueToCode(block, 'url', javascriptGenerator.ORDER_COMMA) || "";
  var code = 'BC.image(' + value_url + ', ' + value_x + ', ' + value_y
                  + ', ' + value_w + ', ' + value_h + ');\n';
  return code;
};

Blockly.Blocks['bookcover_rulers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["文庫本", "BUNKO"], ["（目安線なし）", "NONE"] /*, ["ライブラリー版", "LIBRARY"], ["新書・コミック", "SHINSHO"], ["B6", "B6"]'*/]), "SIZE")
        .appendField("用の目安線を描く");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_rulers'] = function(block) {
  var dropdown_size = block.getFieldValue('SIZE');
  var code;
  switch (dropdown_size) {
      case "BUNKO": code = 'BC.rulers();\n'; break;
      case "NONE" : code = '\n'; break;
      default:      code = 'BC.rulers();\n'; break;   
  }
  return code;
};

Blockly.Blocks['bookcover_bezier'] = {
  init: function() {
    this.appendValueInput("x1")
        .setCheck(null)
        .appendField("(");
    this.appendValueInput("y1")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("x2")
        .setCheck(null)
        .appendField(") - (");
    this.appendValueInput("y2")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("x3")
        .setCheck(null)
        .appendField(") - (");
    this.appendValueInput("y3")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("x4")
        .setCheck(null)
        .appendField(") - (");
    this.appendValueInput("y4")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(") のベジエ曲線を描く。");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_bezier'] = function(block) {
  var value_x1 = javascriptGenerator.valueToCode(block, 'x1', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y1 = javascriptGenerator.valueToCode(block, 'y1', javascriptGenerator.ORDER_COMMA) || 0;
  var value_x2 = javascriptGenerator.valueToCode(block, 'x2', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y2 = javascriptGenerator.valueToCode(block, 'y2', javascriptGenerator.ORDER_COMMA) || 0;
  var value_x3 = javascriptGenerator.valueToCode(block, 'x3', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y3 = javascriptGenerator.valueToCode(block, 'y3', javascriptGenerator.ORDER_COMMA) || 0;
  var value_x4 = javascriptGenerator.valueToCode(block, 'x4', javascriptGenerator.ORDER_COMMA) || 0;
  var value_y4 = javascriptGenerator.valueToCode(block, 'y4', javascriptGenerator.ORDER_COMMA) || 0;
  var code = 'BC.bezier(' + value_x1 + ', ' + value_y1 
                   + ', ' + value_x2 + ', ' + value_y2 
                   + ', ' + value_x3 + ', ' + value_y3 
                   + ', ' + value_x4 + ', ' + value_y4  + ');\n';
  return code;
};

Blockly.Blocks['bookcover_distance'] = {
  init: function() {
    this.appendValueInput("X1")
        .setCheck(null)
        .appendField("(");
    this.appendValueInput("Y1")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("X2")
        .setCheck(null)
        .appendField(") から (");
    this.appendValueInput("Y2")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(") の距離");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_distance'] = function(block) {
  var value_x1 = javascriptGenerator.valueToCode(block, 'X1', javascriptGenerator.ORDER_SUBTRACTION) || 0;
  var value_y1 = javascriptGenerator.valueToCode(block, 'Y1', javascriptGenerator.ORDER_SUBTRACTION) || 0;
  var value_x2 = javascriptGenerator.valueToCode(block, 'X2', javascriptGenerator.ORDER_SUBTRACTION) || 0;
  var value_y2 = javascriptGenerator.valueToCode(block, 'Y2', javascriptGenerator.ORDER_SUBTRACTION) || 0;
  // TODO Math.hypot(...)
  var code = 'Math.sqrt((' + value_x2 + ' - ' + value_x1 + ') * (' + value_x2 + ' - ' + value_x1 + ') + (' + value_y2 + ' - ' + value_y1 + ') * (' + value_y2 + ' - ' + value_y1 +'))';
  return [code, javascriptGenerator.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['bookcover_atan2'] = {
  init: function() {
    this.appendValueInput("X1")
        .setCheck(null)
        .appendField("(");
    this.appendValueInput("Y1")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("X2")
        .setCheck(null)
        .appendField(") から (");
    this.appendValueInput("Y2")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(") の角度");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

javascriptGenerator['bookcover_atan2'] = function(block) {
  var value_x1 = javascriptGenerator.valueToCode(block, 'X1', javascriptGenerator.ORDER_SUBTRACTION) || 0;
  var value_y1 = javascriptGenerator.valueToCode(block, 'Y1', javascriptGenerator.ORDER_SUBTRACTION) || 0;
  var value_x2 = javascriptGenerator.valueToCode(block, 'X2', javascriptGenerator.ORDER_SUBTRACTION) || 0;
  var value_y2 = javascriptGenerator.valueToCode(block, 'Y2', javascriptGenerator.ORDER_SUBTRACTION) || 0;

  var code = 'Math.atan2(' + value_y2 + ' - ' + value_y1 + ', ' + value_x2 + ' - ' + value_x1 + ') * 180 / Math.PI';
  return [code, javascriptGenerator.ORDER_MULTIPLICATION];
};

