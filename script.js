//declare location position and other variables that will be stored later in the program
let userPosition = {
  lat: 0,
  lng: 0
}

//captures geolocation data from user and stores it in userPosition object
navigator.geolocation.getCurrentPosition(position => {
  userPosition.lat = position.coords.latitude
  userPosition.lng = position.coords.longitude
//fetches weather report from user position data and outputs it in jumbotron on main page
//fetch request is inside this function so the fetch request pulls user coordinates and not blank data
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${userPosition.lat}&lon=${userPosition.lng}&exclude=hourly&appid=2260330a175994e3a7136d694876386f`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('city').innerText = data.timezone
      document.getElementById('temp').innerText = `Temperature: ${Math.round(9 / 5 * (data.current.temp - 273) + 32)}F°`
      document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`
      document.getElementById('wind').innerText = `Wind Speed: ${data.current.wind_speed}mph`
      document.getElementById('uv').innerText = `UV Index: ${data.current.uvi}`
    })
})

//creates cards with correct ID's for API data to plug into
for (let i = 0; i <= 5; i++) {
  document.getElementById('cardRow').createCard
  
}
  //openweather api key: 2260330a175994e3a7136d694876386f