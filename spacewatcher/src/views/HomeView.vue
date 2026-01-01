<template>
  <div class="widget">
    <h1>Track The Moon</h1>
    <div class="input-container">
      <div class="input-wrapper">
        <label for="location-input">Location</label>
        <input v-model="userQuery" id="location-input"></input>
      </div>
      <div class="input-wrapper">
        <label for="date-input">Date</label>
        <input v-model="userDate" type="date" id="date-input"></input>
      </div>
    </div>
    <div>
      <div class="moon-info">
        <div class="moon-image">
          <div v-if="moonPhaseImage !== ''">
            <img alt="moon image" :src="moonPhaseImage">
          </div>
        </div>
        <div class="moon-text-info">
          <div>
            <strong>Moon Phase:</strong>
            <span>{{ moonPhase }}</span>
          </div>
          <div>
            <strong>Moon Rise:</strong>
            <span>{{ moonRise }}</span>
          </div>
          <div>
            <strong>Moon Set:</strong>
            <span>{{ moonSet }}</span>
          </div>
          <div>
            <strong>Moon Illumination:</strong>
            <span>{{ moonIllumination }}</span>
          </div>          
          <div class="button-wrapper">
            <button type="button" @click="onClick">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  const userQuery = ref('');
  const userDate = ref('');
  const moonPhase = ref('Search for a Moon Phase!');
  const moonRise = ref('');
  const moonSet = ref('');
  const moonIllumination = ref('');
  const moonPhaseImage = ref('');
  const moonNamesToImages = {
    "First Quarter": "/phase_first_quarter.png",
    "Full Moon": "/phase_full_moon.png",
    "New Moon": "/phase_new_moon.png",
    "Last Quarter": "/phase_third_quarter.png",
    "Waning Crescent": "/phase_waning_crescent.png",
    "Waning Gibbous": "/phase_waning_gibbous.png",
    "Waxing Gibbous": "/phase_waxing_gibbous.png",
    "Waxing Crescent": "/phase_waxing_crescent.png",
  }

  // local YYYY-MM-DD
  onMounted(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    userDate.value = `${yyyy}-${mm}-${dd}`;
  });

  async function onClick() {
    const params = new URLSearchParams();
    params.set('query', userQuery.value);
    params.set('dateTime', userDate.value);
    const response = await fetch(`http://localhost:3000/api/v1/astronomy?${params}`);
    const apiData = await response.json();

    const astro = apiData?.astronomy?.astro;
    if (!astro) {
      moonPhase.value = "Location not found. Please try another location.";
      moonPhaseImage.value = "";
      moonRise.value = "";
      moonSet.value = "";
      moonIllumination.value = "";
      return;
    }

    moonPhase.value = astro.moon_phase;
    moonPhaseImage.value = moonNamesToImages[apiData.astronomy.astro.moon_phase] ?? "";
    moonRise.value = astro.moonrise;
    moonSet.value = astro.moonset;
    moonIllumination.value = astro.moon_illumination;
  }

</script>

<style>
.widget{
  max-width: 1080px;
  margin: 0 auto;
}

h1{
  color: white;
  text-align: center;
  font-weight: bold;
}

.logo {
  height: 60px;
}

.moon-info {
  color: white;
}

.input-container{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 16px;
  .input-wrapper{
    background-color: var(--input-color);
    border: 1px solid color-mix(in srgb, white 30%, var(--input-color) 90%);
    padding: 12px 8px 0 8px; 
    border-radius: 6px;
    label{
      color: hsl(0 0% 70%);
      display: flex;
      margin-bottom: 4px;
    }
    input{
      padding: 12px 0;
      font-family: sans-serif;
      font-size: 1.2rem;
      width: 100%;
      border: none;
      border-radius: 6px;
      background-color: transparent;
      color: white;
      color-scheme: dark;
      &:focus{
        outline: none;
      }
    }
  }
}

.moon-info{
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  .moon-image{
    height: 450px;
    max-width: 450px;
    img{
      max-width: 100%;
    }
  }
  .moon-text-info{
    gap: 20px;
    display: flex;
    flex-direction: column;
    & > div:not(.button-wrapper){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      strong{
        color: hsl(0 0% 70%);
      }
    }
  }
}

.button-wrapper{
  text-align: end;
  margin-top: 16px;
  button{
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 1.1rem;
    color: white;
    background-color: color-mix(in srgb, white 10%, var(--input-color) 90%);
    transition: background-color 150ms;
    &:hover{
      cursor: pointer;
      background-color: color-mix(in srgb, white 15%, var(--input-color) 90%);
    }
  }
}
</style>
