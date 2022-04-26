function textRandomLetter(text) {
  var x = Math.floor(Math.random() * BC.countSymbols(text));
  return BC.fixedCharAt(text, x);
}

var BC = BookCover;
BC.start(draw);
var max;
  max = 20;
  BC.stroke(null);
  BC.fillOpacity(0.3);
  BC.textFont("Segoe UI Symbol", 10);
  for (var count = 0; count < 128; count++) {
    var size = BC.randomInRange(1, max);
    var x = BC.randomInRange(20 + max / 2, BC.pageWidth() - (20 + max / 2));
    var y = BC.randomInRange(30 + max / 2, BC.pageHeight() - (40 + max / 2));
    BC.fill(BC.hsl360(BC.randomInRange(0, 360), 100, 50));
    BC.text((textRandomLetter('🍅🍆🍇🍊🍍🍎🍐🍑')), x, y);
  }
  BC.fill(0x3333ff);
  BC.textFont("Times New Roman", 10);
  BC.text((['Kagawa University',"\n",'2017'].join('')), 180, 140);
BC.finish();

