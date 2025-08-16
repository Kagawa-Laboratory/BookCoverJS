// 相対 URL を絶対 URL に
function rewriteAttr(selector, attr) {
    for (let obj of document.querySelectorAll(selector)) {
        let h = obj.getAttribute(attr);
        if (!h || h.startsWith('http://') || h.startsWith('https://') || h.startsWith('//')) {
            continue; 
        }
        h = new URL(h, location.href);
        obj.setAttribute(attr, h);
    }
}

function findNext(elem, selector) {
  elem = elem.nextElementSibling;
  while (elem != null && !elem.matches(selector)) {
    elem = elem.nextElementSibling;
  }
  return elem;
}

function setCodeMirrorStyle(editor) {
    editor.style.border      = '1px solid #eee';
    editor.style.height      = 'auto';
    editor.style.lineHeight  = 'normal';        // cancel p's line-height
    // editor.style.breakInside = 'avoid';
}

var mainMethodPattern = /(?:public\s+static|static\s+public)\s+void\s+main\((String\s+[a-zA-Z]\w*\[\]|String\[\]\s+[a-zA-Z]\w*)\)\s*\{(?:[^{}]|\{[^}]*\})*\}/g;

function replaceMain(str) {
    return str.replace(mainMethodPattern, "public static void main($1) { /* 省略 */ }");
}

function createCodeMirrorFromTextArea(ta, m, options) {
    if (options == null) options = ({});
    ta.style.width      = '100%';
    ta.style.lineHeight = 'normal';        // cancel p's line-height
    ta.style.height = (ta.scrollHeight 
                         + parseInt(window.getComputedStyle(ta).borderTopWidth.replace(/px/g, '')) 
                         + parseInt(window.getComputedStyle(ta).borderBottomWidth.replace(/px/g, '')))
                         + 'px';
    if (ta.value.endsWith('\n')) 
      ta.value = ta.value.substring(0, ta.value.length - 1)
    if (ta.value.endsWith('\r')) 
      ta.value = ta.value.substring(0, ta.value.length - 1)
    let editor = CodeMirror.fromTextArea(ta, {
      ...options
      , lineNumbers:    true
      , readOnly:       true
      , mode:           m
      , lineWrapping:   true
      , viewportMargin: Infinity  // for auto resize see https://codemirror.net/demo/resize.html
    });
    let wrapper = editor.getWrapperElement();
    setCodeMirrorStyle(wrapper);
    editor.refresh();
    return editor;
}

function editorHighlightPattern(doc, pattern, replace) {
    let n = doc.lineCount();
    for (let i = 0; i < n; i++) {
        let line = doc.getLine(i);
        let founds = line.matchAll(pattern);
        for (found of founds) {
            let replacement = replace(found);
            let len  = found[0].length;
            let from = found.index;
            // Todo: 合っている?
            doc.markText({ line: i, ch: from }, { line: i, ch: (from + len) }, ({replacedWith: replacement}));
        }
    }
}

async function processProgLink(link, cl, mode, from, to, modifier) {
    if (!from && link.dataset.lineFrom) {
        from = parseInt(link.dataset.lineFrom);
    }
    if (!to && link.dataset.lineTo) {
        to   = parseInt(link.dataset.lineTo);
    } 
    let parent   = link.parentNode;
    let response = await fetch(link.getAttribute('href'));
    if (! response.ok) return;     
    let text = await response.text();
    let options = ({});
    if (from || to) {
       let lines = text.split('\n');
       if (!from) { 
           from = 0;
       } else {
           options.firstLineNumber = from + 1;
       }
       if (to) {
           lines = lines.slice(from, to); 
       } else {
           lines = lines.slice(from);
       }
       text = lines.join('\n');
    }
    if (modifier) {
        text = modifier(text);
    }
    let ta = document.createElement('textarea');
    ta.classList.add(cl);
    ta.innerHTML = text;
    parent.insertBefore(ta, link.nextSibling);
    return createCodeMirrorFromTextArea(ta, mode, options);
}

async function processCLink(link, from, to, modifier) {
    return await processProgLink(link, 'myCpp', 'text/x-c++src', from, to, modifier);
}

async function processJavaLink(ja, foldMain, from, to) {
    return await processProgLink(ja, 'myJava', 'text/x-java', from, to, foldMain ? replaceMain : null);
}

function processMarubatsu(el) {
  el.style.border = 'thin solid gray';
  el.style.fontFamily = 'monospace';
  el.style.fontSize = '150%';  
  el.style.color = 'blue';
  el.style.backgroundColor = 'lightgray';
  el.innerText = '　';
  el.addEventListener('click', ev => {
      let t = el.innerText;
      if (t.charAt(0) == '　') {
	  el.innerText = '○';
      } else if (t.charAt(0) == '○') {
	  el.innerText = '△';
      } else if (t.charAt(0) == '△') {
	  el.innerText = '×';
      } else {
          el.innerText = '　';
      }
  });
}

/*
async function processJavaLink(ja, foldMain, from, to) {
    let parent   = ja.parentNode;
    let response = await fetch(ja.getAttribute('href'));
    if (! response.ok) return;     
    let text = await response.text();
    let options = ({});
    if (from || to) {
       let lines = text.split('\n');
       if (!from) { 
           from = 0;
       } else {
           options.firstLineNumber = from + 1;
       }
       if (to) {
           lines = lines.slice(from, to); 
       } else {
           lines = lines.slice(from);
       }
       text = lines.join('\n');
    }
    if (foldMain) {
        text = replaceMain(text);
    }
    // let editor = CodeMirror(elt => {
    //     parent.insertBefore(elt, ja.nextSibling);
    //     console.log('elt=', elt);
    //     setCodeMirrorStyle(elt);
    //   }, {
    //     lineNumbers:   true
    //   , value:         text
    //   , readOnly:      true
    //   , mode:          'text/x-java'
    //   , viewportMargin: Infinity  // for auto resize see https://codemirror.net/demo/resize.html
    // });
    let ta = document.createElement('textarea');
    ta.classList.add('myJava');
    ta.innerHTML = text;
    parent.insertBefore(ta, ja.nextSibling);
    createCodeMirrorFromTextArea(ta, 'text/x-java', options);
}
*/

function replaceBlank(editor) {
    editorHighlightPattern(editor, /___(([^_]|_[^_]|__[^_])*)___/g, found => {
        let len = found[0].length;
        let replacement = found[1];
        let sp = document.createElement("span");
        sp.classList.add("myblank3");
//        sp.style.backgroundColor = "whitesmoke";
//        sp.style.color = "whitesmoke";
        var rep = document.querySelector('.myblank');
        if (rep != null) {
            var styles = window.getComputedStyle(rep);
            if (styles.getPropertyValue('visibility') != 'hidden') {
                sp.style.color = "blue";
            }
	}	
        sp.innerHTML = replacement;
        return sp;
    }); 
}

document.addEventListener('DOMContentLoaded', function () {
    // 最終更新時刻を表示
    let lastModified = new Date(document.lastModified).toLocaleString();
    let elem = document.getElementById('lastModified');
    if (elem) {
        elem.innerHTML = lastModified + " 更新";
    }

    for (let ta of document.querySelectorAll('textarea.myJava')) {
        createCodeMirrorFromTextArea(ta, 'text/x-java');
    }

    for (let ta of document.querySelectorAll('textarea.myJava1')) {
        let editor = createCodeMirrorFromTextArea(ta, 'text/x-java');
        editorHighlightPattern(editor, /_{4,}/g, function (found) {
            let len = found[0].length; 
            let replacement = " ".repeat(len);
            let sp = document.createElement("span");
            sp.style.textDecoration = "underline blue";
            sp.innerHTML = replacement;
            return sp;
        });
    }

    for (let ta of document.querySelectorAll('textarea.myJava2')) {
        let editor = createCodeMirrorFromTextArea(ta, 'text/x-java');
        editorHighlightPattern(editor, /\[\[\[(\d+)(_*)\]\]\]/g, function (found) {
            let num  = found[1];
            let len1 = num.length;
            let len2 = found[0].length;
            let roman = String.fromCharCode(0x216F + parseInt(num));
            let sp = document.createElement("span");
            sp.style.border = "thin solid blue";
            let len = len2 - 3;
            sp.innerHTML = " ".repeat(len / 2) + "<span style='font-family: sans-serif; width: 1.5em;'>(" + roman + ")</span>" + " ".repeat(len - len / 2);
            return sp;
        });
    }

    for (let ta of document.querySelectorAll('textarea.myJava3')) {
        let editor = createCodeMirrorFromTextArea(ta, 'text/x-java');
        editorHighlightPattern(editor, /\[\[\[(\d+)(_*)\]\]\]/g, function (found) {
            let num  = found[1];
            let len1 = num.length;
            let len2 = found[0].length;
            let sp = document.createElement("span");
            sp.style.border = "thin solid blue";
            let len = len2 - 3;
            sp.innerHTML = " ".repeat(len / 2) + "(" + num + ")" + " ".repeat(len - len / 2);
            return sp;
        });
    }

    for (let ta of document.querySelectorAll('textarea.python')) {
        createCodeMirrorFromTextArea(ta, 'text/x-python');
    }


    for (let ta of document.querySelectorAll('textarea.myCpp')) {
        createCodeMirrorFromTextArea(ta, 'text/x-c++src');
    }

    for (let ta of document.querySelectorAll('textarea.myCpp1')) {
        let editor = createCodeMirrorFromTextArea(ta, 'text/x-c++src');
        editorHighlightPattern(editor, /_{3,}/g, function (found) {
            let len = found[0].length; 
            let replacement = " ".repeat(len);
            let sp = document.createElement("span");
            sp.style.textDecoration = "underline blue";
            sp.innerHTML = replacement;
            return sp;
        });
    }

    for (let ta of document.querySelectorAll('textarea.myCpp2')) {
        let editor = createCodeMirrorFromTextArea(ta, 'text/x-c++src');
        editorHighlightPattern(editor, /\-\-\-([^\-]+)\-\-\-/g, function (found) {
            let content  = found[1];
            let sp = document.createElement("span");
            sp.style.textDecoration = "line-through solid black";
            sp.innerHTML = content;
            return sp;
        });
        editorHighlightPattern(editor, /\[\|\[([^\]]+)\]\|\]/g, function (found) {
            let content  = found[1];
            let sp = document.createElement("span");
            sp.style.border = "solid thin lightblue";
            sp.innerHTML = content;
            return sp;
        });
        editorHighlightPattern(editor, /\[\[\[(\d+)(_*)\]\]\]/g, function (found) {
            let num  = found[1];
            let len1 = num.length;
            let len2 = found[0].length;
            let roman = String.fromCharCode(0x216F + parseInt(num));
            let sp = document.createElement("span");
            sp.style.fontFamily = "serif"
            sp.style.border     = "thin solid blue";
            let len = len2 - 3;
            sp.innerHTML = " ".repeat(len / 2) + "(" + roman +")" + " ".repeat(len - len / 2);
            return sp;
        });
        editorHighlightPattern(editor, /<<<(\d+)(_*)>>>/g, function (found) {
            let num  = found[1];
            let len1 = num.length;
            let len2 = found[0].length;
	    console.log(len2);
            let roman = String.fromCharCode(0x216F + parseInt(num));
            let sp = document.createElement("div");
            sp.style.textAlign  ="center" 
            sp.style.fontFamily = "serif"
            sp.style.border     = "thin solid blue";
            let len = len2 - 6;
            sp.innerHTML = "<br />".repeat(Math.floor(len / 2)) + "(" + roman +")" + "<br />".repeat(len - Math.floor(len / 2));
            return sp;
        });
    }

    for (let ta of document.querySelectorAll('textarea.myPython')) {
        createCodeMirrorFromTextArea(ta, 'text/x-python');
    }

    for (let ta of document.querySelectorAll('textarea.myHTML')) {
        createCodeMirrorFromTextArea(ta, 'text/html');
    }

    for (let ta of document.querySelectorAll('textarea.myXML')) {
        createCodeMirrorFromTextArea(ta, 'text/xml');
    }

    for (let ta of document.querySelectorAll('textarea.scala')) {
        createCodeMirrorFromTextArea(ta, 'text/x-scala');
    }

    for (let ta of document.querySelectorAll('textarea.haskell')) {
        let editor = createCodeMirrorFromTextArea(ta, 'text/x-haskell');
        editorHighlightPattern(editor, /_{4,}/g, function (found) {
            let len = found[0].length; 
            let replacement = " ".repeat(len);
            let sp = document.createElement("span");
            sp.style.textDecoration = "underline blue";
            sp.innerHTML = replacement;
            return sp;
        });
        replaceBlank(editor);
    }

    for (let ta of document.querySelectorAll('textarea.oolong')) {
        createCodeMirrorFromTextArea(ta, 'text/x-oolong');
    }

    for (let ta of document.querySelectorAll('textarea.util')) {
        let editor = createCodeMirrorFromTextArea(ta, 'text/plain');
        editorHighlightPattern(editor, /_{4,}/g, function (found) {
            let len = found[0].length; 
            let replacement = " ".repeat(len);
            let sp = document.createElement("span");
            sp.style.textDecoration = "underline blue";
            sp.innerHTML = replacement;
            return sp;
        });
    }

    for (let ta of document.querySelectorAll('textarea.myPlainText')) {
       	if (ta.value.endsWith('\n')) 
       	  ta.value = ta.value.substring(0, ta.value.length - 1)
       	if (ta.value.endsWith('\r')) 
       	  ta.value = ta.value.substring(0, ta.value.length - 1)
        ta.style.width = '100%';
        ta.style.lineHeight = 'normal';
        ta.style.height = (ta.scrollHeight 
            + parseInt(window.getComputedStyle(ta).borderTopWidth.replace(/px/g, '')) 
            + parseInt(window.getComputedStyle(ta).borderBottomWidth.replace(/px/g, '')))
            + 'px';
        createCodeMirrorFromTextArea(ta, 'text/plain'); 	
    }
    
    for (let ta of document.querySelectorAll('textarea.myPlainText1')) {
        let editor = createCodeMirrorFromTextArea(ta, 'text/plain');
        editorHighlightPattern(editor, /_{4,}/g, function (found) {
            let len = found[0].length; 
            let replacement = " ".repeat(len);
            let sp = document.createElement("span");
            sp.style.textDecoration = "underline blue";
            sp.innerHTML = replacement;
            return sp;
        });
        replaceBlank(editor);
    }

    for (let ta of document.querySelectorAll('textarea.myJavaScript')) {
        let editor = createCodeMirrorFromTextArea(ta, 'text/javascript');
        editorHighlightPattern(editor, /_{4,}/g, function (found) {
            let len = found[0].length; 
            let replacement = " ".repeat(len);
            let sp = document.createElement("span");
            sp.style.textDecoration = "underline blue";
            sp.innerHTML = replacement;
            return sp;
        });
        replaceBlank(editor);
    }

    for (let ta of document.querySelectorAll('textarea.myProlog')) {
        createCodeMirrorFromTextArea(ta, 'text/x-prolog');
    }

    for (let ta of document.querySelectorAll('textarea.scheme')) {
        createCodeMirrorFromTextArea(ta, 'text/x-scheme');
    }

    for (let ta of document.querySelectorAll('textarea.scala')) {
        createCodeMirrorFromTextArea(ta, 'text/x-scala');
    }

    for (let ta of document.querySelectorAll('textarea.kotlin')) {
        createCodeMirrorFromTextArea(ta, 'text/x-kotlin');
    }

    // for (let editor of document.querySelectorAll('.CodeMirror')) {
    //     setCodeMirrorStyle(editor);
    // }

    for (let ja of document.querySelectorAll('a.javalink0')) {
        processJavaLink(ja, false);
    }

    for (let ja of document.querySelectorAll('a.javalink')) {
        processJavaLink(ja, true);
    }

    for (let link of document.querySelectorAll('a.kotlinlink')) {
        processProgLink(link, 'myKotlin', 'text/x-kotlin');
    }

    for (let link of document.querySelectorAll('a.htmllink')) {
        processProgLink(link, 'myHTML', 'text/html');
    }

    for (let link of document.querySelectorAll('a.jslink')) {
        processProgLink(link, 'myJavaScript', 'text/javascript');
    }

    for (let link of document.querySelectorAll('a.jsplink')) {
        processProgLink(link, 'myJSP', 'application/x-jsp');
    }

    for (let link of document.querySelectorAll('a.clink')) {
        processCLink(link);
    }

    for (let link of document.querySelectorAll('a.bisonlink')) {
        processProgLink(link, 'myBison', 'text/x-bison');
    }

    for (let link of document.querySelectorAll('a.flexlink')) {
        processProgLink(link, 'myFlex', 'text/x-flex');
    }
    
    for (let blank of document.querySelectorAll('.myblank')) {
        let insert = document.createElement('span');
        if (!blank.classList.contains('noborder')) {
           insert.classList.add('arroundmyblank');
           blank.after(insert);
           insert.appendChild(document.createTextNode(' '));
           insert.appendChild(blank);
           insert.appendChild(document.createTextNode(' '));
        } else {
           insert.classList.add('arroundmyblanknb');
           blank.after(insert);
           insert.appendChild(blank);
        }
        insert.addEventListener('click', function () {
            blank.classList.toggle('myblank');
        });
    }

    for (let blank of document.querySelectorAll('.myblank3')) {
      	blank.addEventListener('click', ev => {
      	    if (ev.target.style.color == "whitesmoke") {
      	        ev.target.style.color = "blue";
      	    } else {
      	        ev.target.style.color = "whitesmoke";
      	    }
      	});
    }

    for (let thisclass of document.querySelectorAll('.thisclass')) {
        thisclass.insertAdjacentHTML('beforeend', '本演習');
    }

    for (let thisclass of document.querySelectorAll('.ename')) {
        thisclass.insertAdjacentHTML('beforeend', 'OOPL');
    }

    for (let el of document.querySelectorAll('.marubatsu')) {
	processMarubatsu(el);
    }
     

    // CSS Text Module Level 3, Section 4.1.2 
    // https://drafts.csswg.org/css-text-3/#line-break-transform
    // ただし、ASCII 以外はすべて、日本語とみなしている。
    var pars = document.querySelectorAll("p");
    for (var p of pars) {
        for (var n of p.childNodes) {
            if (n.nodeType == Node.TEXT_NODE) {
                n.nodeValue = n.nodeValue.replace(/([^\x20-\x7e])\r?\n[ \t]*([^\x20-\x7e])/g, "$1$2");
            }
        }
    }

    // 印刷用ボタン
    let viv = document.getElementById('vivliostyleButton');
    if (viv) {
        viv.addEventListener('click', ev => {
            const vivlioURL = 'http://guppy.eng.kagawa-u.ac.jp/~kagawa/vivliostyle-js-2019.8.101/viewer/vivliostyle-viewer.html';
            for (let ln of document.querySelectorAll('link')) {
                let t = ln.getAttribute('type');
                // CSS ファイルの href を絶対パスに書き換える。
                if (t == 'text/css') {
                    let h = ln.getAttribute('href');
                    if (h.startsWith('http://') || h.startsWith('https://') || h.startsWith('//')) {
                        continue;
                    }
                    h = new URL(h, location.href);
                    ln.setAttribute('href', h);
                }
            }
            // 画像ファイルの src を絶対パスに書き換える。
            rewriteAttr('img', 'src');
            rewriteAttr('object', 'data');

            let elem = document.documentElement.innerHTML;
            let url = vivlioURL + '#x=data:,' + encodeURIComponent(elem);
            window.open(url);
        })
    };
});
