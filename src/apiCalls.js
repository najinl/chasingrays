export const getWeather = () => {
  // fetch("https://api.weather.gov/gridpoints/TOP/31,80/forecast")
  fetch("https://api.weather.gov/points/39.0639,-108.5506")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => {
	console.error(err);
});
}
