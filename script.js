const api_key = "359e72bc603b3dcf940068b9bb1d7fa5";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";

const inputField = document.querySelector("#input-field");
const btn = document.querySelector("#btn");
const degree = document.querySelector("#degree");
const city = document.querySelector("#city");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");

window.addEventListener("load", () => fetchData("Delhi"));

function reload() {
  window.location.reload();
}

const fetchData = async (city_name) => {
  const res = await fetch(`${url}${city_name}&appid=${api_key}`);
  const data = await res.json();
  dataBind(data);
};

const getInfo = () => {
  let inputValue = inputField.value;
  if (!inputValue) {
    alert("Fill");
  } else {
    fetchData(inputValue);
  }
  inputField.value = "";
};

const dataBind = (data) => {
  const temp = data.main.temp;
  const actualTemp = Math.floor(temp - 273.15);
  const cityName = data.name;
  const humid = data.main.humidity;
  const wind = data.wind.speed;

  degree.innerText = `${actualTemp}\u2103`;
  city.innerText = cityName;
  humidity.innerText = `${humid}%`;
  windSpeed.innerText = `${wind} km/h`;
};

btn.addEventListener("click", getInfo);
