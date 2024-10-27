const search = document.querySelector("#search");
const input = document.querySelector(".input"); // Make sure this selector is correct
const temp = document.querySelector(".temp");
const des = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const weatherimg = document.querySelector(".weatherimg")

async function checkWeather(city) {
    const api_key = "29a637840bd37c8b0291721df0dedfd3";  // Confirm that this is correct
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    if(input.value === ""){
   input.value = 1
        

    }

    else{
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            
    
             temp.innerHTML = `${Math.round(data.main.temp)}°C`;
             des.innerHTML = `${data.weather[0].description}`
             humidity.innerHTML = `${data.main.humidity}%`
             wind.innerHTML = `${data.wind.speed}km/h`
    
             switch(data.weather[0].main){
                case  'Clouds':
                weatherimg.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
                break;
    
                case'Rain':
                weatherimg.src = "https://static.vecteezy.com/system/resources/previews/010/989/526/non_2x/rainy-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png"
                break;
    
                case'Clear':
                weatherimg.src = "https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small_2x/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png"
                break;
    
                
                case'Mist':
                weatherimg.src = "https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small_2x/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png"
                break;
    
                case'Snow':
                weatherimg.src = "https://i.pinimg.com/736x/48/eb/a2/48eba29e912c229e74c9e4d9ef20ef51.jpg"
                break;
             }
             
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    
}

search.addEventListener("click", () => {
    console.log("Input city:", input.value);  // Debug input value
    checkWeather(input.value);
    
});
