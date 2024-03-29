const params = {
  appid: "852d267b2f480b2a7538f551fee08af7",
  units: "metric",
  lang: "ko",
  // lat: 37.557782,
  // lon: 126.926323,
};
let cities;
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather";

axios.get("./index.json").then(getcities).catch();

function getcities(res) {
  cities = res.data.cities;
  cities.forEach((citys) => {
    params.lat = citys.lat;
    params.lon = citys.lon;
    params.id = citys.id;
    axios.get(weatherApiUrl, { params }).then(mama).catch();
  });
}

function mama(res) {
  let city = cities.filter(function (city) {
    return city.id === response.data.id; // just one city evaluated
  });
  console.log("city:", city);
}
