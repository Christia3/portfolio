// DARK MODE
document.getElementById("darkToggle").onclick = () =>{
document.body.classList.toggle("light");
};

// TYPING ANIMATION
const text = ["Frontend Developer","Flutter Developer","UI/UX Designer","Student Programmer"];
let i=0, j=0, current="", isDeleting=false;

function type(){
current = text[i];
if(isDeleting){
j--;
}else{
j++;
}

document.querySelector(".typing").textContent = current.substring(0,j);

if(!isDeleting && j===current.length){
isDeleting=true;
setTimeout(type,900);
return;
}

if(isDeleting && j===0){
isDeleting=false;
i=(i+1)%text.length;
}

setTimeout(type, isDeleting?50:100);
}
type();

// SCROLL ANIMATION
function reveal(){
let reveals=document.querySelectorAll(".reveal");
for(let i=0;i<reveals.length;i++){
let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let visible=100;

if(elementTop<windowHeight-visible){
reveals[i].classList.add("active");
}
}
}
window.addEventListener("scroll",reveal);

// scroll progress bar
window.onscroll = function(){
let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (winScroll/height)*100;
document.getElementById("progressBar").style.width = scrolled + "%";
};

let topBtn=document.getElementById("topBtn");

window.onscroll=function(){
topBtn.style.display = window.scrollY>300 ? "block":"none";
};

topBtn.onclick=function(){
window.scrollTo({top:0,behavior:"smooth"});
};



