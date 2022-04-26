var BC = BookCover;
BC.start(draw);
BC.pageFrame();
  BC.stroke([0, 0, 0]);
  BC.textFont("HGRSMP", 8);
  var i;
  for (i = 1; i <= 20; i++) {
    BC.fill(BC.rotateH360(0xff0000, 18 * i));
    BC.text('おはようございます。こんにちは。こんばんは。', 40, (7.5 * i + 20));
  }
BC.finish();
