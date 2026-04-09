// ===== START PAGE =====
function start(){

  document.getElementById("start").style.display="none";
  document.getElementById("main").style.display="block";

  setTimeout(()=>{
    document.getElementById("music").play();
  },300);

  typeText();
}

// ===== TYPING EFFECT =====
const text = "Selamat Ulang Tahun Bella Aidha ❤️";
let i = 0;

function typeText(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText,80);
  }
}

// ===== LOVE RAIN =====
function showLove(){

  setInterval(()=>{

    const love=document.createElement("div");
    love.innerHTML="❤️";

    love.style.position="fixed";
    love.style.left=Math.random()*100+"vw";
    love.style.top="-20px";
    love.style.fontSize="22px";
    love.style.pointerEvents="none";

    document.body.appendChild(love);

    let pos=0;

    let fall=setInterval(()=>{
      pos+=3;
      love.style.top=pos+"px";

      if(pos>window.innerHeight){
        love.remove();
        clearInterval(fall);
      }
    },30);

  },800); // ← sebelumnya 300 (terlalu cepat)
}
// ===== STAR BACKGROUND =====
const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];

for(let i=0;i<120;i++){
  stars.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2
  });
}

function drawStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="white";

  stars.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fill();
    s.y+=0.2;
    if(s.y>canvas.height) s.y=0;
  });

  requestAnimationFrame(drawStars);
}

drawStars();
