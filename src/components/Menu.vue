<script setup>
  import { ref } from 'vue';

  const showMenuItems = ref(false);

  const toggleOptions = () => {
    showMenuItems.value = !showMenuItems.value;
  };
  
</script>

<template>
  <nav class="menuContainer">
    <img 
      src="@/assets/logo.svg" 
      class="logo"
    >

    <img 
      src="@/assets/icon-logo.png"  
      class="mobileLogo"  
      width="20px"
    >

    <span class="menuTitle">
      Home
    </span>

    <button class="menuButton">
      Login
    </button>

    <img 
      src="@/assets/icon-mobile.png" 
      @click="toggleOptions" 
      class="mobileIcon"
      width="25px"
    >

    <div class="menuItems" v-if="showMenuItems">
      <span class="item">
        Home
      </span>

      <span class="item">
        Login
      </span>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
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
  .mobileLogo{
    display: none;
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
  @media (max-width: 250px) {
    .mobileLogo{
      display: block;
    }
    .logo{
      display: none;
    }
  }
</style>