const apiKey = "820ff714b9b5ed600ffb2fa375ff8889";
   const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

   const searchBox = document.querySelector(".search input");
   const searchBtn = document.querySelector(".search img");
   const weatherIcon = document.querySelector(".column src");

   async function checkWeather (city) {
       const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
       var data = await response.json();

       document.querySelector(".city-name").innerHTML = data.name;
       document.querySelector(".temperature").innerHTML = Math.round( data.main.temp) + "°C" ;
       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
       document.querySelector(".Wind").innerHTML = data.wind.speed + "km/hr";
   
       if (data.weather[0]== "Clouds") {
         weatherIcon.src = "./images/clouds.png";
       }
       else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png";
       }
       else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.png";
       }
       else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
       }
       else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist.png";
       }
       else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "./images/snow.png";
       }
       document.querySelector(".weather").style.display = "block" ;

    }
   searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
   });