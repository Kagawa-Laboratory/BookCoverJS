import {tabs} from "./mytabs.js"
import {writeTable} from "./samples.js"

const cards =  [ /* "Sample1" */
    "HSBGradCard"
  , "RandomEmojiCard"
  , "RandomDot"
  , "StringArt"
  , "SpiralCard"
  , "SquaresCard"
  , "Turtle"
  , "Stripe" 
  , "Rotate"
  , "Translate"
  , "SineCurve" 
  , "Ferns"
  ];

const bookcovers = [ 
    "Gradation" 
//   , "Mesh"
  , "Mesh2"
  , "HSBGrad" 
  , "Reflect"
  , "SuperBall"
  , "RandomEmoji"
  , "Uzu"
  , "Trains"
  , "Stars"
  , "Squares"
  , "TurtleBookCover"
  , "Shapes"
  , "Euclidean" 
  , "Snows"
  , "RandomCircle"
  , "RandomString1"
  , "RandomString2"
  ];

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const lang   = params.get("lang");

//  console.log(lang);  
  const tbl1 = document.getElementById("sticker");
  writeTable(tbl1, cards, 3, true, 2, lang);

  const tbl2 = document.getElementById("bookcover");
  writeTable(tbl2, bookcovers, 3, false, 1, lang);

  tabs(document.getElementById("tabs"), {
      active: 1   // zero-based index of the panel that is active. 
  });
});
