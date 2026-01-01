<template>
  <div class="stars-container" ref="starsContainer"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const starsContainer = ref(null)

onMounted(() => {
  const numStars = 150
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div')
    star.className = 'star'
    star.style.top = `${Math.random() * 100}%`
    star.style.left = `${Math.random() * 100}%`
    star.style.animationDelay = `${Math.random() * 5}s`
    starsContainer.value.appendChild(star)
  }
})
</script>

<style>
.stars-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(#000f1a 0%, #072933 100%);
  overflow: hidden;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  opacity: 0.9;
  animation: twinkle 3s infinite ease-in-out;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.1; }
}
</style>
