<script>
  import humidty from '$lib/images/humidity.svg';
  import rain from '$lib/images/rain.svg';
  import sun from '$lib/images/sunny.svg'
  import InfoWeather from './InfoWeather.svelte';
  import { fly } from 'svelte/transition'
  let location = "Recife, PE"
  let temperature = "29ºC"
  let date = "15, mar 2023."
</script>

<div class="bg-zinc-800 flex flex-col text-white w-full max-w-xl p-8 drop-shadow-lg rounded-lg mt-10 " in:fly="{{ y: 200, duration: 2000 }}">
  <div class="header flex justify-between mb-8">
    <div>
      <p class="font-medium text-xl">{location}</p>
      <p class="text-6xl font-semibold mb-1">{temperature}</p>
      <p class="mb-3">{date}</p>
    </div>
    <div class="flex justify-end m-2 items-start w-1/5">
      <img src={rain} alt="rain" class="text-center">
    </div>
  </div>
  <div class="flex flex-row sm:flex-row text-center w-full items-start justify-between">
    <InfoWeather percentage="10%" icon={rain} type="Rain"/>
    <InfoWeather percentage="70%" icon={humidty} type="Humidity"/>
    <InfoWeather percentage="10" icon={sun} type="UV"/>
    <InfoWeather percentage="10" icon={sun} type="UV"/>
  </div>
</div>