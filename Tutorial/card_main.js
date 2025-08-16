import Blockly from 'blockly';
import "../myblocks.js";
import "./myscript.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = [ { div: 'blocklyDiv1', xml: 'Card/Start.xml' }
                , { div: 'blocklyDiv2', xml: 'Card/Sample0.xml' }
                , { div: 'blocklyDiv3', xml: 'Card/Sample1.xml' }
                , { div: 'blocklyDiv4', xml: 'Card/SimpleRand.xml' }
                , { div: 'blocklyDiv5', xml: 'Card/RandomChar.xml' }
                , { div: 'blocklyDiv6', xml: 'Card/Cond.xml' }
                , { div: 'blocklyDiv7', xml: 'Card/NestedLoop.xml' }
                , { div: 'blocklyDiv9', xml: 'Card/Polygons.xml' }
                , { div: 'counterDiv', xml: 'Common/Counter.xml' }
                , { div: 'loopDiv', xml: 'Common/Loop.xml' }
                , { div: 'condDiv', xml: 'Common/IfElse.xml' }
                , { div: 'imanoiroDiv', xml: 'Common/ImanoIro.xml' }
                ];
  var workspaces = [];
  for (let i = 0; i < params.length; i++) {
        const data = params[i]; 
     	const workspace = Blockly.inject(data.div,{ readOnly: true, zoom: { startScale: 0.75 } });
     	fetch(data.xml)
     	  .then(response => response.text())
          .then(txt => { 
     	    const xml = Blockly.utils.xml.textToDom(txt);
     	    Blockly.Xml.domToWorkspace(xml, workspace);
     	  });
     	workspaces.push(workspace);
  }
});