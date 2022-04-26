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
  for (var x = 30; x <= 260; x += 10) {
    for (var y = 20; y <= 170; y += 10) {
      var slope = Math.atan2(y - 105, x - 145) * 180 / Math.PI;
      var dist = Math.sqrt((x - 145) * (x - 145) + (y - 105) * (y - 105));
      BC.fill(BC.hsl360(slope * 3 + dist / 1, 100, 50));
      BC.text((textRandomLetter('🍅🍆🍇🍊🍍🍎🍐🍑')), x, y);
    }
  }
BC.finish();
  