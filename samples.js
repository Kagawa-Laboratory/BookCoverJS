function outputSVG(name, portrait, sc) {
  if (sc == null) { sc = 1; }
  if (portrait) {
    document.writeln("<object type='image/svg+xml' data='Samples/" + name + ".svg' width='" + 141 * sc + "' height='" + 200 * sc + "' ></object>");
  } else {
    document.writeln("<object type='image/svg+xml' data='Samples/" + name + ".svg' width='" + 282 * sc + "' height='" + 200 * sc + "' ></object>");
  }  
}

function outputBlockly(name) {
  document.writeln("<a href='blockly.html?url=Samples%2f" + name + ".xml'>Blockly ではじめる</a>");
}



function output(name, portrait, sc) {
  document.writeln("<td>");
  outputSVG(name, portrait, sc);
  document.writeln("<br />");
  outputBlockly(name);
  document.writeln("</td>");
}

function writeTable(names, cols, portrait, sc) {
  if (cols == null) {
   cols = 3;
  }

  for (var i = 0; i < names.length; i++) {
    if (i % cols == 0) {
       document.writeln("<tr>");
    }
    output(names[i], portrait, sc);
    if (i % cols == cols - 1) {
       document.writeln("</tr>");
    }
  }

  for (i = i % cols; i != 0; i++) {
    document.writeln("<td>&nbsp;</td>");
    if (i == cols - 1) {
       document.writeln("</tr>");
       break;
    }
  }
}
