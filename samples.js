function outputSVG(buffer, name, portrait, sc) {
  if (sc == null) { sc = 1; }
  if (portrait) {
    buffer += `<object type='image/svg+xml' data='Samples/${name}.svg' width='${141 * sc}' height='${200 * sc}' ></object>`;
  } else {
    buffer += `<object type='image/svg+xml' data='Samples/${name}.svg' width='${282 * sc}' height='${200 * sc}' ></object>`;
  }  
  buffer += "\n";
  return buffer;
}

function outputBlockly(buffer, name, lang) {
  const upurl   = "%2F%2Fguppy.eng.kagawa-u.ac.jp%2FVanillaUpload%2Fupload";
  const downurl = "%2F%2Fguppy.eng.kagawa-u.ac.jp%2FVanillaUpload%2Fdownload";
  const langop  = (lang == null || lang == "") ? "" : `&lang=${lang}`;
  buffer += `<a href='blockly.html?upload=${upurl}&download=${downurl}&url=Samples%2f${name}.xml${langop}'>Blockly ではじめる</a>`;
  buffer += "\n";
  return buffer;  
}

function outputCodeMirror(buffer, name, lang) {
  const upurl   = "%2F%2Fguppy.eng.kagawa-u.ac.jp%2FVanillaUpload%2Fupload";
  const langop  = (lang == null || lang == "") ? "" : `&lang=${lang}`; 
  buffer += `<span style='font-size: 50%;'><a href='codemirror.html?upload=${upurl}&url=Samples%2f${name}.js${langop}" '>(JS)</a></span>`;
  buffer += "\n";
  return buffer;  
}

function outputData(buffer, name, portrait, sc, lang) {
  buffer += "<td>\n";
  buffer = outputSVG(buffer, name, portrait, sc);
  buffer += "<br />\n";
  buffer = outputBlockly(buffer, name, lang);
  buffer += " ";
  buffer = outputCodeMirror(buffer, name, lang);
  buffer += "</td>\n";
  return buffer;  
}

export function writeTable(elem, names, cols, portrait, sc, lang) {
  var buffer = "";
  if (cols == null) {
   cols = 3;
  }

  for (var i = 0; i < names.length; i++) {
    if (i % cols == 0) {
       buffer += "<tr>\n";
    }
    buffer = outputData(buffer, names[i], portrait, sc, lang);
    if (i % cols == cols - 1) {
       buffer += "</tr>\n";
    }
  }

  for (i = i % cols; i != 0; i++) {
    buffer += "<td>&nbsp;</td>\n";
    if (i == cols - 1) {
       buffer += "</tr>\n";
       break;
    }
  }
  elem.insertAdjacentHTML("beforeend", buffer);  
}
