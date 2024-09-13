const Apikey = "ea547cbb6cacdc10fe3206096da24d68";
const Apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const box = document.querySelector("input");
const button = document.querySelector("button"); 
const icon = document.querySelector(".weather-icon")






async function checkWeather(city){
    const response = await fetch(Apiurl+ city +`&appid=${Apikey}`);
    console.log(response);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"; 
    


    if(data.weather[0].main == "Clouds"){
       icon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear"){
        icon.src = "images/clear.png"
     }
    else if (data.weather[0].main == "Rain"){
        icon.src = "images/rain.png"
     }
    else if (data.weather[0].main == "Drizzle"){
        icon.src = "images/drizzle.png"
     }
    else if (data.weather[0].main == "Mist"){
        icon.src = "images/mist.png"
     }

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
    
    
}
 
button.addEventListener("click",()=>{
    checkWeather(box.value);

})




