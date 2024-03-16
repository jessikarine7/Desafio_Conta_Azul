import { cities } from "@/constants/cities"

const baseApi = 'https://api.openweathermap.org/data/2.5/weather'
const apiId = 'a8ee34d4700f0abd6430d425e6899d54'

export const getWeather = async(cityName) =>{
  const city = cities[cityName]
  const response = await fetch(`${baseApi}?lat=${city.lat}&lon=${city.lon}&appid=${apiId}`)
  return await response.json()
}

