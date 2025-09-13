<script setup>
import StarBackground from './components/StarBackground.vue';
import Navbar from '@/components/Navbar.vue'
import Moon from '@/components/Moon.vue'
</script>

<template>
  <Navbar />
  <StarBackground />
    <router-view />
</template>

<style>

</style>