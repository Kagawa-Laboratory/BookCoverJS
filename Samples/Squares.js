var BC = BookCover;
BC.start(draw);
BC.pageFrame();
  BC.guideBars(0.5);
  BC.fillOpacity(1);
  var width = 10;
  var height = 10;
  for (var y = 30; y + height <= 180; y += height) {
    for (var x = 20; x + width <= 280; x += width) {
      if (BC.randomInRange(0, 1) <= 0.7) {
        BC.fill(BC.hsl360(BC.randomInRange(0, 345), 100, 50));
        BC.rect(x, y, width, height);
      }
    }
  }
BC.finish();
