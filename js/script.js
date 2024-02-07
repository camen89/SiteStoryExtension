//コンテンツ全体のサイズを取得する
let contentWidth = document.body.scrollWidth;
let contentHeight = document.body.scrollHeight;

//ウィンドウの表示領域のみ
let width = window.innerWidth;
let height = window.innerHeight;

let dR1NumDegree = 0;
let bgColor = [242, 245, 247];
let bgColor2 = [0, 0, 0, 30];

function setup(){
    let canvas = createCanvas(contentWidth, contentHeight);
    //background(bgColor2);
    canvas.position(0, 0);
    canvas.style('z-index', '-1'); //z-index -1 から 1に変更
    console.log("p5:setup");
    frameRate(30);

    //2レイヤー
    // pg1 = createGraphics(contentWidth, contentHeight);
    // pg2 = createGraphics(contentWidth, contentHeight);
}

function draw(){
    background(bgColor2);
    //putText();
    drawRect1();
    drawRect2();
    pgShape();
}

function pgShape(){
    let x1 = 0; let y1 = contentHeight * 2 / 3;
    let x2 = 0; let y2 = contentHeight * 2 / 3 + 10;
    let x3 = contentWidth / 2 + 10; let y3 = 0;
    let x4 = contentWidth / 2; let y4 = 0;
    fill(255, 0, 0);
    noStroke();
    //quad(x1, y1, x2, y2, x3, y3, x4, y4);
    rect(0, contentHeight * 2 / 3, width, 10);
    rect(contentWidth * 3 / 4, 0, 20, height);
    console.log("putShape");
}

function putText(){
    fill(255);
    noStroke();
    textSize(20);
    text(contentHeight, mouseX, mouseY);
}

function drawRect1(){// 横
    let dR1Num = abs(2.5 * cos(dR1NumDegree));
    // fill(0, 255, 115, 30);
    // stroke(0, 255, 115, 50);
    fill(151, 182, 230, 30);
    stroke(151, 182, 230, 30);
    rect(0, mouseY - height / 20, width, height / 30);
    rect(0, mouseY - height / 20 + height / 30, height / 30, height / 10);
    rect(0, mouseY + height / 20 + height / 30, width, height / 30);
    rect(width - height / 30, mouseY  - height / 20 + height / 30, height / 30, height / 10);
    dR1NumDegree += TWO_PI / 300;
    console.log('sin', dR1Num, width, height, mouseX, mouseY);
}

function drawRect2(){// 縦
    let dR1Num = abs(2.5 * sin(dR1NumDegree));
    // fill(0, 255, 115, 30);
    // stroke(0, 255, 115, 50); 
    fill(151, 182, 230, 30);
    stroke(151, 182, 230, 30);
    rect(mouseX - height / 20 - height / 30, 0, height / 30,  height);
    rect(mouseX - height / 20, 0, height / 10, height / 30);
    rect(mouseX + height / 20, 0, height / 30,  height);
    rect(mouseX - height / 20, height - height / 30, height / 10, height / 30);
    dR1NumDegree += TWO_PI / 800;
}

//コンテンツのサイズを更新する関数(仮)
function updateContentSize(){
    //コンテンツの新しい幅と高さを取得
    let newContentWidth = document.body.scrollWidth;
    let newContentHeight = document.body.scrollHeight;

    if(newContentWidth !== contentWidth || newContentHeight !== contentHeight){
        contentWidth = newContentWidth;
        contentHeight = newContentHeight;

        resizeCanvas(contentWidth, contentHeight);
        background(bgColor2);
        draw();
    }
}

function windowResized(){
    width = window.innerWidth;
    height = window.innerHeight;
    resizeCanvas(width, height);
    background(bgColor2);
    updateContentSize(); //コンテンツサイズの反映(仮)
    draw();
}

//ページがスクロールされたときにコンテンツのサイズを更新(仮)
window.addEventListener('scroll', function(){
    updateContentSize();
})


