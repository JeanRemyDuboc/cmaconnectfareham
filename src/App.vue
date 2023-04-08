<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="md:flex items-stretch">
    <TheHeader />
    <div class="md:w-2/3 lg:w-3/4">
      <div class="p-5">
        <div class="">
          <RouterView />
        </div>
      </div>
      <TheFooter />
    </div>
  </div>
</template>
