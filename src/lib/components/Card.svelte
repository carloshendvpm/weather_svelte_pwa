<script>
  import humidty_icon from '$lib/images/humidity.svg';
</script>

<div class="bg-zinc-800 flex flex-col text-white w-full max-w-xl p-8 border-4 rounded-lg">
  <div class="header flex mb-8">
    <div>
      <p class="text-6xl font-semibold mb-1">29ºC</p>
      <p class="font-medium mb-3">Feels like 31ºC</p>
      <p class="font-medium text-xl">Recife, PE</p>
    </div>
  </div>
  <div>
    <div class="humidity flex items-center w-2/5 bg-zinc-600 bg-opacity-40 justify-center pr-2 md:pr-0 max-w-xs rounded-sm gap-2 md:gap-5">
      <div>
        <img src={humidty_icon} alt="humidity" class="w-10 h-1/3">
      </div>
      <div class="font-medium">
        <p>Humidity</p>
        <p>17%</p>
      </div>
    </div>
  </div>
</div>