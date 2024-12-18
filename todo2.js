let butn=document.querySelector(".btn");
let inpu=document.querySelector(".inp");
let lst=document.querySelector(".list");

butn.addEventListener('click',()=>{
    if (inpu.value.trim() === "") return;
    let newLst=document.createElement('li');
    lst.appendChild(newLst);
    newLst.textContent=inpu.value;
    inpu.value="";

   newLst.addEventListener('click',()=>{
    newLst.remove();
   })
})



inpu.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        butn.click(); // Trigger the "Add" button click
    }
});

let rem=document.querySelector(".rbtn");

rem.addEventListener('click',()=>{
    lst.lastChild.remove();
})
let lt=document.querySelector(".list li");
lt.addEventListener('click',()=>{
    lt.remove();
})