const apiKey="f07f7cd210e5a8f44157eb4f5637b084";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");

let weathericon=document.querySelector(".weather-icon");

async function checkweather(city)
{
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();  //java script object notation
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
if(data.weather[0].main=="Clouds")
{
    weathericon.src = "Images/clouds.png"
}
else if(data.weather[0].main=="Clear")
{
    weathericon.src ="Images/clear.png"
}

    else if(data.weather[0].main=="Drizzle")
{
    weathericon.src ="Images/drizzle.png"
}
    else if(data.weather[0].main=="Humidity")
    {
        weathericon.src ="Images/humidity.png"
    }
    else if(data.weather[0].main=="Mist")
    {
        weathericon.src ="Images/mist.png"
    }
    else if(data.weather[0].main=="Snow")
    {
        weathericon.src ="Images/snow.png"
    }
    else if (data.weather[0].main=="Wind") 
    {
        weathericon.src="Images/wind.png"
    }
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{

    checkweather(searchBox.value);
});

searchBox.addEventListener("keydown",function (event){
    if (event.key ==='Enter'){
        event.preventDefault();

       // searchBtn.textContent = `${searchBox.value}`;
       // searchBox.value='';
       checkweather(searchBox.value);
    };

    
});
