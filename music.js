let but1=document.querySelector(".sbtn");
let but2=document.querySelector(".pbtn");
let ms=document.querySelector(".mus");

but1.addEventListener('click',()=>{
    ms.play();
});

but2.addEventListener('click',()=>{
    ms.pause();
})