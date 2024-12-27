const apiKey = "5910c88175714d0eb5292252230211";
const searchBtn = document.getElementById("loc-btn");

fetchDate();

searchBtn.addEventListener("click", () => {
  const city = document.getElementById("loc-input");
  const location = city.value;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${4}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Process the weather data here
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching the weather data:", error);
    });
});

function displayWeather(data) {
  const curnTemp = document.getElementById("temp");
  const curnCondition = document.getElementById("condition");
  const curnWind = document.getElementById("wind");
  const curnHumidity = document.getElementById("humidity");
  const curnPrecip = document.getElementById("precip");

  const day1 = data.current;
  curnTemp.innerHTML = `${day1.temp_c}°C`;
  curnCondition.innerHTML = day1.condition.text;
  curnWind.innerHTML = `${day1.wind_kph} km/h`;
  curnHumidity.innerHTML = `${day1.humidity}%`;
  curnPrecip.innerHTML = `${day1.precip_mm} mm`;
}

function fetchDate() {
  console.log("fetchDate");
  const day = new Date();

  const toDay = document.getElementById("day");
  const date = document.getElementById("date");

  const dayNumber = day.getDate();
  const month = day.toLocaleDateString("default", { month: "short" });
  const year = day.getFullYear();

  date.innerHTML = `${dayNumber} ${month} ${year}`;
  // date.innerHTML = day.toLocaleDateString();
}
