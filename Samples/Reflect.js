function textRandomLetter(text) {
  var x = Math.floor(Math.random() * BC.countSymbols(text));
  return BC.fixedCharAt(text, x);
}


var BC = BookCover;
BC.start(draw);
BC.pageFrame();
  BC.stroke(null);
  BC.fillOpacity(0.7);
  BC.textFont("Segoe UI Symbol", 8);
  var x = BC.pageWidth() / 2;
  var y = BC.pageHeight() / 2;
  var dx = 16;
  var dy = 10;
  var slope = 0;
  var left = 20;
  var right = BC.pageWidth() - 30;
  var up = 40;
  var down = BC.pageHeight() - 50;
  for (var i = 1; i <= 160; i++) {
    BC.fill(BC.hsl360(i * 8, 100, 50));
    BC.text((textRandomLetter('🍅🍆🍇🍊🍍🍎🍐🍑')), x, y);
    x = x + dx;
    y = y + dy;
    if (x < left) {
      dx = dx * -1;
      x = 2 * left - x;
      slope = Math.atan2(dy - 0, dx - 0) * 180 / Math.PI;
    } else if (x > right) {
      dx = dx * -1;
      x = 2 * right - x;
      slope = Math.atan2(dy - 0, dx - 0) * 180 / Math.PI;
    }
    if (y < up) {
      dy = dy * -1;
      y = 2 * up - y;
      slope = Math.atan2(dy - 0, dx - 0) * 180 / Math.PI;
    } else if (y > down) {
      dy = dy * -1;
      y = 2 * down - y;
      slope = Math.atan2(dy - 0, dx - 0) * 180 / Math.PI;
    }
  }
  BC.fill(0x3333ff);
  BC.textFont("Times New Roman", 10);
  BC.text((['Kagawa University',"\n",'2017'].join('')), 180, 140);
BC.finish();
