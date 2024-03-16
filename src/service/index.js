

const baseApi = 'https://api.openweathermap.org/data/2.5/weather'
const apiId = 'a8ee34d4700f0abd6430d425e6899d54'

const cities = {
  nuuk: {
    lat:64.17444986683014,
    lon:-51.73925678950612
  },
  urubici: {
    lat: -28.01486648092277, 
    lon: -49.59306248417477
  },
  nairobi: {
    lat: -1.2923957025867434, 
    lon: 36.82190135813382
  }
}

export const getWeather = async(cityName) =>{
  const city = cities[cityName]
  const response = await fetch(`${baseApi}?lat=${city.lat}&lon=${city.lon}&appid=${apiId}`)
  return await response.json()
}
console.log(`${baseApi}?lat=${cities.nuuk.lat}&lon=${cities.nuuk.lon}&appid=${apiId}`);
