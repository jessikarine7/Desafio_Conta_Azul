<script setup>
  import { ref } from 'vue';

  const showMenuItems = ref(false);

  const toggleOptions = () => {
    showMenuItems.value = !showMenuItems.value;
  };
  
</script>

<template>
  <header class="menuContainer">
    <picture>
      <source 
        srcset="@/assets/icon-logo.png" 
        media="(max-width: 400px)" 
        width="25px"
        alt="main logo mobile"
      />
      
      <img 
        src="@/assets/logo.svg" 
        class="logo"
        alt="main logo"
      >
    </picture>

    <nav class="navigation">
      <p class="menuTitle">
        Home
      </p>
  
      <button class="menuButton">
        Login
      </button>
    </nav>

    <img 
      src="@/assets/icon-mobile.png" 
      @click="toggleOptions" 
      class="mobileIcon"
      width="25px"
      alt="icon options mobile"
    >

    <ul 
      class="menuItems" 
      v-if="showMenuItems"
    >
      <li class="item">
        Home
      </li>

      <li class="item">
        Login
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
  .navigation{
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
  }
  .menuContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    background-color: #191970;
    padding: 15px;
    z-index: 9;
  }
  .menuTitle{
    color: white;
    font-size: 15px;
  }
  .menuTitle:hover{
    text-decoration: underline;
  }
  .menuButton{
    padding: 5px;
    width: 70px;
    color: #191970;
    font-weight: 600;
    border-radius: 5px;
    background-color: white;
  }
  .menuButton:hover{
    background-color: rgba(235, 232, 232, 0.938);
  }
  .menuItems{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 55px;
    right: 0;
    background-color: #fff;
    color: #191970;
    border: 1px solid #ccc;
    font-size: 14px;
    z-index: 999;
  }
  .item{
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .item:hover{
    background-color: rgba(235, 232, 232, 0.938);
  }
  .mobileIcon{
    display: none;
  }
  ul{ 
    list-style-type: none;
  }
  @media (max-width: 500px) {
    .menuTitle{
      display: none;
    }
    .menuButton{
      display: none;
    }
    .mobileIcon{
      display:block;
    }
  }
</style>