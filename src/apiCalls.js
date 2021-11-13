export const getWeather = async (noaaGrids) => {
  const responses = await Promise.all(noaaGrids.map(grid => fetch(`https://api.weather.gov/gridpoints/${grid}/forecast`)))
  const json = await Promise.all(responses.map(response => response.json()))
  return json
}
// export const getWeather = () => {
//   // fetch("https://api.weather.gov/gridpoints/GJT/54,62/forecast")
//   // fetch("https://api.weather.gov/points/39.0639,-108.5506")
//   // fetch("https://api.weather.gov/gridpoints/GJT/172,120/forecast")
//   fetch("https://api.weather.gov/points/39.7969,-105.4939")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => {
//   	console.error(err);
//   });
// }
