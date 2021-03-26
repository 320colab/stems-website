// https://codepen.io/kellyex/pen/jVBJVy

var myWidth;
var myHeight;

var move = 0.002;			// 地形の見送り速度
var h = 200;          // 最大・最小標高の設定
var smt = 0.05;  // 乱数の滑らか度合いの設定

var cols, rows;       // 行・列
var scl = 16;         // １マスあたりのサイズ
var grand = [];      // 地形ノイズの記憶用
var flying = 0;			// noiseの遷移用
var momentum = 0


function setup() {
    myWidth = windowWidth;
    myHeight = windowHeight;
    myCanvas = createCanvas(myWidth, myHeight, WEBGL);
    myCanvas.parent('background-anim2');
    smooth(1);

    colorMode(RGB, 256);
    cols = int(min(width, height) / scl);
    rows = cols;
    grand = new Array(cols);
    for (var i = 0; i < grand.length; i++) {
        grand[i] = new Array(rows);
    }
}

function NoiseCreate(flx, fly, flz) {
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            grand[x][y] = map(noise(xoff + flx, yoff + fly, flz), 0.0, 1.0, -h, h + 150);
            xoff += smt;
        }
        yoff += smt;
    }
}

function draw() {
    flying -= move;
    momentum += abs(winMouseX - pwinMouseX) * 0.0001;
    NoiseCreate(cos(flying), sin(flying), 0);
    background(0);
    noFill();

    //rotateY(map(mouseY, 0, height, 0, PI/2));
    //rotateX(map(mouseY, 0, height, 0, PI/2));
    //rotateZ(map(mouseX, 0, width, 0, PI/2));
    rotateX(PI / 4);
    rotateZ(PI / 4);

    //fill(255);
    //textSize(28);
    //text(map(mouseY, 0, height, 0, PI/2).toFixed(2) + " " + map(mouseX, 0, width, 0, PI/2).toFixed(2), 20, 20);

    translate(-width / 4, -height / 4);
    for (var y = 0; y < rows - 1; y++) {
        stroke(255);
        strokeWeight(min(grand[1][y], 50) * 0.005);
        beginShape(LINES);
        for (var x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, grand[x][y]);
            vertex(x * scl, (y + 1) * scl, grand[x][y + 1]);
        }
        endShape();
    }
}

function windowResized() {
    myWidth = windowWidth;
    myHeight = windowHeight;
    resizeCanvas(myWidth, myHeight);
}