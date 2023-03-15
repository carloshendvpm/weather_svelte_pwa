<script>
  import DailyForecastCard from "./DailyForecastCard.svelte";
  import { fly } from 'svelte/transition'
  import sun from '$lib/images/sunny.svg'
  import rain from '$lib/images/rain.svg'
  import thunder from '$lib/images/thunder.svg'
</script>
<div class="mt-4 w-full max-w-xl flex bg-zinc-800 rounded flex-col p-8 gap-2 text-white" in:fly="{{ y: 200, duration: 3000 }}">
  <div>
    <p class="font-semibold text-2xl">Daily Forecast</p>
  </div>
  <div class="flex flex-row items-center w-full ">
    <div class="flex gap-4 overflow-y-auto h-fit p-2 md:overflow-hidden items-center mr-2 w-full max-w-xl">
      <DailyForecastCard day="Mon" date="15/03" dayWeatherImg={sun} temperature="26"/>
      <DailyForecastCard day="Tue" date="16/03" dayWeatherImg={rain}/>
      <DailyForecastCard day="Wed" date="17/03" dayWeatherImg={thunder}/>
      <DailyForecastCard day="Wed" date="17/03"/>
      <DailyForecastCard day="Wed" date="17/03"/>
      <DailyForecastCard day="Wed" date="17/03"/>
      <DailyForecastCard day="Wed" date="17/03"/>
    </div>
    <p class="md:hidden"> + </p>
  </div>
</div>