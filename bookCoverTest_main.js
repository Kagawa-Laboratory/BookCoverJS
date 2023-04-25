import {SVG} from "@svgdotjs/svg.js";
import {BookCover} from "./BookCoverJS/BookCover.js";
import {hsbGrad} from "./BookCoverJS/HSBGrad.js";
import {randTest} from "./BookCoverJS/RandTest.js";


window.addEventListener('load', () => {
  const draw = SVG().addTo('#drawing').size('294mm', '210mm');
  if (Math.random() < 0.5) {  
      hsbGrad(draw);
  } else {  
      randTest(draw);
  } 
  document.getElementById("click").addEventListener('click', ev => {
    ev.preventDefault();  
    const svgText = draw.svg();
    const blob = new Blob([svgText], { type: "image/svg+xml" });
    const sub = window.open(URL.createObjectURL(blob), "SVG subwindow");
  });
});
