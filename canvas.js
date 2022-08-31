const canvas = document.getElementById('myCanvas');

const lCircle = canvas.getContext('2d');
lCircle.beginPath();
lCircle.arc(150, 100, 50, 0, 2 * Math.PI);
lCircle.fillStyle = 'orange';
lCircle.fill();
lCircle.strokeStyle = 'orange';
lCircle.stroke();

const sCircle = canvas.getContext('2d');
sCircle.beginPath();
sCircle.arc(40, 100, 20, 0, 2 * Math.PI);
sCircle.fillStyle = 'blue';
sCircle.fill();
sCircle.strokeStyle = 'blue';
sCircle.stroke();

const  sq = canvas.getContext('2d');
sq.beginPath();
sq.rect(20, 20, 40, 40);
sq.fillStyle = 'blue';
sq.fill();
sq.lineWidth = 5;
sq.strokeStyle = 'orange';
sq.stroke();