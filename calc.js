let btn=document.querySelectorAll('.btn');
let eq=document.querySelector('.eval');
let clr=document.querySelector(".clr");
let pcl=document.querySelector('.pclr')
let inp=document.querySelector('.inp')

btn.forEach(button=>{
    button.addEventListener('click',()=>{
        inp.value +=button.textContent;
        
        
    })

    
})

eq.addEventListener('click',()=>{
    try {
        inp.value=eval(inp.value);
    } catch (error) {
        inp.value="error";
    }
})

clr.addEventListener('click',()=>{
    inp.value="";
})

pcl.addEventListener('click',()=>{
    inp.value=inp.value.slice(0,-1);
})



