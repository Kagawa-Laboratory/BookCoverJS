Blockly.Blocks['bookcover_frame'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ブックカバー作成開始");
    this.appendStatementInput("statements")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_frame'] = function(block) {
  var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
  var code = "var BC = BookCover;\n" 
           + "BC.start(draw);\n" 
           + statements_statements 
           + "BC.finish();\n";
  return code;
};


Blockly.Blocks['bookcover_guide_bars'] = {
  init: function() {
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("ガイドバーを幅: "); 
    this.appendDummyInput()
        .appendField("に設定する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_guide_bars'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
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
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_matrix'] = function(block) {
  var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
  var code = 'BC.pushMatrix()\n' + statements_statements + 'BC.resetMatrix();\n';
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

Blockly.JavaScript['bookcover_line'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.line(' + value_x1 + ',' +  value_y1 + ',' + 
                        + value_x2 + ',' +  value_y2 + ');\n';
  return code;
};

Blockly.Blocks['bookcover_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("塗りを");
    this.appendValueInput("COLOR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("色にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_fill'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'BC.fill(' + value_color + ');\n';
  return code;
};

Blockly.Blocks['bookcover_stroke'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("線を");
    this.appendValueInput("COLOR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("色にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_stroke'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'BC.stroke(' + value_color + ');\n';
  return code;
};

Blockly.Blocks['bookcover_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_color'] = function(block) {
  var colour_color = block.getFieldValue('COLOR');
  var code = "0x" + colour_color.substring(1);
  return [code, Blockly.JavaScript.ORDER_NONE];
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
        .appendField(") サイズ (");
    this.appendValueInput("h")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(") の長方形を描く");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_rect'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.rect(' + x + ', ' + y + ', ' + w + ', ' + h +');\n';
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
        .appendField(") サイズ (");
    this.appendValueInput("h")
        .setCheck(null)
        .appendField(",");
    this.appendDummyInput()
        .appendField(") の楕円を描く");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_ellipse'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.ellipse(' + x + ', ' + y + ', ' + w + ', ' + h +');\n';
  return code;
};

Blockly.Blocks['bookcover_rotate_h'] = {
  init: function() {
    this.appendValueInput("color")
        .setCheck(null)
        .appendField("色");
    this.appendValueInput("angle")
        .setCheck(null)
        .appendField("を");
    this.appendDummyInput()
        .appendField("度回した色");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_rotate_h'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'rotateH360(' + value_color + ', ' + value_angle + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['bookcover_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_angle'] = function(block) {
  var angle_angle = block.getFieldValue('angle');
  var code = angle_angle;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['bookcover_stroke_weight'] = {
  init: function() {
    this.appendValueInput("width")
        .setCheck(null)
        .appendField("線の幅を");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_stroke_weight'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.strokeWeight(' + value_width + ');\n';
  return code;
};

Blockly.Blocks['bookcover_stroke_opacity'] = {
  init: function() {
    this.appendValueInput("opacity")
        .setCheck(null)
        .appendField("線の透明度を");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_stroke_opacity'] = function(block) {
  var value_opacity = Blockly.JavaScript.valueToCode(block, 'opacity', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.strokeOpacity(' + value_opacity + ');\n';
  return code;
};

Blockly.Blocks['bookcover_fill_opacity'] = {
  init: function() {
    this.appendValueInput("opacity")
        .setCheck(null)
        .appendField("線の透明度を");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_fill_opacity'] = function(block) {
  var value_opacity = Blockly.JavaScript.valueToCode(block, 'opacity', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.fillOpacity(' + value_opacity + ');\n';
  return code;
};

Blockly.Blocks['bookcover_no_stroke'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("線を描かない");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_no_stroke'] = function(block) {
  var code = 'BC.noStroke();\n';
  return code;
};

Blockly.Blocks['bookcover_no_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("塗らない");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_no_fill'] = function(block) {
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
        .appendField("そのサイズを");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_text_font'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.textFont(' + value_name + ', ' + value_size + ';\n';
  return code;
};

Blockly.Blocks['bookcover_random_seed'] = {
  init: function() {
    this.appendValueInput("seed")
        .setCheck(null)
        .appendField("乱数の種を");
    this.appendDummyInput()
        .appendField("にする");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_random_seed'] = function(block) {
  var value_seed = Blockly.JavaScript.valueToCode(block, 'seed', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'randomSeed(' + value_seed + ');\n';
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
        .appendField(") 水平移動する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_translate'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
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
        .appendField(") 拡大する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_scale'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.scale(' + value_x + ', ' + value_y + ');\n';
  return code;
};

Blockly.Blocks['bookcover_rotate'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck(null)
        .appendField("以下の図形を");
    this.appendDummyInput()
        .appendField("度回転する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_rotate'] = function(block) {
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.rotate(' + value_angle + ');\n';
  return code;
};

Blockly.Blocks['bookcover_pen_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ペンを上げる");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_pen_up'] = function(block) {
  var code = 'BC.penUp();\n';
  return code;
};

Blockly.Blocks['bookcover_pen_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ペンを下げる");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_pen_down'] = function(block) {
  var code = 'BC.penDown();\n';
  return code;
};

Blockly.Blocks['bookcover_forward'] = {
  init: function() {
    this.appendValueInput("len")
        .setCheck(null)
        .appendField("");
    this.appendDummyInput()
        .appendField("進む");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_forward'] = function(block) {
  var value_len = Blockly.JavaScript.valueToCode(block, 'len', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.forward(' + value_len + ');\n';
  return code;
};

Blockly.Blocks['bookcover_turn'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck(null)
        .appendField("");
    this.appendDummyInput()
        .appendField("度回る");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_turn'] = function(block) {
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.turn(' + value_angle + ');\n';
  return code;
};



Blockly.Blocks['bookcover_direction'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck(null)
        .appendField("");
    this.appendDummyInput()
        .appendField("に向く");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_direction'] = function(block) {
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.direction(' + value_angle + ');\n';
  return code;
};

Blockly.Blocks['bookcover_go'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(null)
        .appendField("(");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField(", ");
    this.appendDummyInput()
        .appendField(") に移動する");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_go'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
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

Blockly.JavaScript['bookcover_random_in_range'] = function(block) {
  var value_min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.randomInRange(' + value_min + ', ' + value_max + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
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
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.JavaScript['bookcover_rgb255'] = function(block) {
  var value_red = Blockly.JavaScript.valueToCode(block, 'red', Blockly.JavaScript.ORDER_ATOMIC);
  var value_green = Blockly.JavaScript.valueToCode(block, 'green', Blockly.JavaScript.ORDER_ATOMIC);
  var value_blue = Blockly.JavaScript.valueToCode(block, 'blue', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.rgb255(' + value_red +', ' + value_green + ', ' + value_blue + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['bookcover_hsb360'] = {
  init: function() {
    this.appendValueInput("hue")
        .setCheck(null)
        .appendField("色相");
    this.appendValueInput("sturation")
        .setCheck(null)
        .appendField("彩度");
    this.appendValueInput("brightness")
        .setCheck(null)
        .appendField("明度");
    this.appendDummyInput()
        .appendField("の色");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.JavaScript['bookcover_hsb360'] = function(block) {
  var value_hue = Blockly.JavaScript.valueToCode(block, 'hue', Blockly.JavaScript.ORDER_ATOMIC);
  var value_saturation = Blockly.JavaScript.valueToCode(block, 'saturation', Blockly.JavaScript.ORDER_ATOMIC);
  var value_brightness = Blockly.JavaScript.valueToCode(block, 'brightness', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.hsb360(' + value_hue +', ' + value_saturation + ', ' + value_brightness + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['bookcover_hsl360'] = {
  init: function() {
    this.appendValueInput("hue")
        .setCheck(null)
        .appendField("色相");
    this.appendValueInput("sturation")
        .setCheck(null)
        .appendField("彩度");
    this.appendValueInput("luminance")
        .setCheck(null)
        .appendField("輝度");
    this.appendDummyInput()
        .appendField("の色");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bookcover_hsl360'] = function(block) {
  var value_hue = Blockly.JavaScript.valueToCode(block, 'hue', Blockly.JavaScript.ORDER_ATOMIC);
  var value_saturation = Blockly.JavaScript.valueToCode(block, 'saturation', Blockly.JavaScript.ORDER_ATOMIC);
  var value_brightness = Blockly.JavaScript.valueToCode(block, 'luminance', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BC.hsl360(' + value_hue +', ' + value_saturation + ', ' + value_luminance + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


// text
