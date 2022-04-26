var BC = BookCover;
BC.start(draw);
BC.pageFrame();
  BC.stroke(null);
  BC.textFont("Segoe UI Symbol", 10);
  var color = 0xff0000;
  var x = 240;
  var y = 20;
  for (var count = 0; count < 20; count++) {
    BC.fill(color);
    BC.text('🚂🚃🚃🚃🚃', x, y);
    color = BC.rotateH360(color, 29);
    x = x - 12;
    y = y + 8;
  }
BC.finish();
