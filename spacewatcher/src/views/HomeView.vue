<template>
  <div>
    <input v-model="userQuery"></input>
    <input v-model="userDate" type="date"></input>
    <button type="button" @click="onClick">Send</button>
    <div class="moon-info">
      <h3>Moon Phase</h3>
      <div>{{ moonPhase }}</div>
      <div>
        <div v-if="moonPhaseImage !== ''">
          <img alt="moon image" :src="moonPhaseImage">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const userQuery = ref('');
  const userDate = ref('');
  const moonPhase = ref('Not Fetched Yet');
  const moonPhaseImage = ref('');
  const moonNamesToImages = {
    "First Quarter": "/phase_first_quarter.png",
    "Full Moon": "/phase_full_moon.png",
    "New Moon": "/phase_new_moon.png",
    "Last Quarter": "/phase_third_quarter.png",
    "Waning Crescent": "/phase_waning_crescent.png",
    "Waning Gibbous": "/phase_waning_gibbous.png",
    "Waxing Gibbous": "/phase_waxing_gibbous.png",
    "Waxing Crescent": "/phase_waxing_cresent.png",
  }
  async function onClick() {
    const params = new URLSearchParams();
    params.set('query', userQuery.value);
    params.set('dateTime', userDate.value);
    const response = await fetch(`http://localhost:3000/api/v1/astronomy?${params}`);
    const apiData = await response.json();
    moonPhase.value = apiData.astronomy.astro.moon_phase;
    moonPhaseImage.value = moonNamesToImages[apiData.astronomy.astro.moon_phase];
    console.log(apiData);
  }

</script>

<style>
h1{
  color: #74ccf0;
}

.logo {
  height: 60px;
}

.moon-info {
  color: white;
}
</style>
