var BC = BookCover;
BC.start(draw);

  BC.fill(0x000000);
  BC.textFont("Segoe UI Symbol", 10);
  var code = 9728;
  for (var i = 0; i <= 24; i++) {
    for (var j = 1; j <= 15; j++) {
      BC.fill(BC.hsb360(i * 15, j * 6.67, 100));
      BC.text((String.fromCodePoint(code)), (36 + i * 9), (18 + j * 10));
      code = code + 1;
      if (code > 10002) {
        code = 9728;
      }
    }
  }
BC.finish();

