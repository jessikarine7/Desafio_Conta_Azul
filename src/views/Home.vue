<script setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import { getWeather } from '@/service/index';
  import { cities } from '@/constants/cities';

  const citiesWeather = ref([]);
  const cache = JSON.parse(localStorage.getItem('cache')) || {};
  const TEN_MINUTES_IN_MS = 600000;
  let timeId;

  const fetchCityWeather = async () => {
    try {
      const cityNames = Object.keys(cities);

      if (cache.expire > Date.now()) {
        citiesWeather.value = cache.cities;
      } else {
        const cities = [];
        const expire = Date.now() + TEN_MINUTES_IN_MS;

        for (const cityName of cityNames) {
          const city = await getWeather(cityName);
          cities.push(city);
        };

        citiesWeather.value = cities;

        const freshCash = {
          cities,
          expire,
        };

        localStorage.setItem('cache', JSON.stringify(freshCash));
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      timeId = setTimeout(fetchCityWeather, TEN_MINUTES_IN_MS);
    };
  };

  const getTemperatureClass = (temperature) => {
    const conversionTemp = temperature - 273;

    if (conversionTemp  <= 5 ) {
      return 'blue';
    } else if (conversionTemp <= 25) {
      return 'orange';
    } else {
      return 'red';
    };
  };

  onMounted(() => { fetchCityWeather();});
  onUnmounted(() => clearTimeout(timeId));
</script>

<template>
  <section class="homeContainer">
    <h1 class="title" data-testid="title">Temperatura Atual</h1>

    <div class="card" data-testid="card">
      <div
        class="cardContainer" 
        v-for="city in citiesWeather"
      >
        <div class="cityContainer">
          <p class="cardText">Cidade: </p>
          <p class="info">
            {{ city?.name }}
          </p>
        </div>
  
        <div class="temperatureContainer">
          <p class="cardText">Temperatura: </p>
          <div 
            :class="
              ['temperatureChip', 
                getTemperatureClass(city.main.temp)
              ]"
          >
            {{ (city.main.temp - 273).toFixed(0) }}° C
          </div>
        </div>
  
        <div class="containerInfo">
          <p class="cardText">Umidade: </p>
          <p  class="info">
            {{ city.main.humidity }}%
          </p>
        </div>
  
        <div class="containerInfo">
          <p class="cardText">Pressão: </p>
          <p  class="info">
            {{ city.main.pressure }} hPa
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .homeContainer {
    padding: 30px;
    display: flex;
    flex-direction:column;
  }
  .title {
    font-size: 25px;
    margin-top: 40px;
    color: #191970;
  }
  .card {
    display: flex;
    min-width: 300px;
    width: 90%;
    gap: 15px;
    flex-wrap: wrap;
    padding-bottom: 10px;
    margin-top: 5px;
  }
  .cardContainer {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    width: 30%;
    height: 200px;
    margin-top: 25px;
    box-shadow: 10px 5px 5px rgba(226, 226, 226, 0.445);
  }
  .temperatureContainer {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 5px;
    margin-top: 15px;
  }
  .temperatureChip {
    text-align:center;
    width: 93px;
    border-radius: 10px;
    padding: 8px;
    color: white;
    font-weight: 800;
    background-color: #191970;
    font-size: 16px;
  }
  .blue {
    background-color: rgb(17, 17, 233);
    color: white;
  }
  .orange {
    background-color: rgb(255, 72, 0);
    color: white;
  }
  .red {
    background-color: rgb(187, 11, 11);
    color: white;
  }
  .cityContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .info{
    color: rgb(107, 107, 107);
    font-size: 20px;
    font-weight: 700;
  }
  .cardText{
    color: rgb(107, 107, 107);
    font-size: 16px;
  }
  .containerInfo{
    margin-top: 7px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  @media (max-width: 1210px) {
    .cardContainer{
      margin-top: 5px;
    }
  }
  @media (max-width: 800px) {
    .homeContainer{
      padding: 20px;
    }
    .cardContainer{
      min-width: 230px;
      height: 165px;
    }
    .info{
      font-size: 16px;
    }
    .title{
      font-size: 20px;
      margin-top: 45px;
    }
    .temperatureChip{
      padding: 5px;
      font-size: 14px;
    }
    .card{
      gap: 5px;
      padding-bottom: 5px;
    }
  }
</style>
