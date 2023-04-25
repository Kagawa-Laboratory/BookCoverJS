import {BookCover} from "./BookCover.js";

export function hsbGrad(draw) {
    var BC = BookCover;
    var x0 = 36, y0 = 24;
    BC.start(draw);
    BC.rulers();

    BC.pushMatrix();
    BC.fillOpacity(1);
    BC.fill(BC.rgb255(40, 80, 40));
    BC.stroke(BC.rgb255(40, 80, 40));
    BC.strokeWeight(0);
    BC.textFont("Verdana", 5);
    BC.rotate(Math.PI/2);
    BC.text(String.fromCharCode(0x2600, 0x2601, 0x2602) + " Faculty of Engineering, Kagawa University", 35, -10);
    BC.popMatrix();
    BC.textFont("Verdana", 8);
    BC.stroke(BC.rgb255(128, 128, 128));
    for (var i = 0; i < 25; i++) {
        for (var j = 1; j < 17; j++) {
            BC.fill(BC.hsl360(i * 15, 50 + j * 50 / 14, 50));
            BC.stroke(BC.hsl360(i * 15, 50 + j * 50 / 14, 50));
//            BC.ellipse(x0 + i * 9, y0 + j * 9, 8, 8);
            BC.text(String.fromCharCode(0x2603), x0 + i * 9, y0 + j * 9);
//            BC.text("%d,%d", x0 + i * 9, y0 + j * 9, i % 10, j % 10); 
        }
    }

    BC.finish();
}
