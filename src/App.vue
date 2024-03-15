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
  overflow-y: hidden;
}
</style>
