<script setup>
  import { onMounted, ref } from 'vue';
  import { getWeather } from '@/service/index';

  const citiesWeather = ref([]);
  
  const fetchCityWeather = async () => {
    try {
      const cities = ['nuuk', 'urubici', 'nairobi'];

      for (const city of cities) {
        const response = await getWeather(city);
        citiesWeather.value.push(response);
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const getTemperatureClass = (temperature) => {
    const conversionTemp = temperature - 273
    if (conversionTemp  <= 5 ) {
      return 'blue';
    } else if (conversionTemp <= 25) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  onMounted(() => {
    fetchCityWeather();
  });

</script>

<template>
  <section class="homeContainer">
    <h1 class="title">Temperatura Atual</h1>

    <div class="card">
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
  .card{
    display: flex;
    min-width: 300px;
    width: 90%;
    gap: 15px;
    flex-wrap: wrap;
  }
  .homeContainer{
    padding: 30px;
    display: flex;
    flex-direction:column
  }
  .title{
    font-size: 25px;
    margin-top: 3%;
    color: #191970;
  }
  .cardContainer{
    display: flex;
    flex-direction: column;
    min-width: 300px;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    width: 30%;
    height: 200px;
    margin-top: 25px;
    box-shadow: 5px 5px 5px rgba(226, 226, 226, 0.445);
  }
  .temperatureContainer{
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 5px;
    margin-top: 15px;
  }
  .temperatureChip{
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
    background-color: rgb(3, 3, 212);
    color: white;
  }
  .orange {
    background-color: rgb(240, 158, 6);
    color: white;
  }
  .red {
    background-color: rgb(218, 11, 11);
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
    .card{
      gap: 5px;
    }
  }
  @media (max-width: 400px) {
    .homeContainer{
      padding: 20px;
    }
    .cardContainer{
      min-width: 240px;
      height: 170px;
    }
    .info{
      font-size: 16px;
    }
    .title{
      font-size: 20px;
    }
    .temperatureChip{
      padding: 5px;
      font-size: 14px;
    }
  }
</style>
