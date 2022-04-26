var BC = BookCover;
BC.start(draw);
BC.pageFrame();
  BC.rulers();
  BC.strokeOpacity(0.5);
  BC.strokeWeight(0.75);
  var xmargin = 20;
  var ymargin = 30;
  var height = BC.pageHeight() - ymargin * 2;
  var width = BC.pageWidth() - xmargin * 2;
  var num = 60;
  var xspan = height / num;
  var yspan = width / num;

  for (var i = 0; i <= num; i++) {
    BC.stroke(BC.rotateH360(0xff0000, i * 6));
    x = yspan * i;
    y = xspan * i;
    BC.line(xmargin,y + ymargin,x + xmargin,height + ymargin);
    BC.line(xmargin,(height - y) + ymargin,x + xmargin,ymargin);
    BC.line((width - x) + xmargin,height + ymargin,width + xmargin,y + ymargin);
    BC.line(x + xmargin,ymargin,width + xmargin,y + ymargin);
  }
  BC.stroke(null);
  BC.fill(0xff6600);
  BC.strokeWeight(0.5);
  BC.textFont("Times New Roman", 9);
  BC.text((['Kagawa University',"\n",'YYYY'].join('')), (width / 8 + xmargin), (height / 2.1 + xmargin));
BC.finish();
