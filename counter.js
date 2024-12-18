let incr=document.querySelector(".btn1");
let decr=document.querySelector(".btn2");
let h2=document.querySelector("h2");


let increase=()=>{
    
    (h2.textContent)=Number(h2.textContent)+1;
    

}
let decrease=()=>{
    (h2.textContent)=Number(h2.textContent)-1;
}


incr.addEventListener('click',()=>{
    

    increase();
    
    

});

decr.addEventListener('click',()=>{

    decrease();
    
    

})
