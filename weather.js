const api_key = '6b8a006c53f37d196701b35af26d49c7'; 
          // Replace with your desired city name
    
    const btn=document.querySelector(".btn");
    btn.addEventListener('click',()=>{
        
        const city = document.querySelector('.inp').value.trim();
        if (!city) {
            alert('City name required');
            return;
        } 

        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
        
            const xhr = new XMLHttpRequest();
            xhr.open('GET', currentWeatherUrl);
        
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) { // Request completed
                    if (xhr.status === 200) {
                        const data = JSON.parse(this.responseText);
                        console.log(data); // Log the API response
                        console.log(data.main);
                        console.log(data.weather[0].description);
                        let Dv=document.createElement('div');
        Dv.style.border = "2px solid lightblue";
        Dv.style.borderRadius="14px";
        Dv.style.backgroundColor="lightgray";
        Dv.style.color="black";
        Dv.style.fontSize="20px";
                Dv.style.padding = "1rem";
                Dv.style.marginTop = "25px";
                Dv.style.position="absolute";
                Dv.style.left="590px";
                Dv.style.top="10px";
                Dv.style.width = "300px";

        
        let hd=document.createElement('h2');
        
        hd.style.textAlign="center";
        hd.textContent='Weather-details';
        let pt=document.createElement('p');
        
        pt.textContent=`Temperature:${data.main.temp}°C`;//alt+0176 for degree
        let pfl=document.createElement('p');
        
        pfl.textContent=`Feels like:${data.main.feels_like}°C`;
        let pwd=document.createElement('p');
        
        pwd.textContent=`Weather-description:${data.weather[0].description}`;
        let psp=document.createElement('p');
        
        psp.textContent=`Wind-Speed:${data.wind.speed}KM/h`;

        let ht=document.createElement('h2');
        ht.textContent=document.querySelector('.inp').value;
    
        Dv.appendChild(ht);
        Dv.appendChild(hd);
        Dv.appendChild(pt);
        Dv.appendChild(pfl);
        Dv.appendChild(pwd);
        Dv.appendChild(psp);
    
        document.body.appendChild(Dv);
        
        document.querySelector('.inp').value='';



                    } else {
                        alert("Error fetching weather data:", xhr.status, JSON.parse(this.responseText));
                    }
                }
            };
        xhr.send();
        });
    