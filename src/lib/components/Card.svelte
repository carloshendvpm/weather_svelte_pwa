<script>
  import humidty_icon from '$lib/images/humidity.svg';
  import rain_icon from '$lib/images/rain.svg';
</script>

<div class="bg-zinc-800 flex flex-col text-white w-full max-w-xl p-8 border-4 rounded-lg">
  <div class="header flex mb-8">
    <div>
      <p class="text-6xl font-semibold mb-1">29ºC</p>
      <p class="font-medium mb-3">Feels like 31ºC</p>
      <p class="font-medium text-xl">Recife, PE</p>
    </div>
  </div>
  <div class="flex flex-row justify-between">
    <div class="humidity flex items-center w-1/3 bg-zinc-600 bg-opacity-40 justify-center p-3 md:pr-0 rounded-sm gap-2 md:gap-5">
      <div class="font-medium">
        <p>Humidity</p>
        <p>17%</p>
      </div>
    </div>
    <div>
      <div class="rain ">
        <div class="font-medium">
          <p>Rain</p>
          <p>17%</p>
        </div>
      </div>
    </div>
  </div>
</div>