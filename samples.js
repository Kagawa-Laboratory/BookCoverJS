function outputSVG(name, portrait, sc) {
  if (sc == null) { sc = 1; }
  if (portrait) {
    document.writeln("<object type='image/svg+xml' data='Samples/" + name + ".svg' width='" + 141 * sc + "' height='" + 200 * sc + "' ></object>");
  } else {
    document.writeln("<object type='image/svg+xml' data='Samples/" + name + ".svg' width='" + 282 * sc + "' height='" + 200 * sc + "' ></object>");
  }  
}

function outputBlockly(name, lang) {
  document.writeln("<a href='blockly.html?upload=https%3A%2F%2Fguppy.eng.kagawa-u.ac.jp%2FSimpleUpload%2FJSP%2FsimpleUpload.jsp&download=https%3A%2F%2Fguppy.eng.kagawa-u.ac.jp%2FSimpleUpload%2FJSP%2FsimpleDownload.jsp&url=Samples%2f" + name + ".xml" + ((lang == null || lang == "") ? "" : ("&lang=" + lang)) +  " '>Blockly ではじめる</a>");
}

function outputCodeMirror(name, lang) {
  document.writeln("<span style='font-size:50%'><a href='codemirror.html?upload=https%3A%2F%2Fguppy.eng.kagawa-u.ac.jp%2FSimpleUpload%2FJSP%2FsimpleUpload.jsp&url=Samples%2f" + name + ".js" + ((lang == null || lang == "") ? "" : ("&lang=" + lang)) +  " '>(JS)</a></span>");
}

function output(name, portrait, sc, lang) {
  document.writeln("<td>");
  outputSVG(name, portrait, sc);
  document.writeln("<br />");
  outputBlockly(name, lang);
  document.write(" ");
  outputCodeMirror(name, lang);
  document.writeln("</td>");
}

function writeTable(names, cols, portrait, sc, lang) {
  if (cols == null) {
   cols = 3;
  }

  for (var i = 0; i < names.length; i++) {
    if (i % cols == 0) {
       document.writeln("<tr>");
    }
    output(names[i], portrait, sc, lang);
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
