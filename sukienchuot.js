let ball=null;
ball =document.getElementById('myimage');
function move(){
    ball=document.getElementById('myimage');
    ball.style.position = 'relative';
    ball.style.left= '0px';
}
function moveright() {
    ball.style.left = parseInt(ball.style.left) + 50 + 'px';
}
window.onload = move;
