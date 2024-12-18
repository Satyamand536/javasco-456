//The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

// Value	State   	Description
// 0	UNSENT	     Client has been created. open() not called yet.
// 1	OPENED	     open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	      Downloading; responseText holds partial data.
// 4	DONE	    The operation is complete.


const requestUrl='https://api.github.com/users/hiteshchoudhary';


const xhr=new XMLHttpRequest();
xhr.open('GET',requestUrl)//abhi open call nhi hua hai jab send bolenge tab hoga.

let data=null;

//to continuosly track the readyState we use xhr.onreadystatechange.

xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){//to detect the ready state.
        data=JSON.parse(this.responseText)//JSON.parse converts string into JSON
        console.log(data.followers);
        console.log(data.avatar_url);

    }
}







console.log(xhr.readyState)
xhr.send()


const btn=document.querySelector(".btn");

btn.addEventListener('click',()=>{

    if(data){
    let Dv=document.createElement('div');
    let newDv=document.createElement('div');
    let img=document.createElement('img');
    let pr=document.createElement('p');
    

    img.src='https://avatars.githubusercontent.com/u/11613311?v=4';
    img.alt = 'User Avatar';
    img.style.width = '100px';
    img.style.height = '100px';
    img.innerHTML=data.avatar_url;

    img.style.marginTop='2rem';
    pr.textContent=`followers:${data.followers}`;

    newDv.appendChild(img);

    Dv.appendChild(newDv);
    Dv.appendChild(pr);

    document.body.appendChild(Dv);

    Dv.addEventListener('click',()=>{
        Dv.remove();
    })


    }

})
