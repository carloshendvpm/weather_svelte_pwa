<script>
  import humidty from '$lib/images/humidity.svg';
  import rain from '$lib/images/rain.svg';
</script>

<div class="bg-zinc-800 flex flex-col text-white w-full max-w-xl p-8 border-4 rounded-lg">
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
  <div class="flex flex-col sm:flex-row gap-5 text-center w-full items-start justify-between">
    <div class="bg-zinc-600/50 w-1/2 p-2.5 flex gap-2 rounded border-2 border-zinc-400/50 text-center">
      <img src={humidty} alt="" class="w-5">
      <p class="font-semibold text-sm">Humidity: 70%</p>
    </div>
    <div class="bg-zinc-600/50 w-1/2 p-2.5 flex gap-2 rounded border-2 border-zinc-400/50 text-center">
      <img src={humidty} alt="" class="w-5">
      <p class="font-semibold text-sm">Humidity: 70%</p>
    </div>
    <div class="bg-zinc-600/50 w-1/2 p-2.5 flex gap-2 rounded border-2 border-zinc-400/50 text-center">
      <img src={humidty} alt="" class="w-5">
      <p class="font-semibold text-sm">Chuva: 10%</p>
    </div>
  </div>
</div>