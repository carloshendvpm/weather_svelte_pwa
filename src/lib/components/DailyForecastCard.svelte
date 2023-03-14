<script>
  export let day;
  export let date;
  export let dayWeatherImg;
  export let temperature = '';
</script>
<div class="bg-zinc-800 drop-shadow-2xl shadow transition duration-300 ease-in-out hover:scale-125 w-1/2 p-2.5 flex flex-col items-center gap-3 rounded border-zinc-400/50 text-center">
  <p class="font-semibold text-base">{day}</p>
  <p class="font-normal text-sm">{date}</p>
  <img src={dayWeatherImg} alt="img weather" class="w-1/2">
  <p class="font-bold text-base">{temperature}ºC</p>
</div>