<script setup lang="ts">
  import { RouterLink } from "vue-router"
  import { ref } from  'vue'
  const menuOpen = ref(true)
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
  }
</script>

<template>
  <header class="bg-cmablue text-white relative pt-4 md:w-1/3 lg:w-1/4">
    <button
      :class="{ hidden: !menuOpen }"
      class="block fixed right-2 top-2 md:hidden"
      @click="toggleMenu"
    >
      <img src="@/assets/menu.svg" alt="open menu" />
    </button>
    <button
      :class="{ hidden: menuOpen }"
      class="block fixed right-2 top-2 md:hidden"
      @click="toggleMenu"
    >
      <img src="@/assets/close.svg" alt="close menu" />
    </button>

    <RouterLink to="/">
      <img
        alt="CMA Connect Fareham logo"
        src="@/assets/CMA_connect_fareham_logo.png"
        align="center"
        class="block mx-auto w-3/4"
      />
    </RouterLink>

    <nav 
      :class="{ hidden: menuOpen}"
      class="absolute md:relative top bg-cmablue block w-full px-4 pb-4 md:px-2 md:mt-5 md:block"
      >
      <RouterLink class="menu-item border-b" @click="toggleMenu" to="/">Home</RouterLink>
      <RouterLink class="menu-item border-b" @click="toggleMenu" to="/how-we-can-help">How we can help</RouterLink>
      <RouterLink class="menu-item border-b" @click="toggleMenu" to="/who-we-are">Who we are</RouterLink>
      <RouterLink class="menu-item" @click="toggleMenu" to="/support-us">Support us</RouterLink>
    </nav>

    <div class="hidden md:block p-5 ">
      <p class="">Book a time to meet with our volunteer money mentors:
        <ul class="mt-3">
          <li>
            <img 
              alt="Call us"
              src="@/assets/phone-white.svg"  
              class="inline-block w-4 mr-1"
            />
            <a href="tel:01329 284837" class="no-underline" title="Call Us">01329 284837</a> 
          </li>
          <li>
            <img 
              alt="Email us"
              src="@/assets/envelope-white.svg"  
              class="inline-block w-4 mr-1"
            />
            <a href="mailto:cmafareham@gmail.com" class="no-underline" title="Email us">cmafareham@gmail.com</a>
          </li>
        </ul>
      </p>
    </div>    
    
  </header>
</template>
