const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

var sunFill = '#db9833';
var x = 0;
var speed = 0.1;

canvas.onmousemove=function(e){handleMouseMove(e);}
      
// start the animation
requestAnimationFrame(animate);

function animate(time){

    // move circle
    x+=speed;

    // restart animation if it reaches end
    if (x>30){
        x=0;
    }

    //clear animation
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw canvas
    draw(x,sunFill);

    // request another loop of animation
    requestAnimationFrame(animate);
}

function draw(x,sunFill) {
    const  sq = canvas.getContext('2d');
    sq.beginPath();
    sq.rect(0, 380, 440, 20);
    sq.fillStyle = '#8ec3eb';
    sq.fill();
    sq.strokeStyle = '#8ec3eb';
    sq.stroke();

    const s0 = canvas.getContext('2d');
    s0.beginPath();
    s0.arc(-30+x, 370, 20, 0, 2 * Math.PI);
    s0.fillStyle = '#8ec3eb';
    s0.fill();
    s0.strokeStyle = '#8ec3eb';
    s0.stroke();

    const s1 = canvas.getContext('2d');
    s1.beginPath();
    s1.arc(x, 370, 20, 0, 2 * Math.PI);
    s1.fillStyle = '#8ec3eb';
    s1.fill();
    s1.strokeStyle = '#8ec3eb';
    s1.stroke();

    const s2 = canvas.getContext('2d');
    s2.beginPath();
    s2.arc(x+30, 370, 20, 0, 2 * Math.PI);
    s2.fillStyle = '#8ec3eb';
    s2.fill();
    s2.strokeStyle = '#8ec3eb';
    s2.stroke();

    const s3 = canvas.getContext('2d');
    s3.beginPath();
    s3.arc(x+60, 370, 20, 0, 2 * Math.PI);
    s3.fillStyle = '#8ec3eb';
    s3.fill();
    s3.strokeStyle = '#8ec3eb';
    s3.stroke();

    const s4 = canvas.getContext('2d');
    s4.beginPath();
    s4.arc(x+90, 370, 20, 0, 2 * Math.PI);
    s4.fillStyle = '#8ec3eb';
    s4.fill();
    s4.strokeStyle = '#8ec3eb';
    s4.stroke();

    const s5 = canvas.getContext('2d');
    s5.beginPath();
    s5.arc(x+120, 370, 20, 0, 2 * Math.PI);
    s5.fillStyle = '#8ec3eb';
    s5.fill();
    s5.strokeStyle = '#8ec3eb';
    s5.stroke();

    const s6 = canvas.getContext('2d');
    s6.beginPath();
    s6.arc(x+150, 370, 20, 0, 2 * Math.PI);
    s6.fillStyle = '#8ec3eb';
    s6.fill();
    s6.strokeStyle = '#8ec3eb';
    s6.stroke();

    const s7 = canvas.getContext('2d');
    s7.beginPath();
    s7.arc(x+180, 370, 20, 0, 2 * Math.PI);
    s7.fillStyle = '#8ec3eb';
    s7.fill();
    s7.strokeStyle = '#8ec3eb';
    s7.stroke();

    const s8 = canvas.getContext('2d');
    s8.beginPath();
    s8.arc(x+210, 370, 20, 0, 2 * Math.PI);
    s8.fillStyle = '#8ec3eb';
    s8.fill();
    s8.strokeStyle = '#8ec3eb';
    s8.stroke();

    const s9 = canvas.getContext('2d');
    s9.beginPath();
    s9.arc(x+240, 370, 20, 0, 2 * Math.PI);
    s9.fillStyle = '#8ec3eb';
    s9.fill();
    s9.strokeStyle = '#8ec3eb';
    s9.stroke();

    const s10 = canvas.getContext('2d');
    s10.beginPath();
    s10.arc(x+270, 370, 20, 0, 2 * Math.PI);
    s10.fillStyle = '#8ec3eb';
    s10.fill();
    s10.strokeStyle = '#8ec3eb';
    s10.stroke();

    const s11 = canvas.getContext('2d');
    s11.beginPath();
    s11.arc(x+300, 370, 20, 0, 2 * Math.PI);
    s11.fillStyle = '#8ec3eb';
    s11.fill();
    s11.strokeStyle = '#8ec3eb';
    s11.stroke();
    
    const s12 = canvas.getContext('2d');
    s12.beginPath();
    s12.arc(x+330, 370, 20, 0, 2 * Math.PI);
    s12.fillStyle = '#8ec3eb';
    s12.fill();
    s12.strokeStyle = '#8ec3eb';
    s12.stroke();

    const s13 = canvas.getContext('2d');
    s13.beginPath();
    s13.arc(x+360, 370, 20, 0, 2 * Math.PI);
    s13.fillStyle = '#8ec3eb';
    s13.fill();
    s13.strokeStyle = '#8ec3eb';
    s13.stroke();
    
    const s14 = canvas.getContext('2d');
    s14.beginPath();
    s14.arc(x+390, 370, 20, 0, 2 * Math.PI);
    s14.fillStyle = '#8ec3eb';
    s14.fill();
    s14.strokeStyle = '#8ec3eb';
    s14.stroke();

    const s15 = canvas.getContext('2d');
    s15.beginPath();
    s15.arc(x+420, 370, 20, 0, 2 * Math.PI);
    s15.fillStyle = '#8ec3eb';
    s15.fill();
    s15.strokeStyle = '#8ec3eb';
    s15.stroke();
    
    const s16 = canvas.getContext('2d');
    s16.beginPath();
    s16.arc(x+450, 370, 20, 0, 2 * Math.PI);
    s16.fillStyle = '#8ec3eb';
    s16.fill();
    s16.strokeStyle = '#8ec3eb';
    s16.stroke();

    const sun = canvas.getContext('2d');
    sun.beginPath();
    sun.arc(440, 0, 100, 0, 2 * Math.PI);
    sun.fillStyle = sunFill;
    sun.fill();
    sun.strokeStyle = sunFill;
    sun.stroke();

    const half1 = canvas.getContext('2d');
    half1.beginPath();
    half1.arc(110, 150, 10, Math.PI, 0, false);
    half1.lineWidth = 2;
    half1.strokeStyle = "black";
    half1.stroke();

    const half2 = canvas.getContext('2d');
    half2.beginPath();
    half2.arc(130, 150, 10, Math.PI, 0, false);
    half2.lineWidth = 2;
    half2.strokeStyle = "black";
    half2.stroke();

    const half3 = canvas.getContext('2d');
    half3.beginPath();
    half3.arc(170, 200, 10, Math.PI, 0, false);
    half3.lineWidth = 2;
    half3.strokeStyle = "black";
    half3.stroke();

    const half4 = canvas.getContext('2d');
    half4.beginPath();
    half4.arc(190, 200, 10, Math.PI, 0, false);
    half4.lineWidth = 2;
    half4.strokeStyle = "black";
    half4.stroke();
}

function handleMouseMove(e) {    
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);
    var dx=mouseX-440;
    var dy=mouseY;

    // test if mouse is inside sun
    if(dx*dx+dy*dy<100){
        sunFill = white;
        draw(x, sunFill);

    }else{
        sunFill = '#db9833';
        draw(x, sunFill);
  }
};