import {EditorState} from "@codemirror/state"
import {keymap, EditorView} from "@codemirror/view";
import {defaultKeymap, history, historyKeymap} from "@codemirror/commands";
import {syntaxHighlighting, defaultHighlightStyle} from "@codemirror/language";
import {javascript} from "@codemirror/lang-javascript";
import {SVG} from "@svgdotjs/svg.js";
import {BookCover} from "./BookCoverJS/BookCover.js";

const tabs = ["JavaScript", "SVG"];
const cmExtensions = [ history()
                     , keymap.of([ ...defaultKeymap, ...historyKeymap ])
                     , javascript()
                     , syntaxHighlighting(defaultHighlightStyle)
                     ];
var selected = tabs[0];
var draw;
var myCodeMirror;

function onResize() {
    const area = document.getElementById("blocklyArea");
    const divs = [document.getElementById("contentJavaScript"),
                  document.getElementById("contentSVG") ];

    const width  = area.offsetWidth;
    const height = area.offsetHeight;
    const offset = area.getBoundingClientRect();
    const scrollLeft = window.pageXOffset
                       || document.documentElement.scrollLeft;
    const scrollTop  = window.pageYOffset
                       || document.documentElement.scrollTop;
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
  const code = myCodeMirror.state.doc.toString();
  draw.clear();
  BookCover.init();  
  eval(code);
}

function renderContent(clickedName) {
  const content = document.getElementById(`content${clickedName}`);
  if (clickedName == "JavaScript") {
  } else if (clickedName == "SVG") {
     renderSVG();
  }
}

function tabClick(clickedName) {
  // Deselect all tabs and hide all panes.
  for (var i = 0; i < tabs.length; i++) {
    const name = tabs[i];
    document.getElementById('tab' + name).classList.remove('tabon');
    document.getElementById('tab' + name).classList.add('taboff');
    document.getElementById('content' + name).style.visibility = 'hidden';
  }

  // Select the active tab.
  selected = clickedName;
  document.getElementById('tab' + clickedName).classList.remove('taboff');
  document.getElementById('tab' + clickedName).classList.add('tabon');
  document.getElementById('content' + clickedName).style.visibility = 'visible';

  renderContent(clickedName);
}

function backupJS() {
  if ('localStorage' in window) {
    const code = myCodeMirror.state.doc.toString();
    const url = window.location.href.split('#')[0];
    window.localStorage.setItem(url, code);
  }
}

window.addEventListener('unload', backupJS);

function restoreJS()  {
  const url = window.location.href.split('#')[0];
  if ('localStorage' in window && window.localStorage[url]) {
    const code = window.localStorage[url];
    myCodeMirror.setState(EditorState.create({ doc: code, extensions: cmExtensions }));
  }
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

const i18nMap = {
    "intro":              { "ja": "ヘルプ",             "en": "Help",         "default": "&#x2753;" }
  , "openButton":         { "ja": "読込",              "en": "Open",         "default": "&#x1f4c2;" }
  , "saveButton":         { "ja": "保存",              "en": "Save",         "default": "&#x1f4be;"  }
  , "printButton":        { "ja": "印刷",              "en": "Print",        "default": "&#x1f5a8;" }
  , "uploadSourceButton": { "ja": "ソースアップロード", "en": "Upload Data",  "default": "&#x1f4c4;&#x1f4e4;" }
  , "uploadSvgButton":    { "ja": "画像アップロード",   "en": "Upload Image", "default": "&#x1f5bc;&#x1f4e4;" }
  , "resetButton":        { "ja": "リセット",           "en": "Reset",        "default": "&#x21bb;" }
};

function replaceI18nElement(id, lang) {
   var content = i18nMap[id][lang];
   if (content == null) content = i18nMap[id]["default"];
   return content;
}
window.addEventListener('load', () => {
    const params = new URLSearchParams(location.search);
    draw = SVG().addTo("#contentSVG").size('100%', '100%');
    tabClick(selected);
    for (var i = 0; i < tabs.length; i++) {
       const name = tabs[i];
       document.getElementById(`tab${name}`).addEventListener('click', function(name_) {
           return ev => { ev.preventDefault(); tabClick(name_); };
       }(name));
    }

    const initCode = `
        var BC = BookCover;
        BC.start(draw);
        BC.pageFrame();
          BC.stroke(null);
          var i;
          for (i = 0; i <= 330; i += 30) {
            BC.fill(BC.hsl360(i, 100, 50));
            BC.pushMatrix()
              BC.translate(BC.pageWidth() / 2, BC.pageHeight() / 2);
              BC.pushMatrix()
                BC.rotate360(i);
                BC.translate(80, 0);
                BC.rect(-10, -10, 20, 20);
              BC.popMatrix();
            BC.popMatrix();
          }
        BC.finish();
        `.replace(/\n        /g, '\n');
    
    myCodeMirror = new EditorView({ doc: "", extensions: cmExtensions });
    document.getElementById("contentJavaScript").append(myCodeMirror.dom);
    const lang = confirmLang(params.get("lang"));
    document.querySelectorAll(".i18n").forEach(elm => {
       elm.innerHTML = replaceI18nElement(elm.getAttribute("id"), lang);
    });

    const clean = params.get("clean");

    if (clean != null && (clean.toLowerCase() == "true"
                          || clean.toLowerCase() == "yes")) {
        myCodeMirror.setState(EditorState.create({ doc: initCode, extensions: cmExtensions }));
    } else {
        window.setTimeout(function () {
              const url = window.location.href.split('#')[0];
              if ('localStorage' in window) {
                const memo = window.localStorage[url];
                if (memo) {
                  myCodeMirror.setState(EditorState.create({ doc: memo, extensions: cmExtensions }));
          	  return;
                    // memo が空だったら続行する
                }
              }
              const jsUrl = params.get("url");
              if (jsUrl) {
                fetch(jsUrl, {})
                  .then(response => response.text())
                  .then(data => {
                    myCodeMirror.setState(EditorState.create({ doc: data, extensions: cmExtensions}));
                  });
              } else {
                myCodeMirror.setState(EditorState.create({ doc: initCode, extensions: cmExtensions }));
              }
        }, 0);
    }

    document.getElementById("intro").addEventListener('click', ev => {
      ev.preventDefault();
      const tour = introJs();
      tour.setOption('tooltipPosition', 'auto');
      tour.start();
    });

    function printSVG() {
      var svgText = draw.svg();
      var blob    = new Blob([svgText], { type: 'image/svg+xml' });
      var sub     = window.open(URL.createObjectURL(blob), 'SVG subwindow');
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
      const code = myCodeMirror.state.doc.toString();
      const blob = new Blob([code], { type: 'application/javascript' });
      document.getElementById("saveButton").href = window.URL.createObjectURL(blob);
    });

    document.getElementById("openButton").addEventListener('click', ev =>  {
      ev.preventDefault();
      document.getElementById("openButtonAux").click();
      return false;
    });

    document.getElementById("openButtonAux").addEventListener('change', evt => {
      evt.preventDefault();
      const f = evt.target.files[0];
      const reader = new FileReader();

      reader.onload = function(e) {
        const code = e.target.result;
        myCodeMirror.setState(EditorState.create({ doc: code, extensions: cmExtensions }));
        if (!document.getElementById('tabJavaScript').classList.contains('tabon')) {
          renderSVG();
        }
      };
      reader.readAsText(f);
    });

    document.getElementById("resetButton").addEventListener('click', ev => {
      ev.preventDefault();
      const q = window.confirm("編集したプログラムを捨てて、最初の内容に戻します。よろしいですか？");
      if (!q) return;
      const jsUrl = params.get("url");
      if (jsUrl) {
        fetch(jsUrl, {})
          .then(response => response.text())
          .then(data => {
            myCodeMirror.setState(EditorState.create({ doc: data, extensions: cmExtensions }));
          });
      } else {
        myCodeMirror.setState(EditorState.create({ doc: initCode, extensions: cmExtensions }));
      }
    });

    const uploadUrl = params.get("upload");
    // uploadUrl は name と data というパラメーターをとると仮定する
    if (uploadUrl == null || uploadUrl == "") {
      document.getElementById("uploadSourceButton").style.display = 'none';
      document.getElementById("uploadSvgButton").style.display = 'none';
    } else {
      document.getElementById("uploadSourceButton").addEventListener('click', ev =>  {
        ev.preventDefault();
       	const sourceText = myCodeMirror.state.doc.toString();
        fetch(uploadUrl, {
            method: 'post'
//          , headers: { 'Content-Type': 'application/json' }
//          , body: JSON.stringify({ name: "myGraphics.js", data: sourceText })
            , headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            , body: new URLSearchParams({ name: "myGraphics.js", data: sourceText })
        }).then(response => response.text())
          .then(message => {
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
            , headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            , body: new URLSearchParams({ name: "myGraphics.svg", data: svgText })
        }).then(response => response.text())
          .then(message => {
          console.log("success", message);
          alert(message); // TODO alert ではなくて Chrome でもコピペできるようにする
        }).catch(reason => {
          console.log("fail", reason);
          alert(reason);
        });
      });
    }
/**/
});

