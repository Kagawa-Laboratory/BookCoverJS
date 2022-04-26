var BC = BookCover;
BC.start(draw);
BC.pageFrame();
  BC.guideBars(0.5);
  BC.fillOpacity(1);
  var x = 20;
  var y = 30;
  var width = 10;
  var height = 10;
  while (y + height <= 180) {
    while (x + width <= 280) {
      if (BC.randomInRange(0, 1) <= 0.7) {
        BC.fill(BC.hsl360(BC.randomInRange(0, 345), 100, 50));
        BC.rect(x, y, width, height);
      }
      x = x + width;
    }
    x = 20;
    y = y + height;
  }
BC.finish();
