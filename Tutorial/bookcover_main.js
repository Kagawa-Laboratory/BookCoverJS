import Blockly from 'blockly';
import "../myblocks.js";
import "./myscript.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = [ { div: 'blocklyDiv1', xml: 'BookCover/Start.xml' }
                , { div: 'blocklyDiv2', xml: 'BookCover/Sample0.xml' }
                , { div: 'blocklyDiv3', xml: 'BookCover/Sample1.xml' }
                , { div: 'blocklyDiv4', xml: 'BookCover/Sample2.xml' }
                , { div: 'blocklyDiv5', xml: 'BookCover/SimpleRand.xml' }
                , { div: 'blocklyDiv6', xml: 'BookCover/RandomChar.xml' }
                , { div: 'blocklyDiv7', xml: 'BookCover/Cond.xml' }
                , { div: 'blocklyDiv8', xml: 'BookCover/NestedLoop.xml' }
                , { div: 'blocklyDiv9', xml: 'BookCover/Polygons.xml' }
                , { div: 'blocklyDiv10', xml: 'BookCover/SimpleTurtle.xml' }
                , { div: 'iDiv', xml: 'Common/I.xml' }
                , { div: 'loopDiv', xml: 'Common/Loop.xml' }
                , { div: 'condDiv', xml: 'Common/IfElse.xml' }
                , { div: 'imanoiroDiv', xml: 'Common/ImanoIro.xml' }
                ];
  var workspaces = [];
  for (let i = 0; i < params.length; i++) {
    	const data = params[i]; 
     	const workspace = Blockly.inject(data.div,{ readOnly: true, zoom: { startScale: 0.75 }  });
     	fetch(data.xml)
           .then(response => response.text())
           .then(txt => { 
     	     const xml = Blockly.Xml.textToDom(txt);
     	     Blockly.Xml.domToWorkspace(xml, workspace);
     	   });
     	workspaces.push(workspace);
  }
});