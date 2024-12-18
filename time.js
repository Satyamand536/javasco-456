let btn=document.querySelector(".btn");

btn.addEventListener('click',()=>{
    setInterval(() => {
        let time=new Date();
        btn.innerHTML=time.toLocaleTimeString();
        },1000);

});
    


