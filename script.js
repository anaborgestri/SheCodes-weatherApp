let now = new Date();

console.log(now.getDate());
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
console.log(day);
let hour = now.getHours();
let minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
let datetime = `${day} ${hour}:${minutes}`;

document.getElementById("datetime").innerHTML = datetime;

function showCity(event) {
  event.preventDefault();
  let findCity = document.querySelector("#find-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = findCity.value;
  //console.log(findCity.value.toString());

  function searchCity(response) {
    //console.log(response.data.temperature.current);
    let tempDegrees = document.querySelector("div .actual-temp-number");
    tempDegrees.innerHTML = Math.round(response.data.temperature.current);
  }
  //console.log(document.getElementById("find-city").value);
  let apiKey = "4c08634eb8b52t7acf769o96f5812f64";
  let city = document.getElementById("find-city").value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(searchCity);
}

let form = document.querySelector("#weather-city-finder");
form.addEventListener("submit", showCity);
