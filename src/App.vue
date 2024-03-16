<script setup>
import { RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue'
</script>

<template>
  <Menu />
  <RouterView class="rotas"/>
</template>

<style lang="scss">
  .rotas{
    background-color: rgb(247, 246, 246);
    height: calc(100vh - 55px);
  }
  @media (max-width: 400px) {
    .rotas{
      height: calc(100vh - 60px);
    }
  }
  @media (max-width: 300px) {
    .rotas{
      height: 100vh;
    }
  }
</style>
