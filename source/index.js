function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Janurary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `Today is ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}.`;

  return formattedDate;
}

console.log(formatDate(new Date()));

let currentTime = document.querySelector("span");
currentTime.innerHTML = new Date();

function displayTemp(response) {
  let currentTemperature = document.querySelector("h2");
  let temperature = Math.round(response.data.temperature.current);
  let cityTemp = document.querySelector("h1");
  cityTemp.innerHTML = response.data.city;

  cityTemp.innerHTML = response.data.city;
  currentTemperature.innerHTML = `${temperature}°F`;
}

function citySearch(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-text-input");
  let city = searchInput.value;
  let apiKey = "oaf35ec85ab9436b73053b0e51t48cf9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayTemp);

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#city-search");
form.addEventListener("submit", citySearch);
