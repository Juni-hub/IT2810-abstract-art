const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

var sunFill = '#db9833';
var x = 0;
const speed = 0.1;

//listen for mousemovement
addEventListener("mousemove", (e) => {
    handleMouseMove(e);
  });

//to start animation
requestAnimationFrame(animate);

function animate(){
    x+=speed;
    if (x>30){
        x=0;
    }
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw canvas
    draw(x,sunFill);

    requestAnimationFrame(animate);
}

function draw(x,sunFill) {
    const  d = canvas.getContext('2d');
    d.beginPath();
    d.rect(0, 230, 250, 20);
    d.fillStyle = '#8ec3eb';
    d.fill();
    d.strokeStyle = '#8ec3eb';
    d.stroke();

    d.beginPath();
    d.arc(-30+x, 220, 20, 0, 2 * Math.PI);
    d.fillStyle = '#8ec3eb';
    d.fill();
    d.strokeStyle = '#8ec3eb';
    d.stroke();

    d.beginPath();
    d.arc(x, 220, 20, 0, 2 * Math.PI);
    d.fillStyle = '#8ec3eb';
    d.fill();
    d.strokeStyle = '#8ec3eb';
    d.stroke();

    d.beginPath();
    d.arc(x+30, 220, 20, 0, 2 * Math.PI);
    d.fillStyle = '#8ec3eb';
    d.fill();
    d.strokeStyle = '#8ec3eb';
    d.stroke();

    d.beginPath();
    d.arc(x+60, 220, 20, 0, 2 * Math.PI);
    d.fillStyle = '#8ec3eb';
    d.fill();
    d.strokeStyle = '#8ec3eb';
    d.stroke();

    d.beginPath();
    d.arc(x+90, 220, 20, 0, 2 * Math.PI);
    d.fillStyle = '#8ec3eb';
    d.fill();
    d.strokeStyle = '#8ec3eb';
    d.stroke();

    d.beginPath();
    d.arc(x+120, 220, 20, 0, 2 * Math.PI);
    d.fillStyle = '#8ec3eb';
    d.fill();
    d.strokeStyle = '#8ec3eb';
    d.stroke();

    d.beginPath();
    d.arc(x+150, 220, 20, 0, 2 * Math.PI);
    d.fillStyle = '#8ec3eb';
    d.fill();
    d.strokeStyle = '#8ec3eb';
    d.stroke();

    d.beginPath();
    d.arc(x+180, 220, 20, 0, 2 * Math.PI);
    d.fillStyle = '#8ec3eb';
    d.fill();
    d.strokeStyle = '#8ec3eb';
    d.stroke();

    d.beginPath();
    d.arc(x+210, 220, 20, 0, 2 * Math.PI);
    d.fillStyle = '#8ec3eb';
    d.fill();
    d.strokeStyle = '#8ec3eb';
    d.stroke();

    d.beginPath();
    d.arc(x+240, 220, 20, 0, 2 * Math.PI);
    d.fillStyle = '#8ec3eb';
    d.fill();
    d.strokeStyle = '#8ec3eb';
    d.stroke();

    d.beginPath();
    d.arc(250, 0, 100, 0, 2 * Math.PI);
    d.fillStyle = sunFill;
    d.fill();
    d.strokeStyle = sunFill;
    d.stroke();

    d.beginPath();
    d.arc(50, 100, 10, Math.PI, 0, false);
    d.lineWidth = 2;
    d.strokeStyle = "black";
    d.stroke();

    d.beginPath();
    d.arc(70, 100, 10, Math.PI, 0, false);
    d.lineWidth = 2;
    d.strokeStyle = "black";
    d.stroke();

    d.beginPath();
    d.arc(110, 150, 10, Math.PI, 0, false);
    d.lineWidth = 2;
    d.strokeStyle = "black";
    d.stroke();

    d.beginPath();
    d.arc(130, 150, 10, Math.PI, 0, false);
    d.lineWidth = 2;
    d.strokeStyle = "black";
    d.stroke();
}

function handleMouseMove(e) {    
    const rect = canvas.getBoundingClientRect()
    var mouseX=rect.right-parseInt(e.clientX);
    var mouseY=parseInt(e.clientY)-rect.top;
    
    // test if mouse is inside sun
    if((Math.sqrt((mouseX)**2+(mouseY)**2))<100 && mouseX>=0 && mouseY>=0){
        sunFill = 'white';
        draw(x, sunFill);

    }else{
        sunFill = '#db9833';
        draw(x, sunFill);
  }
};