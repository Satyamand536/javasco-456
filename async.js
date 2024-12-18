//synchronous programming
//asynchronous programming

//javascript is a single threaded programming language.

//setTimeout=> web browser provides set timeout
//setTimeout console me run krwane par ek id deta hai
// console.log('startr');
// function hello(){
//     console.log('helloi');
// }

// setTimeout(hello,2000)
//     console.log('scrup');

    //or as shown below
    //function directly setTimeout ke andar

//     console.log('startr');
// setTimeout(() => {
//     console.log('hello')
// }, 3000);

// console.log('scrit end');

// console.log('startr');
// setTimeout(() => {
//     console.log('hello')
// }, 0);


// for(let i=0;i<100;i++){
//     console.log('nMSTE');
// }
// console.log('end')


//id jano//and clearing time out


// console.log('start')
// const id=setTimeout(() => {
//     console.log('hello')
// }, 3000);


// for(let i=0;i<100;i++){
//     console.log('....');
// }

// console.log('clearing timeout');
// clearTimeout(id);//it is clearing the setTimeout function
// console.log('setTimeout id is',id);
// console.log('end');


//setInterval=> ye setTimeout ki tarah hi kam krta hai.

// console.log('start');
// setInterval(() => {
//     console.log(Math.random());
// }, 2000);
// console.log('end');


//changing the bgcolor of body


const body=document.body;
const btn=document.querySelector('button');


const id=setInterval(() => {
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const rgb=`rgb(${red},${green},${blue})`;
    body.style.background=rgb;
    // console.log(rgb);
}, 1000);


btn.addEventListener('click',()=>{
    clearInterval(id);
    
    btn.textContent=body.style.background;
})

//callback functions

// function myfunc(callback){
//     console.log('function doing some task 1');
//     callback();
// }

// function myfunc2(){
//     console.log('task 2');
// }
// myfunc(()=>{
//     console.log('task 2');
// });



// function get2Andadd(num1,num2,callback){
//     console.log(num1,num2);
//     callback(num1,num2);


// }

// function add(a,b){
//     console.log(a+b);

// }

// get2Andadd(3,4,add);

const heading1=document.querySelector('.heading1');
const heading2=document.querySelector('.heading2');
const heading3=document.querySelector('.heading3');
const heading4=document.querySelector('.heading4');
const heading5=document.querySelector('.heading5');
const heading6=document.querySelector('.heading6');
const heading7=document.querySelector('.heading7');

// setTimeout(() => {
//     heading1.textContent='1';
//     heading1.style.color='red';
// }, 1000);



//aise aise sare ke liye karna padega to dusra tarika
//ek hi setTimeout ke andar dusre sabhi setTimeout use krna;


//callback hell
setTimeout(() => {
    heading1.textContent='1';
    heading1.style.color='violet';
    setTimeout(() => {
        heading2.textContent='2';
        heading2.style.color='purple';
        setTimeout(() => {
            heading3.textContent='3';
            heading3.style.color='red';
            setTimeout(() => {
                heading4.textContent='4';
                heading4.style.color='pink';
                setTimeout(() => {
                    heading5.textContent='5';
                    heading5.style.color='green';
                    setTimeout(() => {
                        heading6.textContent='6';
                        heading6.style.color='blue';
                        setTimeout(() => {
                            heading7.textContent='7';
                            heading7.style.color='brown';
                            
                        },1000);
                    },3000);
                },2000);
            },1000);
        },2000);
    },2000);
},1000);

//ye ek function ke andar ek isi ko callback hell kaha jata hai.
//to isko door krne ke liye promises use kiye jate hain

//change text


// function chageText(element,text,color,time,onSuccessCallback,onFailureCallback){
//     setTimeout(() => {
//         if(element){
//         element.textContent=text;
//         element.style.color=color;
//         if(onSuccessCallback){
//             onSuccessCallback();
//         }
//         }else{
//             if(onFailureCallback){
//                 onFailureCallback();
//             }
//         }
//     }, time);
// }
// // //pyramid of doom.

// // isko dekhna promise me kaise use kiya jaata hai-promises.js;
// chageText(heading1,'one','violet',1000,()=>{
//     chageText(heading2,'2','red',2000,()=>{
//         chageText(heading3,'3','violet',1000,()=>{
//             chageText(heading4,'4','violet',1000,()=>{
//                 chageText(heading5,'5','violet',2000,()=>{
//                     chageText(heading6,'6','violet',1000,()=>{
//                         chageText(heading7,'7','violet',1000,()=>{

//                         },()=>{
//                             console.log('7not exist');
//                         });
//                     },()=>{
//                         console.log('6not exist');
//                     });
//                 },()=>{
//                     console.log('5not exist');
//                 });
//             },()=>{
//                 console.log('4not exist');
//             });
//         },()=>{
//             console.log(' 3not exist');
//         });
//     },()=>{
//         console.log(' 2not exist');
//     });
// },()=>{
//     console.log(' 1 not exist');
// });


//this code is like pyramid so it is called pyramid of doom.


//async await

// fetch(url).
// then(response=>
//     return response.json()

// }).then(data=>{
//     console.log(data);
// })


const url="https://jsonplaceholder.typicode.com/posts";

async function getPost(){
    const response=await fetch(url);
    if(!response.ok){
        throw new Error('some wrong')
    }
    const data =await response.json();
    return data;


}
getPost()
.then(myData =>{
    console.log(myData);
})
.catch(error=>{
    console.log('inside catch')
    console.log(error);
})







