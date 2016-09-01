function randTest(draw) {
    var BC = BookCover;
    BC.start(draw);
    BC.fill(BC.bw1(0.8));
    BC.guideBars(3);
  
    BC.noStroke();
    BC.fillOpacity(0.3);
  
    for(var i = 0; i < 383; i++) {
        var x = BC.randomInRange(40, 257);
        var y = BC.randomInRange(28, 172);
        var h = BC.randomInRange(0, 1);
        BC.fill(BC.hsb1(h, 1, 1));
        BC.ellipse(x, y, 10, 10);
    }
  
    BC.finish();
}
