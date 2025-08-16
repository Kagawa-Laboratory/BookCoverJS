import * as Blockly from 'blockly/core';
import {SVG} from "@svgdotjs/svg.js";
import {BlocklyStorage} from "./storage.js";
import {javascriptGenerator} from 'blockly/javascript';
import * as Ja from 'blockly/msg/ja';
import 'code-prettify';
import "./myblockly.js";
import "./myblocks.js";
import {BookCover} from "./BookCoverJS/BookCover.js";

const tabs = ["Block", "JavaScript", "SVG", "Xml"];
var selected = tabs[0];
var draw;
var workspace = null;

Blockly.setLocale(Ja);

function onResize() {
    const area = document.getElementById("blocklyArea");
    const divs = [ document.getElementById("contentBlock"),
                   document.getElementById("contentJavaScript"),
                   document.getElementById("contentSVG"),
                   document.getElementById("contentXml") ];

    const width  = area.offsetWidth;
    const height = area.offsetHeight;
    const offset = area.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
    for (var i = 0; i < divs.length ; i++) {
       const div = divs[i];
       div.style.height = `${height}px`;
       div.style.width  = `${width}px`;
       div.style.left   = `${offset.left + scrollLeft}px`;
       div.style.top    = `${offset.top  + scrollTop}px`;
    }
}

window.addEventListener('load', onResize);
window.addEventListener('resize', onResize);

function renderSVG() {
  const code = javascriptGenerator.workspaceToCode(workspace);
  draw.clear();
  BookCover.init();
  eval(code);
}

function renderContent(clickedName) {
  const content = document.getElementById(`content${clickedName}`);
  if (clickedName == "Xml") {
    const xmlDom  = Blockly.Xml.workspaceToDom(workspace);
    const xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    content.value = xmlText;
  } else if (clickedName == "JavaScript") {
    var code = javascriptGenerator.workspaceToCode(workspace);
    code = PR.prettyPrintOne(code, 'js');
    content.innerHTML = code;
  } else if (clickedName == "SVG") {
    renderSVG();
  }
}

function tabClick(clickedName) {
  // If the XML tab was open, save and render the content.
  if (document.getElementById('tabXml').classList.contains('tabon')) {
    const xmlTextarea = document.getElementById('contentXml');
    const xmlText     = xmlTextarea.value;
    var xmlDom        = null;
    try {
      xmlDom = Blockly.utils.xml.textToDom(xmlText);
    } catch (e) {
      var q = window.confirm(MSG['badXml'].replace('%1', e));
      if (!q) {
        // Leave the user on the XML tab.
        return;
      }
    }
    if (xmlDom) {
      workspace.clear();
      Blockly.Xml.domToWorkspace(xmlDom, workspace);
    }
  }

  if (document.getElementById("tabBlock").classList.contains('tabon')) {
    workspace.setVisible(false);
  }

  // Deselect all tabs and hide all panes.
  for (var i = 0; i < tabs.length; i++) {
    const name = tabs[i];
    document.getElementById(`tab${name}`).classList.remove('tabon');
    document.getElementById(`tab${name}`).classList.add('taboff');
    document.getElementById(`content${name}`).style.visibility = 'hidden';
  }

  // Select the active tab.
  selected = clickedName;
  document.getElementById(`tab${clickedName}`).classList.remove('taboff');
  document.getElementById(`tab${clickedName}`).classList.add('tabon');
  document.getElementById(`content${clickedName}`).style.visibility = 'visible';

  renderContent(clickedName);

  if (clickedName == 'Block') {
    workspace.setVisible(true);
  }
  Blockly.svgResize(workspace);
}

function confirmLang(lang) {
    if (lang == null)  return "emoji";
    switch (lang) {
      case "ja":
      case "日本語":	return "ja";  
      case "simple_ja":
      case "にほんご": 	return "simple_ja";
      case "en":	return "en";
      default: 		return "emoji";
    }
}

var i18nMap = {
    "undoButton":      	 { "ja": "アンドゥー",          "en": "Undo", "default": "&#x21b6;" }
  , "redoButton":      	 { "ja": "リドゥー",            "en": "Redo", "default": "&#x21b7;" }
  , "intro":           	 { "ja": "ヘルプ",              "en": "Help", "default": "&#x2753;" }
  , "openButton":      	 { "ja": "読込",                "en": "Open", "default": "&#x1f4c2;" }
  , "saveButton":      	 { "ja": "保存",                "en": "Save", "default": "&#x1f4be;"  }
  , "printButton":     	 { "ja": "印刷",                "en": "Print", "default": "&#x1f5a8;" }
  , "downloadXmlButton": { "ja": "ブロックダウンロード", "en": "Download Block", "default": "&#x1f4c4;&#x1f4e5;" }
  , "uploadXmlButton": 	 { "ja": "ブロックアップロード", "en": "Upload Block", "default": "&#x1f4c4;&#x1f4e4;" }
  , "uploadSvgButton": 	 { "ja": "画像アップロード",     "en": "Upload Image", "default": "&#x1f5bc;&#x1f4e4;" }
  , "resetButton":     	 { "ja": "リセット",             "en": "Reset", "default": "&#x21bb;" }
};

function replaceI18nElement(id, lang) {
//   console.log(id, lang);
   var content = i18nMap[id][lang];
   if (content == null) content = i18nMap[id]["default"];
   return content;
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(location.search);
    workspace = Blockly.inject('contentBlock',
       { toolbox: document.getElementById('toolbox'),
         zoom: { controls: true, wheel: true, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2 }
       });

    BlocklyStorage.backupOnUnload(workspace);

    workspace.addChangeListener(Blockly.Events.disableOrphans);

    draw = SVG().addTo("#contentSVG");

    const lang = confirmLang(params.get("lang"));

    document.querySelectorAll(".i18n").forEach(elem => {
        elem.innerHTML = replaceI18nElement(elem.getAttribute("id"), lang);
    });

    const clean = params.get("clean");
    if (clean != null && (clean.toLowerCase() == "true" || clean.toLowerCase() == "yes")) {
        Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);
    } else {
      window.setTimeout(function () {
//            BlocklyStorage.restoreBlocks(workspace);
        const url = window.location.href.split('#')[0];
        if ('localStorage' in window) {
          const memo = window.localStorage[url];
          if (memo) {
            const xml = Blockly.utils.xml.textToDom(memo);
            if (xml.hasChildNodes()) {
              Blockly.Xml.domToWorkspace(xml, workspace);
              return;
            }
            // xml が空だったら続行する
          }
        }
        const xmlUrl = params.get("url");
        if (xmlUrl) {
          fetch(xmlUrl)
            .then(response => response.text())
            .then(data => {
        	const xml = Blockly.utils.xml.textToDom(data);
        	Blockly.Xml.domToWorkspace(xml, workspace);
           });
        } else {
          Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);
        }
      }, 0);
    }

//    document.getElementById("printButton").click(function () {
//       renderContent("SVG");
//       var subframe = document.getElementById('svgFrame');
//       console.log("abc", subframe[0].innerHTML, "xyz");
//       var blob    = new Blob([svgText], { type: 'image/svg+xml' });
//       var sub     = window.open(URL.createObjectURL(blob), 'SVG subwindow');
//    });

    document.getElementById("intro").addEventListener('click', ev => {
//      alert("intro");
      ev.preventDefault();
      const tour = introJs();
      tour.setOption('tooltipPosition', 'auto');
      tour.start();
      return false;
    });

    function printSVG() {
//      console.log(draw);  
      const wid = draw.width;
      const hei = draw.height;
      draw.width  = `${BookCover.pageWidth()}mm`;
      draw.height = `${BookCover.pageHeight()}mm`;
      const svgText = draw.svg();
      draw.width  = wid;
      draw.height = hei;
      const blob    = new Blob([svgText], { type: 'image/svg+xml' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob);
      } else {
        const sub     = window.open(URL.createObjectURL(blob), 'SVG subwindow');
      }
      return false;
    }

    document.getElementById("printButton").addEventListener('click', ev => {
      ev.preventDefault();
      if (!document.getElementById('tabSVG').classList.contains('tabon')) {
        renderSVG();
      }
      printSVG();
      return false;
    });

    document.getElementById("saveButton").addEventListener('click', ev => {
      ev.preventDefault();
      var xmlText;
      if (document.getElementById('tabXml').classList.contains('tabon')) {
        xmlText = document.getElementById('contentXml').value;
      } else {
        const xmlDom = Blockly.Xml.workspaceToDom(workspace);
        xmlText      = Blockly.Xml.domToPrettyText(xmlDom);
      }
      const blob     = new Blob([xmlText], { type: 'text/xml' });
      document.getElementById("saveButton").href = window.URL.createObjectURL(blob);
    });
    document.getElementById("openButton").addEventListener('click', ev => {
      ev.preventDefault();
      document.getElementById("openButtonAux").click();
      return false;
    });
    document.getElementById("openButtonAux").addEventListener('change', evt => {
      evt.preventDefault();
      const f = evt.target.files[0];
      const reader = new FileReader();

      reader.onload = function(e) {
        const xmlText = e.target.result;
        document.getElementById("contentXml").value = xmlText;
        if (!document.getElementById('tabXml').classList.contains('tabon')) {
          try {
            xmlDom = Blockly.utils.xml.textToDom(xmlText);
          } catch (e) {
            const q = window.confirm(MSG['badXml'].replace('%1', e));
            if (!q) {
              // Leave the user on the XML tab.
              return;
            }
          }
          if (xmlDom) {
            workspace.clear();
            Blockly.Xml.domToWorkspace(xmlDom, workspace);
          }
        }
      };
      reader.readAsText(f);
    });

    document.getElementById("resetButton").addEventListener('click', ev => {
      ev.preventDefault();
      const q = window.confirm("編集したブロックを捨てて、最初の内容に戻します。よろしいですか？");
      if (!q) return;
      const xmlUrl = params.get("url");
      if (xmlUrl) {
        fetch(xmlUrl)
          .then(response => response.text())
          .then(data => {
            workspace.clear();
            const xml = Blockly.utils.xml.textToDom(data);
            Blockly.Xml.domToWorkspace(xml, workspace);
        });
      } else {
         workspace.clear();
         Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);
      }
    });

    document.getElementById("undoButton").addEventListener('click', ev => {
      ev.preventDefault();
      Blockly.mainWorkspace.undo(false);	      
    });

    document.getElementById("redoButton").addEventListener('click', ev => {
      ev.preventDefault();
      Blockly.mainWorkspace.undo(true);
    });

    const uploadUrl = params.get("upload");
    // uploadUrl は name と data というパラメーターをとると仮定する
    if (uploadUrl == null || uploadUrl == "") {
      document.getElementById("uploadXmlButton").style.display = 'none';
      document.getElementById("uploadSvgButton").style.display = 'none';
    } else {
      document.getElementById("uploadXmlButton").addEventListener('click', ev => {
        ev.preventDefault();
       	var xmlText;
       	if (document.getElementById('tabXml').classList.contains('tabon')) {
       	  xmlText = document.getElementById('contentXml').value;
       	} else {
       	  const xmlDom = Blockly.Xml.workspaceToDom(workspace);
       	  xmlText      = Blockly.Xml.domToPrettyText(xmlDom);
       	}
        fetch(uploadUrl, {
            method: 'post'
//          , headers: { 'Content-Type': 'application/json' }
//          , body: JSON.stringify({ name: "blocks.xml", data: xmlText })
            , headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            , body: new URLSearchParams({ name: "blocks.xml", data: xmlText })
        }).then(response => response.text())
          .then(message =>{
             console.log("success", message);
             alert(message); // TODO alert ではなくて Chrome でもコピペできるようにする
        }).catch(reason => {
             console.log("fail", reason);
             alert(reason);
        });
      });
      document.getElementById("uploadSvgButton").addEventListener('click', ev => {
        ev.preventDefault();
      	if (!document.getElementById('tabSVG').classList.contains('tabon')) {
      	  renderSVG();
      	}
        const svgText = draw.svg();
        fetch(uploadUrl, {
            method: 'post'
//          , headers: { 'Content-Type': 'application/json' }
//          , body: JSON.stringify({ name: "blocks.svg", data: svgText })
            , headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            , body: new URLSearchParams({ name: "blocks.svg", data: svgText })
        }).then(response => response.text())
          .then(message => {
//           console.log("success", message);
             alert(message); // TODO alert ではなくて Chrome でもコピペできるようにする
        }).catch(reason => {
             console.log("fail", reason);
             alert(reason);
        });
      });
    }

    const downloadUrl = params.get("download");
    if (downloadUrl == null || downloadUrl == "") {
      document.getElementById("downloadXmlButton").style.display = 'none';
    } else {
      document.getElementById("downloadXmlButton").addEventListener('click', ev => {
        ev.preventDefault();
        const q = window.confirm("現在編集中のブロックを捨ててよろしいですか？");
        if (!q) return;
        const number = window.prompt("アップロードしたときの非負の整数を入力して下さい:");
        fetch(`${downloadUrl}?number=${number}`)
          .then(response => response.text())
          .then(data => {
//           console.log("success", data);
             workspace.clear();
             const xml = Blockly.utils.xml.textToDom(data);
             Blockly.Xml.domToWorkspace(xml, workspace);    
        }).catch(reason => {
//             console.log("fail", reason);
             alert("ダウンロードに失敗しました。" + reason);
        }); 
      });
    }

    onResize();
    Blockly.svgResize(workspace);

    // 無理やりフォントを変更する。
    const cssNode = document.createElement('style');
    document.head.appendChild(cssNode);
    const text = `
        .blocklyText {"
      	  cursor: default;"
      	  fill: #fff;"
      	  font-family: 'Segoe UI Symbol';"
      	  font-size: 11pt;"
      	}`.replace(/\n        /g, '\n');
    const cssTextNode = document.createTextNode(text);
    cssNode.appendChild(cssTextNode);

    tabClick(selected);
    for (var i = 0; i < tabs.length; i++) {
       const name = tabs[i];
       document.getElementById(`tab${name}`).addEventListener('click', function(name_) { return ev => { ev.preventDefault(); tabClick(name_); }; }(name));
    }
});
