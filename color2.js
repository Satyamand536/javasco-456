const butt=document.querySelector('#btn');
const body=document.body;
const currentColor=document.querySelector('.current-color');
function kuchh(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
    
}







butt.addEventListener('click',()=>{
    const randomColor=kuchh();
    
    body.style.backgroundColor=randomColor;
    currentColor.textContent=randomColor;
})