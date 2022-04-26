var BC = BookCover;
BC.start(draw);
BC.pageFrame();
  var colors = [0xff0000, 0xffff00, 0x33ff33, 0x33ccff, 0x3333ff, 0x6600cc, 0x333333, 0xcc0000, 0xffffff, 0xff6666, 0xff0000, 0xffff00, 0x33ff33, 0x33ccff, 0x3333ff, 0x6600cc, 0x333333, 0xc0c0c0, 0xffffff];
  var ys = [105, 120, 135, 135, 120, 105, 105, 120, 135, 135, 120, 105, 105, 120, 135, 135, 120, 105, 105];
  BC.fill(0xcccccc);
  BC.rect(0, 0, 297, 210);
  BC.rulers();

  for (var x = 1; x <= colors.length; x ++) {
    BC.fill(colors[x - 1]);
    for (var y = 165; y >= ys[x - 1]; y -= 15) {
      BC.rect(-5 + 15 * x, y, 10, 10);
    }
  }
  BC.fill(0x33ffff);
  BC.rect(100, 60, 30, 30);
  BC.fill(0x33cc00);
  BC.rect(170, 40, 20, 20);
  BC.fill(0xff6600);
  BC.ellipse(50, 30, 30, 30);
  BC.fill(0x3333ff);
  BC.triangle(240, 35, 220, 50, 260, 50);
BC.finish();
