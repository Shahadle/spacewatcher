<script setup>
import StarBackground from './components/StarBackground.vue';
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />
  <StarBackground />
    <router-view />
</template>

<style>

</style>