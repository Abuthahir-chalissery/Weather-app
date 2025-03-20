
const apiKey = "4844c5bcfe15c961d63356c60427714f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error1").style.display = "none";
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else if(searchBox.value == ""){
        document.querySelector(".error1").style.display = "block";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";

        // images
        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if (data.weather[0].main == "Must"){
            weatherIcon.src = "images/mist.png";
        }


        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".error1").style.display = "none";


    }
    
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
