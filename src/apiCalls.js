export const getWeather = async (noaaGrids) => {
  const responses = await Promise.all(noaaGrids.map(grid => fetch(`https://api.weather.gov/gridpoints/${grid}/forecast`)))
  const json = await Promise.all(responses.map(response => response.json()))
  return json
}
