<script>
  import humidty from '$lib/images/humidity.svg';
  import rain from '$lib/images/rain.svg';
  import sun from '$lib/images/sunny.svg'
</script>

<div class="bg-zinc-800/95 flex flex-col text-white w-full max-w-xl p-8 drop-shadow-lg rounded-lg">
  <div class="header flex justify-between mb-8">
    <div>
      <p class="text-6xl font-semibold mb-1">29ºC</p>
      <p class="font-medium mb-3">Feels like 31ºC</p>
      <p class="font-medium text-xl"> Recife, PE</p>
    </div>
    <div class="flex justify-end m-2 items-start w-1/5">
      <img src={rain} alt="rain" class="text-center">
    </div>
  </div>
  <div class="flex flex-row sm:flex-row gap-5 text-center w-full items-start justify-between">
    <div class="bg-zinc-800 drop-shadow-2xl shadow-2xl w-2/5 p-2.5 flex flex-col items-center gap-1 rounded border-zinc-400/50 text-center">
      <img src={humidty} alt="" class="w-5">
      <p class="font-semibold text-sm">70%</p>
      <p class="font-normal text-xs">Humidity</p>
    </div>
    <div class="bg-zinc-800 drop-shadow-2xl shadow-zinc-800 w-2/5 p-2.5 flex flex-col items-center gap-1 rounded border-zinc-400/50 text-center">
      <img src={rain} alt="" class="w-5">
      <p class="font-semibold text-sm">10%</p>
      <p class="font-normal text-xs">Rain</p>
    </div>
    <div class="bg-zinc-800 drop-shadow-2xl shadow-2xl w-2/5 p-2.5 flex flex-col items-center gap-1 rounded border-zinc-400/50 text-center">
      <img src={sun} alt="" class="w-5">
      <p class="font-semibold text-sm">10</p>
      <p class="font-normal text-xs">UV</p>
    </div>
  </div>
</div>