var r=10, ysamm=1;
function pallid(){
    var k = document.getElementById('cnv').getContext('2d')

    k.clearRect(0, 0, k.width, k.height);
    k.fillStyle="#483D8B";
    k.beginPath()
    k.arc(200, 300, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust

    k.fillStyle="#9400D3";
    k.beginPath()
    k.arc(230, 325, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust

    k.fillStyle="#B22222";
    k.beginPath()
    k.arc(290, 380, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust

    k.fillStyle="#DAA520";
    k.beginPath()
    k.arc(170, 277, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust

    k.fillStyle="#CD5C5C";
    k.beginPath()
    k.arc(190, 332, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust

    k.fillStyle="#FFFF00";
    k.beginPath()
    k.arc(258, 255, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust

    k.fillStyle="#FA8072";
    k.beginPath()
    k.arc(300, 300, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust
}
function kuusk(){
    var k = document.getElementById('cnv').getContext('2d')

    k.fillStyle="#D2691E";
    k.fillRect(200, 440, 55, 85);

    k.fillStyle = "#006400";
    k.beginPath();
    k.moveTo(420,440);
    k.lineTo(225,305);
    k.lineTo(40,440);
    k.fill();

    k.fillStyle="#006400";
    k.beginPath();
    k.moveTo(380,340);
    k.lineTo(225,205);
    k.lineTo(80,340);
    k.fill();

    k.fillStyle = "#006400";
    k.beginPath();
    k.moveTo(320,255);
    k.lineTo(222,130);
    k.lineTo(130,255);
    k.fill();
}
function kustuta(){
    var k = document.getElementById("cnv").getContext("2d");

    k.clearRect(0, 0, 1000, 1000);
}
function maa(){
    var k = document.getElementById('cnv').getContext('2d')

    k.fillStyle="#A0522D";
    k.fillRect(0, 520, 500, 85);
}
function taht(){
    var k = document.getElementById("cnv").getContext("2d");
    k.fillStyle="yellow";
    k.beginPath();
    k.moveTo(224,50);
    k.lineTo(240.5,85);
    k.lineTo(279,89.15);
    k.lineTo(251,115.5);
    k.lineTo(257.5,152.5);
    k.lineTo(224,137.5);
    k.lineTo(190.6,152.5);
    k.lineTo(197.5,115.5);
    k.lineTo(170.5,89);
    k.lineTo(207.5,84);
    k.lineTo(224,50);
    k.closePath();
    k.fill();
}
function lint(){

}