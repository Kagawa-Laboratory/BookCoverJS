var BC = BookCover;
var i;
BC.start(draw);
BC.pageFrame();
  BC.fill(null);
  BC.strokeWeight(2);
  BC.translate(147, 105);
  for (i = 5; i <= 85; i += 0.4) {
    BC.stroke(BC.rotateH360(0xff0000, 15 * i));
    BC.ellipse(i * Math.cos((i * 20) / 180 * Math.PI), i * Math.sin((i * 20) / 180 * Math.PI), 5, 5);
  }
BC.finish();