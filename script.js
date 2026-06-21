const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();
musicBtn.innerHTML="⏸ Pause Music";

}else{

music.pause();
musicBtn.innerHTML="🎵 Play Music";

}

});

document
.getElementById("surpriseBtn")
.addEventListener("click",()=>{

document.getElementById("surpriseMessage")
.style.display="block";

confetti();

});

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
Math.random()*20+15+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,500);

function confetti(){

for(let i=0;i<150;i++){

const c=document.createElement("div");

c.innerHTML="✨";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top=Math.random()*100+"vh";

c.style.fontSize="25px";

document.body.appendChild(c);

setTimeout(()=>{
c.remove();
},3000);

}

}
