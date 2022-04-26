var BC = BookCover;
BC.start(draw);
BC.pageFrame();
  BC.rulers();
  BC.stroke(BC.addS100L(0x3366ff, -50));
  BC.strokeOpacity(0.5);
  BC.fill(BC.addS100L(0x3366ff, -50));
  BC.fillOpacity(0.5);
  BC.rect(20, 30, BC.pageWidth() - 40, BC.pageHeight() - 60);
  for (var count3 = 0; count3 < 35; count3++) {
    BC.stroke(0xffffff);
    BC.strokeWeight(BC.randomInRange(0.2, 1));
    BC.strokeOpacity(BC.randomInRange(0.5, 1));
    BC.go(BC.randomInRange(30, BC.pageWidth() - 30), BC.randomInRange(40, BC.pageHeight() - 40));
    for (var count2 = 0; count2 < 6; count2++) {
      var i = 3;
      for (var count = 0; count < 3; count++) {
        BC.penDown();
        BC.forward(i);
        BC.turn(60);
        BC.forward(i);
        BC.penUp();
        BC.turn(180);
        BC.forward(i);
        BC.penDown();
        BC.turn(60);
        BC.forward(i);
        BC.penUp();
        BC.turn(180);
        BC.forward(i);
        BC.turn(240);
      }
      BC.penDown();
      BC.forward(i);
      BC.turn(180);
      BC.penUp();
      BC.forward(i * 4);
      BC.turn(240);
    }
  }
  BC.stroke(0x3333ff);
  BC.fill(0x3366ff);
  BC.fillOpacity(1);
  BC.strokeOpacity(1);
  BC.textFont("Times New Roman", 10);
  BC.text((['Kagawa University',"\n",'2017'].join('')), 170, 140);
BC.finish();

