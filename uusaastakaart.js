var x=30, y=30, y1=15, r=15, ysamm=1;
function pallid(){
    var k = document.getElementById('cnv').getContext('2d')

    k.clearRect(0, 0, k.width, k.height);
    k.fillStyle="#483D8B";
    k.beginPath()
    k.arc(x, y, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust

    k.fillStyle="#9400D3";
    k.beginPath()
    k.arc(x, y1, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust

    k.fillStyle="#B22222";
    k.beginPath()
    k.arc(x, y1, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust

    k.fillStyle="#DAA520";
    k.beginPath()
    k.arc(x, y1, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust

    k.fillStyle="#CD5C5C";
    k.beginPath()
    k.arc(x, y1, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust

    k.fillStyle="#FFFF00";
    k.beginPath()
    k.arc(x, y1, r, 0, 4*Math.PI, true);
    k.stroke()//joon
    k.fill()//taust

    k.fillStyle="#FA8072";
    k.beginPath()
    k.arc(x, y1, r, 0, 4*Math.PI, true);
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

}
function lint(){

}